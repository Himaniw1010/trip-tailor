export default function parseDays(formData) {
    const days = {};
  
    for (const [key, value] of formData.entries()) {
      const dayMatch = key.match(/^Day-(\d+)__(Activity-\w{8}-\w{4}-\w{4}-\w{4}-\w{12})__(\w+)$/);
  
      if (dayMatch) {
        const day = dayMatch[1];
        const activityId = dayMatch[2];
        const field = dayMatch[3];
  
        if (!days[day]) {
          days[day] = {};
        }
  
        if (!days[day][activityId]) {
          days[day][activityId] = {};
        }
  
        days[day][activityId][field] = value;
      }
    }
  
    return days;
  }