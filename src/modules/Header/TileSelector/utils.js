export const generateOptionsArray = tileProviders => {
  let optionMap = {};
  for (let i = 0; i < tileProviders.length; i++) {
    let provider = tileProviders[i];
    if (optionMap[provider.group]) {
      optionMap[provider.group].push({
        text: provider.name,
        value: provider.code
      });
    } else {
      optionMap[provider.group] = [
        {
          text: provider.name,
          value: provider.code
        }
      ];
    }
  }
  return optionMap;
};
