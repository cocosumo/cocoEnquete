export const setCheckcboxValue = (e, prev) => {
  const name = e.target.name;
  if (prev[name].value.includes(e.target.value)) {
    prev[name].value = prev[name].value.filter((item) => item !== (e.target.value));
  } else {
    prev[name].value = prev[name].value.concat(e.target.value);
  }

  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  };
}

export const setPulldownValue = (e, prev, name) => {
  prev[name].value = e.target.innerText;
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  }
}

export const setPulldownObj = (e, prev, tgtArray, name) => {
  prev[name].value = tgtArray[e.target.innerText];
  console.log('annualIncome value : ', prev[name].value);
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value },
  }
}

export const setRadio = (e, prev) => {
  const name = e.target.name;
  prev[name].value = e.target.value;
  return {
    ...prev,
    [name]: { ...prev[name], value: prev[name].value},
  }
}

export const setTextBoxValue = (e, prev) => {
  return setRadio(e, prev);
}