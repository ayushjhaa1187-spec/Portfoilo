export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#060608" }}
    >
      <div className="loading-monogram">
        <img 
          src="/signature-gold.png" 
          alt="Ayush Kumar Jha Loading" 
          style={{ height: '196px', width: 'auto', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
