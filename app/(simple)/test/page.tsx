async function fetchData(): Promise<{ name: string }> {
  return new Promise((r) => {
    setTimeout(() => {
      r({
        name: "test",
      });
    }, 1500);
  });
}

export default async function TestPage() {
  let data = await fetchData();

  return (
    <div>
      <h1>Test Page</h1>
      <p>{data.name}</p>
    </div>
  );
}
