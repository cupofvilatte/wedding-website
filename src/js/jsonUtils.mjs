export const toJson = (data) => {
    try {
      return JSON.stringify(data);
    } catch (error) {
      console.error('Error converting to JSON:', error);
      return null;
    }
};

export const fromJson = (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
};