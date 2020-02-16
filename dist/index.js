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

var MujiInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0.25rem;\n  margin: 0.25rem;\n  height: 100%;\n  font-weight: 300;\n  text-align: right;\n"], ["\n  padding: 0.25rem;\n  margin: 0.25rem;\n  height: 100%;\n  font-weight: 300;\n  text-align: right;\n"])));
var MujiTile = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  letter-spacing: 0.1em;\n  margin: 0.5rem 0.25rem 0rem 0.25rem;\n  width: 9rem;\n  height: 7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n"], ["\n  letter-spacing: 0.1em;\n  margin: 0.5rem 0.25rem 0rem 0.25rem;\n  width: 9rem;\n  height: 7rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid black;\n"])));
var templateObject_1, templateObject_2;

export { MujiInput, MujiTile };
