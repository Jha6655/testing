var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h

  return _c(
    "form",
    {
      ref: "form",
      staticClass: "form",
      class: {
        hidden: _vm.isHidden,
      },
      attrs: {
        autocomplete: "off",
      },
      on: {
        submit: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c(
        "div",
        {
          staticClass: "form__inputs",
        },
        [
          _vm._l(_vm.inputs, function (_ref, index) {
            var name = _ref.name,
              placeholder = _ref.placeholder,
              value = _ref.value,
              isError = _ref.isError,
              isTextarea = _ref.isTextarea,
              isEmpty = _ref.isEmpty
            return [
              !isTextarea
                ? _c(
                    "div",
                    {
                      key: name,
                      class: "form-input-" + (index + 1),
                    },
                    [
                      _c("TheInput", {
                        attrs: {
                          value: value,
                          placeholder: placeholder,
                          name: name,
                          "is-error": isError,
                          "is-empty": isEmpty,
                        },
                        on: {
                          focus: _vm.onFocus,
                          blur: _vm.onBlur,
                          input: _vm.onInput,
                        },
                      }),
                    ],
                    1
                  )
                : _c(
                    "div",
                    {
                      key: name + index,
                      staticClass: "form-textarea",
                    },
                    [
                      _c("TheTextarea", {
                        attrs: {
                          value: value,
                          placeholder: placeholder,
                          name: name,
                          "is-error": isError,
                          "is-empty": isEmpty,
                        },
                        on: {
                          focus: _vm.onFocus,
                          blur: _vm.onBlur,
                        },
                      }),
                    ],
                    1
                  ),
            ]
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form__button",
          class: {
            disabled: _vm.isSending,
          },
        },
        [
          _c("CTAButton", {
            attrs: {
              "is-button": true,
              "is-scroll-trigger": _vm.isButtonAnimation,
              text: "Send",
            },
            nativeOn: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.submitForm.apply(null, arguments)
              },
            },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

export { render, staticRenderFns }