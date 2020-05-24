import styled from 'styled-components'

function __makeTemplateObject (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, 'raw', { value: raw })
  } else {
    cooked.raw = raw
  }
  return cooked
}

var MujiButton = styled.button(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  background-color: #fff;\n  margin: 0.25rem;\n  min-width: 4rem;\n  border: 1px solid black;\n  padding: 0.25rem 0.5rem;\n  font-weight: 300;\n  letter-spacing: 0.1px;\n  cursor: ',
        ';\n  pointer-events: ',
        ';\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  &:focus {\n    outline: #30d430 auto 3px;\n  }\n'
      ],
      [
        '\n  background-color: #fff;\n  margin: 0.25rem;\n  min-width: 4rem;\n  border: 1px solid black;\n  padding: 0.25rem 0.5rem;\n  font-weight: 300;\n  letter-spacing: 0.1px;\n  cursor: ',
        ';\n  pointer-events: ',
        ';\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  &:focus {\n    outline: #30d430 auto 3px;\n  }\n'
      ]
    )),
  function (props) {
    return props.disabled ? 'not-allowed' : 'pointer'
  },
  function (props) {
    return props.disabled ? 'none' : 'auto'
  }
)
var MujiFetchMsg = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  border: 1px dotted black;\n  margin: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n'
      ],
      [
        '\n  border: 1px dotted black;\n  margin: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n'
      ]
    ))
)
var MujiInput = styled.input(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  padding: 0.25rem;\n  margin: 0.25rem;\n  height: 100%;\n  font-weight: 300;\n  text-align: right;\n'
      ],
      [
        '\n  padding: 0.25rem;\n  margin: 0.25rem;\n  height: 100%;\n  font-weight: 300;\n  text-align: right;\n'
      ]
    ))
)
var MujiSectionHeader = styled.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  padding: 0.25rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n'
      ],
      [
        '\n  padding: 0.25rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n'
      ]
    ))
)
var MujiTag = styled.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  margin: 0.25rem;\n  min-width: 3rem;\n  max-width: 6rem;\n  border: 1px solid black;\n  padding: 0rem 0.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 1.75rem;\n'
      ],
      [
        '\n  margin: 0.25rem;\n  min-width: 3rem;\n  max-width: 6rem;\n  border: 1px solid black;\n  padding: 0rem 0.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 1.75rem;\n'
      ]
    ))
)
var MujiTile = styled.div(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  letter-spacing: 0.1em;\n  margin: 0.25rem;\n  width: 9rem;\n  height: 7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n'
      ],
      [
        '\n  letter-spacing: 0.1em;\n  margin: 0.25rem;\n  width: 9rem;\n  height: 7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n'
      ]
    ))
)
var MujiLine = styled.div(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      ['\n  ', '\n\n  ', '\n'],
      ['\n  ', '\n\n  ', '\n']
    )),
  function (_a) {
    var hrz = _a.hrz
    return (
      !hrz &&
      '\n    border-bottom: 1px solid #aaa;\n    margin: 0.25rem 0rem;\n    '
    )
  },
  function (_a) {
    var hrz = _a.hrz
    return (
      hrz &&
      '\n    border-right: 1px solid #aaa;\n    margin: 0rem 0.25rem;\n    '
    )
  }
)
var MujiHealthCheck = styled.h1(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      ['\n  background-color: pink;\n'],
      ['\n  background-color: pink;\n']
    ))
)
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8

export {
  MujiButton,
  MujiFetchMsg,
  MujiHealthCheck,
  MujiInput,
  MujiLine,
  MujiSectionHeader,
  MujiTag,
  MujiTile
}
