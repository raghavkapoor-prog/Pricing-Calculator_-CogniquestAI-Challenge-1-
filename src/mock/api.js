export const mockLogin = (email, password) => {
    return email === "test@company.com" && password === "password";
  };
  
  export const fetchTools = () => {
    return [
      { id: 1, name: "Tool 1", version: "v1" },
      { id: 2, name: "Tool 2", version: "v2" },
    ];
  };
  