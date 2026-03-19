export function CursorArrow({ color }: { color: string }) {
  void color;
  return (
    <img
      src="/images/fingerprint.svg"
      alt=""
      style={{
        height: '0.55em',
        width: 'auto',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: '0.15em',
      }}
    />
  );
}
