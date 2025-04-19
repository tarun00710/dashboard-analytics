export async function getDashboardData() {
  const res = await fetch(`http://localhost:3000/api/dashboard`, {
    cache:"force-cache",
    next: {
      revalidate: 3600,
    },
  });
  return res.json();
}
