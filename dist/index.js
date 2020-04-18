import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var MujiFetchMsg = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px dotted black;\n  margin: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n"], ["\n  border: 1px dotted black;\n  margin: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n"])));
var MujiInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0.25rem;\n  margin: 0.25rem;\n  height: 100%;\n  font-weight: 300;\n  text-align: right;\n"], ["\n  padding: 0.25rem;\n  margin: 0.25rem;\n  height: 100%;\n  font-weight: 300;\n  text-align: right;\n"])));
var MujiSectionHeader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0.25rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n"], ["\n  padding: 0.25rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid black;\n"])));
var MujiTile = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  letter-spacing: 0.1em;\n  margin: 0.5rem 0.25rem 0rem 0.25rem;\n  width: 9rem;\n  height: 7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n"], ["\n  letter-spacing: 0.1em;\n  margin: 0.5rem 0.25rem 0rem 0.25rem;\n  width: 9rem;\n  height: 7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n"])));
var MujiLine = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var hrz = _a.hrz;
    return !hrz &&
        "\n    border-bottom: 1px solid #aaa;\n    margin: 0.25rem 0rem;\n    ";
}, function (_a) {
    var hrz = _a.hrz;
    return hrz &&
        "\n    border-right: 1px solid #aaa;\n    margin: 0rem 0.25rem;\n    ";
});
var MujiHealthCheck = styled.h1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: pink;\n"], ["\n  background-color: pink;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { MujiFetchMsg, MujiHealthCheck, MujiInput, MujiLine, MujiSectionHeader, MujiTile };
