import Link from "next/link";

export default function PostNotFound() {
  return (
    <div style={{ display: "grid", placeContent: "center", minHeight: "80vh" }}>
      <div className="container text-center">
        <h1>404 | Not found</h1>
        <p>Parece que no se encuentra el artículo</p>
        <Link href="/" className="btn btn-outline-primary">
          Ir a home
        </Link>
      </div>
    </div>
  );
}
