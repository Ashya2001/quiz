
export const fetchQuizData = async () => {
    try {
      const response = await fetch('https://api.jsonserve.com/Uw5CrX');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch quiz data');
    }
  };
  