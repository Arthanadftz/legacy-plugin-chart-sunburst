"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['groupby'], ['metric'], ['secondary_metric'], ['adhoc_filters'], ['custom_filters'], ['row_limit']]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    controlSetRows: [['color_scheme', 'linear_color_scheme']]
  }],
  controlOverrides: {
    metric: {
      label: (0, _core.t)('Primary Metric'),
      description: (0, _core.t)('The primary metric is used to define the arc segment sizes')
    },
    secondary_metric: {
      label: (0, _core.t)('Secondary Metric'),
      default: null,
      description: (0, _core.t)('[optional] this secondary metric is used to ' + 'define the color as a ratio against the primary metric. ' + 'When omitted, the color is categorical and based on labels')
    },
    color_scheme: {
      description: (0, _core.t)('When only a primary metric is provided, a categorical color scale is used.')
    },
    linear_color_scheme: {
      description: (0, _core.t)('When a secondary metric is provided, a linear color scale is used.')
    },
    groupby: {
      label: (0, _core.t)('Hierarchy'),
      description: (0, _core.t)('This defines the level of the hierarchy')
    }
  }
};
exports.default = _default;