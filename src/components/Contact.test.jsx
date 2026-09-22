import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import Contact from "./Contact";

vi.mock("./canvas", () => ({
  EarthCanvas: () => <div data-testid="earth-canvas" />,
}));

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

describe("Contact form", () => {
  beforeEach(() => {
    emailjs.send.mockReset();
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  const fillAndSubmit = () => {
    fireEvent.change(screen.getByPlaceholderText("What's your name?"), {
      target: { value: "Ada Lovelace" },
    });
    fireEvent.change(screen.getByPlaceholderText("What's your email address?"), {
      target: { value: "ada@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("What you want to say?"), {
      target: { value: "Hello there" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
  };

  it("submits the typed values to emailjs and resets the form on success", async () => {
    emailjs.send.mockResolvedValueOnce({});
    render(<Contact />);

    fillAndSubmit();

    expect(screen.getByRole("button", { name: /sending/i })).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByRole("button", { name: /^send$/i })).toBeInTheDocument()
    );

    expect(emailjs.send).toHaveBeenCalledTimes(1);
    const [, , payload] = emailjs.send.mock.calls[0];
    expect(payload).toMatchObject({
      from_name: "Ada Lovelace",
      from_email: "ada@example.com",
      message: "Hello there",
    });

    expect(screen.getByPlaceholderText("What's your name?")).toHaveValue("");
    expect(window.alert).toHaveBeenCalledWith(
      "Thank you. I will get back to you as soon as possible."
    );
  });

  it("shows an error alert and re-enables the form when emailjs rejects", async () => {
    emailjs.send.mockRejectedValueOnce(new Error("network down"));
    render(<Contact />);

    fillAndSubmit();

    await waitFor(() =>
      expect(window.alert).toHaveBeenCalledWith(
        "Ahh, something went wrong. Please try again."
      )
    );
    expect(screen.getByRole("button", { name: /^send$/i })).toBeInTheDocument();
  });

  it("BUG: submits with empty/invalid fields — no client-side validation blocks it", async () => {
    // None of the inputs are `required`, and handleSubmit never checks
    // form.name/email/message before calling emailjs.send, so an entirely
    // empty submission still fires off an email.
    emailjs.send.mockResolvedValueOnce({});
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("What's your name?");
    const emailInput = screen.getByPlaceholderText("What's your email address?");
    expect(nameInput).not.toBeRequired();
    expect(emailInput).not.toHaveAttribute("required");

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(1));
    const [, , payload] = emailjs.send.mock.calls[0];
    expect(payload.from_name).toBe("");
    expect(payload.from_email).toBe("");
    expect(payload.message).toBe("");
  });
});
