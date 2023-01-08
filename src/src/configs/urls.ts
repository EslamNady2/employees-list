const baseUrls = `${process.env.REACT_APP_API_BASE_URL}/api`;

const urls = {
  employeesUrls: {
    getEmployees: `${baseUrls}/employees`,
    updateEmployee: `${baseUrls}/employees`,
  },
};

export default urls;
