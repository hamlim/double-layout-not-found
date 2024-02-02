async function fetchData(): Promise<{ name: string }> {
  console.log("Fetching data for the header....");
  return new Promise((r) => {
    setTimeout(() => r({ name: "There!" }), 1000);
  });
}

export default async function Header() {
  let data = await fetchData();

  return (
    <header className="flex flex-row justify-between">
      <span>Site Header</span>
      <span>Hello {data.name}</span>
    </header>
  );
}
