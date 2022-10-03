export const CredentialsModifyHandler = (
    event,
    setCredentials,
    credentials
  ) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };