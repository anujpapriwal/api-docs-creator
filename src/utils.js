const scrollToElement = (id, delay, maxAttempts, scrollConfig, currentAttempt) => {
  setTimeout(
    () => {      
      const element = document.getElementById(id);           
      if (currentAttempt > maxAttempts) return;
      if (element) {
        element.scrollIntoView(scrollConfig);
      } else {
        scrollToElement(id, delay, maxAttempts, scrollConfig, currentAttempt+1);
      }
    },
    delay,
  );
};

export const scrollTo = (id, delay = 100, maxAttempts = 1, customScrollconfig = {}) => {  
  const defaultScrollConfig = { behavior: 'smooth', block: 'center', inline: 'center' };
  const scrollConfig = { ...defaultScrollConfig, ...customScrollconfig };
  // const targetYCood = document.getElementById(id).offsetTop - 0;
  // window.scrollTo(null, targetYCood)
  scrollToElement(id, delay, maxAttempts, scrollConfig);
};