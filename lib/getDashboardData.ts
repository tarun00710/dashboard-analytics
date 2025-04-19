export async function getDashboardData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/dashboard`, {
      next: {
        revalidate: 3600,
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch dashboard data");
    }
  
    return res.json();
  }
  