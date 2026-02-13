import { useState } from "react";
import {
  Button,
  Input,
  Label,
  Select,
  Textarea,
  Checkbox,
  Radio,
  FieldDescription,
  FieldError,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  cn,
} from "react-runko-ui";
import { ThemeSwitch } from "./components/ThemeSwitch";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <div className="playground">
      <header className="header">
        <ThemeSwitch />
        <h1>React Runko UI Playground</h1>
        <p className="subtitle">
          Interactive demo of all components with live editing
        </p>
      </header>

      <div className="demo-grid">
        {/* Buttons Section */}
        <section className="demo-section">
          <h2>Buttons</h2>
          <div className="demo-content">
            <div className="button-group">
              <Button variant="primary" onClick={() => alert("Primary!")}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={() => alert("Secondary!")}>
                Secondary Button
              </Button>
              <Button variant="danger" onClick={() => alert("Danger!")}>
                Danger Button
              </Button>
              <Button variant="text" onClick={() => alert("Text!")}>
                Text Button
              </Button>
              <Button disabled>Disabled Button</Button>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="demo-section">
          <h2>Input Fields</h2>
          <div className="demo-content">
            <div className="form-group">
              <Label htmlFor="input-normal">Normal Input</Label>
              <Input
                id="input-normal"
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Label htmlFor="input-error">Input with Error</Label>
              <Input
                id="input-error"
                type="text"
                variant="error"
                placeholder="Error state"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Label htmlFor="input-success">Input with Success</Label>
              <Input
                id="input-success"
                type="text"
                variant="success"
                placeholder="Success state"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Label htmlFor="input-required" required>
                Required Input
              </Label>
              <Input
                id="input-required"
                type="text"
                placeholder="This field is required"
                required
              />
            </div>
          </div>
        </section>

        {/* Select Section */}
        <section className="demo-section">
          <h2>Select Dropdown</h2>
          <div className="demo-content">
            <div className="form-group">
              <Label htmlFor="select-normal">Choose an option</Label>
              <Select
                id="select-normal"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value="">Select one...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>

            <div className="form-group">
              <Label htmlFor="select-error">Select with Error</Label>
              <Select id="select-error" variant="error">
                <option value="">Invalid selection</option>
                <option value="option1">Option 1</option>
              </Select>
            </div>

            <div className="form-group">
              <Label htmlFor="select-success">Select with Success</Label>
              <Select id="select-success" variant="success">
                <option value="valid">Valid selection</option>
              </Select>
            </div>
          </div>
        </section>

        {/* Textarea Section */}
        <section className="demo-section">
          <h2>Textarea</h2>
          <div className="demo-content">
            <div className="form-group">
              <Label htmlFor="textarea-normal">Your message</Label>
              <Textarea
                id="textarea-normal"
                rows={4}
                placeholder="Type your message here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </div>

            <div className="form-group">
              <Label htmlFor="textarea-error">Textarea with Error</Label>
              <Textarea
                id="textarea-error"
                rows={3}
                variant="error"
                placeholder="Error state"
              />
            </div>
          </div>
        </section>

        {/* Checkboxes Section */}
        <section className="demo-section">
          <h2>Checkboxes</h2>
          <div className="demo-content">
            <div className="checkbox-group">
              <Checkbox
                id="checkbox1"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
              <Label htmlFor="checkbox1">
                Toggle me (checked: {checkboxChecked ? "✓" : "✗"})
              </Label>
            </div>

            <div className="checkbox-group">
              <Checkbox id="checkbox2" defaultChecked />
              <Label htmlFor="checkbox2">Pre-checked option</Label>
            </div>

            <div className="checkbox-group">
              <Checkbox id="checkbox3" />
              <Label htmlFor="checkbox3">Unchecked option</Label>
            </div>

            <div className="checkbox-group">
              <Checkbox id="checkbox4" disabled />
              <Label htmlFor="checkbox4">Disabled checkbox</Label>
            </div>
          </div>
        </section>

        {/* Radio Buttons Section */}
        <section className="demo-section">
          <h2>Radio Buttons</h2>
          <div className="demo-content">
            <div className="radio-group">
              <Radio
                id="radio1"
                name="demo-radio"
                value="option1"
                checked={radioValue === "option1"}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Label htmlFor="radio1">Option 1</Label>
            </div>

            <div className="radio-group">
              <Radio
                id="radio2"
                name="demo-radio"
                value="option2"
                checked={radioValue === "option2"}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Label htmlFor="radio2">Option 2</Label>
            </div>

            <div className="radio-group">
              <Radio
                id="radio3"
                name="demo-radio"
                value="option3"
                checked={radioValue === "option3"}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Label htmlFor="radio3">Option 3</Label>
            </div>

            <p className="selected-value">Selected: {radioValue}</p>
          </div>
        </section>

        {/* CN Utility Demo */}
        <section className="demo-section full-width">
          <h2>CN Utility Function Demo</h2>
          <div className="demo-content">
            <p>
              The <code>cn</code> utility combines class names and filters out
              falsy values:
            </p>

            <div className="cn-demo">
              <div className="controls">
                <button onClick={() => setShowSuccess(!showSuccess)}>
                  Toggle Success
                </button>
                <button onClick={() => setShowError(!showError)}>
                  Toggle Error
                </button>
              </div>

              <div
                className={cn(
                  "demo-box",
                  showSuccess && "success",
                  showError && "error"
                )}
              >
                <p>
                  <strong>Applied classes:</strong>
                </p>
                <code>
                  cn("demo-box", {showSuccess ? "true" : "false"} &&
                  "success", {showError ? "true" : "false"} && "error")
                </code>
                <p>
                  <strong>Result:</strong> "
                  {cn("demo-box", showSuccess && "success", showError && "error")}
                  "
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VariantClassNames Demo */}
        <section className="demo-section full-width">
          <h2>VariantClassNames Feature Demo</h2>
          <div className="demo-content">
            <p>
              Components now support custom className mapping for variants via the{" "}
              <code>variantClassNames</code> prop:
            </p>

            <div className="variant-demo">
              <div className="comparison-grid">
                <div className="comparison-item">
                  <h3>Default Variant Classes</h3>
                  <div className="demo-inputs">
                    <Input
                      variant="error"
                      placeholder="Default error styling"
                    />
                    <Input
                      variant="success"
                      placeholder="Default success styling"
                    />
                    <Button variant="primary">Default Primary</Button>
                  </div>
                  <code className="code-block">
                    {`<Input variant="error" />
// Uses: runko-input--error

<Button variant="primary" />
// Uses: runko-button--primary`}
                  </code>
                </div>

                <div className="comparison-item">
                  <h3>Custom VariantClassNames</h3>
                  <div className="demo-inputs">
                    <Input
                      variant="error"
                      variantClassNames={{
                        error: "custom-error-input",
                      }}
                      placeholder="Custom error styling"
                      style={{
                        borderColor: "#ff6b6b",
                        backgroundColor: "#fff5f5",
                      }}
                    />
                    <Input
                      variant="success"
                      variantClassNames={{
                        success: "custom-success-input",
                      }}
                      placeholder="Custom success styling"
                      style={{
                        borderColor: "#51cf66",
                        backgroundColor: "#f0fff4",
                      }}
                    />
                    <Button
                      variant="primary"
                      variantClassNames={{
                        primary: "custom-primary-btn",
                      }}
                      style={{
                        backgroundColor: "#7950f2",
                        borderColor: "#7950f2",
                      }}
                    >
                      Custom Primary
                    </Button>
                  </div>
                  <code className="code-block">
                    {`<Input 
  variant="error"
  variantClassNames={{
    error: "custom-error-input"
  }}
/>
// Uses: custom-error-input

<Button 
  variant="primary"
  variantClassNames={{
    primary: "custom-primary-btn"
  }}
/>
// Uses: custom-primary-btn`}
                  </code>
                </div>
              </div>

              <div className="usage-notes">
                <h4>💡 Key Points:</h4>
                <ul>
                  <li>
                    <code>variantClassNames</code> allows you to override default
                    variant classes
                  </li>
                  <li>
                    Perfect for integrating with CSS frameworks like Tailwind
                  </li>
                  <li>
                    Falls back to default class if variant not in mapping
                  </li>
                  <li>Fully type-safe with TypeScript</li>
                  <li>100% backward compatible - optional prop</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Field Helpers and Tooltips */}
        <section className="demo-section full-width">
          <h2>Field Helpers & Tooltips</h2>
          <div className="demo-content">
            <div className="helper-demo">
              <h3>FieldDescription & FieldError</h3>
              <div className="form-group">
                <Label htmlFor="username-demo" required>
                  Username
                </Label>
                <Input
                  id="username-demo"
                  type="text"
                  placeholder="Enter username"
                  aria-describedby="username-description username-error"
                  variant={showError ? "error" : undefined}
                />
                <FieldDescription id="username-description">
                  Must be 3-20 characters, alphanumeric only
                </FieldDescription>
                {showError && (
                  <FieldError id="username-error">
                    Username is too short
                  </FieldError>
                )}
                <div style={{ marginTop: "1rem" }}>
                  <Button
                    onClick={() => setShowError(!showError)}
                    variant="secondary"
                  >
                    Toggle Error State
                  </Button>
                </div>
              </div>

              <h3 style={{ marginTop: "2rem" }}>Tooltip Component (New!)</h3>
              <p>The new Tooltip component automatically handles positioning and visibility:</p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <p>Top (default):</p>
                  <Tooltip content="This tooltip appears on top" position="top">
                    <Button variant="secondary">Hover me</Button>
                  </Tooltip>
                </div>
                <div>
                  <p>Bottom:</p>
                  <Tooltip
                    content="This tooltip appears on bottom"
                    position="bottom"
                  >
                    <Button variant="secondary">Hover me</Button>
                  </Tooltip>
                </div>
                <div>
                  <p>Left:</p>
                  <Tooltip
                    content="This tooltip appears on left"
                    position="left"
                  >
                    <Button variant="secondary">Hover me</Button>
                  </Tooltip>
                </div>
                <div>
                  <p>Right:</p>
                  <Tooltip
                    content="This tooltip appears on right"
                    position="right"
                  >
                    <Button variant="secondary">Hover me</Button>
                  </Tooltip>
                </div>
              </div>

              <h3 style={{ marginTop: "2rem" }}>Legacy Tooltip Pattern</h3>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <Label>
                  Password
                  <TooltipTrigger
                    aria-describedby="password-tooltip"
                    style={{ marginLeft: "0.5rem" }}
                    onMouseEnter={() => setShowSuccess(true)}
                    onMouseLeave={() => setShowSuccess(false)}
                  >
                    ℹ️
                  </TooltipTrigger>
                </Label>
                {showSuccess && (
                  <TooltipContent id="password-tooltip">
                    Password must contain at least 8 characters, including
                    uppercase, lowercase, and numbers
                  </TooltipContent>
                )}
              </div>

              <div className="usage-notes" style={{ marginTop: "2rem" }}>
                <h4>Key Features:</h4>
                <ul>
                  <li>
                    <strong>FieldDescription:</strong> Provides helpful context
                    for form fields
                  </li>
                  <li>
                    <strong>FieldError:</strong> Displays validation errors with
                    role="alert" for accessibility
                  </li>
                  <li>
                    <strong>Tooltip (New):</strong> Wrapper component with
                    automatic positioning and visibility
                  </li>
                  <li>
                    <strong>TooltipTrigger:</strong> Button element to trigger
                    tooltips
                  </li>
                  <li>
                    <strong>TooltipContent:</strong> Displays tooltip content
                    with role="tooltip"
                  </li>
                  <li>
                    Use aria-describedby to link helpers/tooltips with form
                    fields
                  </li>
                  <li>
                    All components use :where() selectors for easy styling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="demo-section full-width">
          <h2>Complete Form Example</h2>
          <div className="demo-content">
            <form
              className="demo-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="firstName" required>
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="lastName" required>
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <Label htmlFor="email" required>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="country">Country</Label>
                <Select id="country">
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </Select>
              </div>

              <div className="form-group">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="checkbox-group">
                <Checkbox id="terms" required />
                <Label htmlFor="terms">
                  I agree to the terms and conditions *
                </Label>
              </div>

              <div className="form-actions">
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
                <Button type="submit" variant="primary">
                  Submit Form
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
