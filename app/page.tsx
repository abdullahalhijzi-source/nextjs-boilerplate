import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Welcome to Moreira Method Clone</h1>
      <p>Here’s your image:</p>

      <Image
        src="/Spaghettitualetti.png"
        alt="Spaghettitualetti"
        width={300}
        height={300}
        style={{ borderRadius: "12px", marginTop: "20px" }}
      />
    </main>
  );
}
