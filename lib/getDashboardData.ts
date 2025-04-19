export async function getDashboardData() {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                     (typeof window !== 'undefined' ? window.location.origin : '');
      
      const res = await fetch(`${baseUrl}/api/dashboard`, {
        next: {
          revalidate: 3600,
        }
      });
      
      if (!res.ok) {
        console.error(`Failed to fetch dashboard data: ${res.status}`);
        return { 
          sales: [], 
          categories: [], 
          browsers: [],
          visits: [] 
        };
      }
      
      return res.json();
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      return { 
        sales: [], 
        categories: [], 
        browsers: [],
        visits: [] 
      };
    }
  }