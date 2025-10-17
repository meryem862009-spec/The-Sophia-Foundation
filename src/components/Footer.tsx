export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-4 py-10 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Sophia Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
