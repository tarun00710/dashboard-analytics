// utils/exportToCSV.ts
export function exportToCSV<T extends Record<string, any>>(data: T[], fileName: string): void {
    if (!data.length) return;
  
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(row =>
      Object.values(row)
        .map(value =>
          typeof value === 'string' && value.includes(',')
            ? `"${value}"`
            : value
        )
        .join(',')
    );
  
    const csvContent = [header, ...rows].join('\n');
  
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
  
    link.setAttribute('href', url);
    link.setAttribute('download', `${fileName}.csv`);
    link.style.visibility = 'hidden';
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  