(function () {
    angular.module('builder.components', ['builder', 'validator.rules']).config(
        [
            '$builderProvider', function ($builderProvider) {
            $builderProvider.registerComponent('textInput', {
                group: 'Default',
                label: 'Text Input',
                description: 'description',
                placeholder: 'placeholder',
                required: false,
                validationOptions: [
                    {
                        label: 'none',
                        rule: '/.*/'
                    },
                    {
                        label: 'number',
                        rule: '[number]'
                    },
                    {
                        label: 'email',
                        rule: '[email]'
                    },
                    {
                        label: 'url',
                        rule: '[url]'
                    }
                ],
                template: "<div class=\"form-group\">    <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>    <div class=\"col-md-8\">        <input type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>        <p class='help-block'>{{description}}</p>    </div></div>",
                popoverTemplate: "<form>    <div class=\"form-group\">        <label class='control-label'>Label</label>        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>    </div>    <div class=\"form-group\">        <label class='control-label'>Description</label>        <input type='text' ng-model=\"description\" class='form-control'/>    </div>    <div class=\"form-group\">        <label class='control-label'>Placeholder</label>        <input type='text' ng-model=\"placeholder\" class='form-control'/>    </div>    <div class=\"checkbox\">        <label>            <input type='checkbox' ng-model=\"required\" />            Required</label>    </div>    <div class=\"form-group\" ng-if=\"validationOptions.length > 0\">        <label class='control-label'>Validation</label>        <select ng-model=\"$parent.validation\" class='form-control' ng-options=\"option.rule as option.label for option in validationOptions\"></select>    </div>    <hr/>    <div class='form-group'>        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>    </div></form>"
            });
            $builderProvider.registerComponent('textArea', {
                group: 'Default',
                label: 'Text Area',
                description: 'description',
                placeholder: 'placeholder',
                required: false,
                template: "<div class=\"form-group\"> \
                          <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label> \
                          <div class=\"col-md-8\"> \
                          <textarea type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" rows='6' placeholder=\"{{placeholder}}\"/> \
                          <p class='help-block'>{{description}}</p> \
                          </div></div>",
                popoverTemplate: "<form> \
                                     <div class=\"form-group\">  \
                                           <label class='control-label'>Label</label>\
                                                   <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\
                                      </div>    \
                                     <div class=\"form-group\">        \
                                         <label class='control-label'>Description</label> \
                                         <input type='text' ng-model=\"description\" class='form-control'/> \
                                     </div>\
                                     <div class=\"checkbox\">     \
                                         <label>     \
                                             <input type='checkbox' ng-model=\"required\" />     \
                                             Required    \
                                         </label>   \
                                     </div>\
                                     <hr/>  \
                                     <div class='form-group'>    \
                                         <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>    \
                                         <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>   \
                                         <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>   \
                                     </div>\
                                 </form>"
            });
            $builderProvider.registerComponent('checkbox', {
                group: 'Default',
                label: 'Checkbox',
                description: 'description',
                placeholder: 'placeholder',
                required: false,
                options: ['value one', 'value two'],
                arrayToText: true,
                template: "<div class=\"form-group\"> \
                          <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label> \
                                      <div class=\"col-md-8\"> \
                                      <input type='hidden' ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\"/>\
                                      <div class='checkbox' ng-repeat=\"item in options track by $index\">\
                                      <label><input type='checkbox' ng-model=\"$parent.inputArray[$index]\" value='item'/>{{item}}</label> \
                                      </div> \
                                      <p class='help-block'>{{description}}</p> \
                                      </div> \
                                      </div>",
                popoverTemplate: "<form> \
                                     <div class=\"form-group\">  \
                                           <label class='control-label'>Label</label>\
                                                   <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\
                                      </div>    \
                                     <div class=\"form-group\">        \
                                         <label class='control-label'>Description</label> \
                                         <input type='text' ng-model=\"description\" class='form-control'/> \
                                     </div>\
                                     <div class=\"form-group\">   \
                                          <label class='control-label'>Options</label> \
                                          <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>   \
                                     </div>  \
                                     <div class=\"checkbox\">     \
                                         <label>     \
                                             <input type='checkbox' ng-model=\"required\" />     \
                                             Required    \
                                         </label>   \
                                     </div>\
                                     <hr/>  \
                                     <div class='form-group'>    \
                                         <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>    \
                                         <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>   \
                                         <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>   \
                                     </div>\
                                 </form>"
            });
            $builderProvider.registerComponent('radio', {
                group: 'Default',
                label: 'Radio',
                description: 'description',
                placeholder: 'placeholder',
                required: false,
                options: ['value one', 'value two'],
                template: "<div class=\"form-group\">    <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>    <div class=\"col-md-8\">        <div class='radio' ng-repeat=\"item in options track by $index\">            <label><input name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/>                {{item}}            </label>        </div>        <p class='help-block'>{{description}}</p>    </div></div>",
                popoverTemplate: "<form>    <div class=\"form-group\">        <label class='control-label'>Label</label>        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>    </div>    <div class=\"form-group\">        <label class='control-label'>Description</label>        <input type='text' ng-model=\"description\" class='form-control'/>    </div>    <div class=\"form-group\">        <label class='control-label'>Options</label>        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>    </div>    <hr/>    <div class='form-group'>        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>    </div></form>"
            });
            $builderProvider.registerComponent('upload', {
                group: 'Default',
                label: 'Upload data',
                description: 'description',
                placeholder: 'placeholder',
                required: false,
                template: "<div class=\"form-group\"> \
                <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label> \
                    <div class=\"col-md-8\"> \
                <input type=\"file\" name=\"datafile\" size=\"40\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\"> \
                    <p class='help-block'>{{description}}</p> \
                </div></div>",
                popoverTemplate: "<form> \
                                     <div class=\"form-group\">  \
                                           <label class='control-label'>Label</label>\
                                                   <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\
                                      </div>    \
                                     <div class=\"form-group\">        \
                                         <label class='control-label'>Description</label> \
                                         <input type='text' ng-model=\"description\" class='form-control'/> \
                                     </div>\
                                     <div class=\"checkbox\">     \
                                         <label>     \
                                             <input type='checkbox' ng-model=\"required\" />     \
                                             Required    \
                                         </label>   \
                                     </div>\
                                     <hr/>  \
                                     <div class='form-group'>    \
                                         <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>    \
                                         <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>   \
                                         <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>   \
                                     </div>\
                                 </form>"
            });
            return $builderProvider.registerComponent('select', {
                group: 'Default',
                label: 'Select',
                description: 'description',
                placeholder: 'placeholder',
                required: false,
                options: ['value one', 'value two'],
                template: "<div class=\"form-group\">    <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\">{{label}}</label>    <div class=\"col-md-8\">        <select ng-options=\"value for value in options\" id=\"{{formName+index}}\" class=\"form-control\"            ng-model=\"inputText\" ng-init=\"inputText = options[0]\"/>        <p class='help-block'>{{description}}</p>    </div></div>",
                popoverTemplate: "<form>    <div class=\"form-group\">        <label class='control-label'>Label</label>        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>    </div>    <div class=\"form-group\">        <label class='control-label'>Description</label>        <input type='text' ng-model=\"description\" class='form-control'/>    </div>    <div class=\"form-group\">        <label class='control-label'>Options</label>        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>    </div>    <hr/>    <div class='form-group'>        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>    </div></form>"
            });
        }
        ]);

}).call(this);
