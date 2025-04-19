export async function getDashboardData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`, {
      cache: 'no-store',
    });
    return res.json();
  }
  