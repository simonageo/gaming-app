export const gameValidator = (values) => {
  const errors = {};
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  if (!values.title) {
    errors.title = "Title is required.";
  }

  if (!values.category) {
    errors.category = "Category is required.";
  }

  if (!values.difficultyLevel) {
    errors.difficultyLevel = "Difficulty Level is required.";
  } else if (isNaN(Number(values.difficultyLevel))){
    errors.difficultyLevel = "Please, enter a number."
  } else if (Number(values.difficultyLevel) < 1) {
    errors.difficultyLevel = "Difficulty Level must be bigger or equal to 1.";
  }

  if (!values.imageUrl) {
    errors.imageUrl = "Image URL is required.";
  } else if (!urlRegex.test(values.imageUrl)) {
    errors.imageUrl = "Please enter a valid URL.";
  }

  if (!values.description) {
    errors.description = "Description is required.";
  }

  return errors;
};
