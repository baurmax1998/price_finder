/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        $(".select").on("change", function () {
            //            alert($(this).val());
            $(".select").val($(this).val());
        });
        $("#start").on("click", function () {
            var price1 = $("#price1").val();
            var price2 = $("#price2").val();
            var mass1 = $("#mass1").val();
            var mass2 = $("#mass2").val();
            var realPrice1 = price1 / (mass1 / mass2);
            var priceDifferenzInpercent = realPrice1 / price2 - 1;
            var $output = $("#output");
            if (priceDifferenzInpercent > 0) {
                $("#product1").removeClass().addClass("w3-row-padding w3-panel w3-leftbar w3-border-red w3-pale-red");
                $("#product2").removeClass().addClass("w3-row-padding w3-panel w3-leftbar w3-border-blue w3-pale-green");
                $output.text("P1 ist " + (priceDifferenzInpercent * 100) + "% teurer als P2");
            }
            else if (priceDifferenzInpercent < 0) {
                $("#product1").removeClass().addClass("w3-row-padding w3-panel w3-leftbar w3-border-blue w3-pale-green");
                $("#product2").removeClass().addClass("w3-row-padding w3-panel w3-leftbar w3-border-red w3-pale-red");
                $output.text("P1 ist " + (priceDifferenzInpercent * -100) + "% biliger als P2");
            }
            else if (priceDifferenzInpercent == 0) {
                $("#product1").removeClass().addClass("w3-row-padding w3-panel w3-leftbar w3-border-blue w3-pale-blue");
                $("#product2").removeClass().addClass("w3-row-padding w3-panel w3-leftbar w3-border-blue w3-pale-blue");
                $output.text("Beide sind gleich teuer");
            }
            else {
                $output.text("Fehlerhafte Eingaben!");
            }
        });
    }
};