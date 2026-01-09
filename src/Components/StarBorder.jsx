import "./StarBorder.css";

export default function StarBorder({
  as: Component = "div",
  className = "",
  color = "violet",
  speed = "8s",
  thickness = 1,
  children,
  ...rest
}) {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        "--star-color": color,
        "--star-speed": speed,
        "--star-thickness": `${thickness}px`,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
