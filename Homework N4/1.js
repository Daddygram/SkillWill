const string = "I love the kind of women that will actually just kill me - spike";

const replaceString = (string, valueToReplace, valueToReplaceWith) => {
        return string.split(valueToReplace).join(valueToReplaceWith);
}

console.log(replaceString(string, "spike", "me"))