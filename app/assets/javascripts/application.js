/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  window.GOVUK.modules.start()

  // countries script
  var countries = $('.js-country')

  if (countries.length) {
    countries.each(function (index) {
      if (index > 0) {
        $(this).hide()
      }
    })

    $('.js-add-country').on('click', function () {
      $('.js-country:hidden:first').show().find('input').focus()
    })

    $('.js-remove-country').on('click', function () {
      var parent = $(this).closest('.js-country')
      var lastCountry = $('.js-country').last()
      parent.find('.autocomplete__input').val('')
      parent.hide()
      parent.insertAfter(lastCountry)
      $('.js-country:visible:last').find('input').focus()
    })

    $('.js-country-continue').on('click', function () {
      var visibleInputs = $('.autocomplete__input:visible')
      var emptyInputs = visibleInputs.filter(function() { return $(this).val() === "" })

      if (visibleInputs.length === 0) {
        $('#error-summary').show()
      } else if (emptyInputs.length === visibleInputs.length) {
        $('#error-summary').show()
      } else {
        $('#error-summary').hide()
      }
    })
  }
})
