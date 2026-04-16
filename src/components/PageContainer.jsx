export default function PageContainer({ children, className = "" }) {
  return (
    <main
      className={`
        pt-24            /* mobile: extra space */
        md:pt-20         /* desktop: normal */
        min-h-screen
        ${className}
      `}
    >
      {children}
    </main>
  );
}