class GetCSVs {
  fetchCSV = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  };
}

export default new GetCSVs();
