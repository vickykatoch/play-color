interface SquareProps {
  height: number;
  width: number;
  background: string;
  color: string;
}
export const Square = ({ height, width, background, color }: SquareProps) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: width,
        height: height,
        backgroundColor: background,
        border: "1px solid black",
      }}
    >
      <span style={{ color }}>{background}</span>
    </div>
  );
};
