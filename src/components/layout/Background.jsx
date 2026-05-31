/** Fixed decorative backdrop: ambient color glows + fine grid texture. */
export default function Background() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <span className="g1" />
        <span className="g2" />
        <span className="g3" />
      </div>
      <div className="grid-tex" aria-hidden="true" />
    </>
  );
}
