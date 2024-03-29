"use strict";

exports.__esModule = true;
exports.default = transformProps;

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
function transformProps(chartProps) {
  const {
    width,
    height,
    formData,
    queryData,
    datasource
  } = chartProps;
  const {
    colorScheme,
    linearColorScheme,
    metric,
    secondaryMetric
  } = formData;
  const returnProps = {
    width,
    height,
    data: queryData.data,
    colorScheme,
    linearColorScheme,
    metrics: [metric, secondaryMetric]
  };

  if (datasource && datasource.metrics) {
    const metricWithFormat = datasource.metrics.find(({
      metric_name: metricName,
      d3format
    }) => metricName === formData.metric && d3format);

    if (metricWithFormat) {
      Object.assign(returnProps, {
        numberFormat: metricWithFormat.d3format
      });
    }
  }

  return returnProps;
}