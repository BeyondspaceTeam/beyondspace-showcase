/**
 * @name JSON-Editor Interactive Playground
 * @description The JSON-Editor Interactive Playground is a page where you can test various setups for the JSON Schema parser JSON-Editor
 * @version {{ VERSION }}
 * @author Peter Klein
 * @see https://github.com/pmk65/jedemov2/
 * @license MIT
 * @example see README.md for requirements, examples and usage info
 */

document.addEventListener('DOMContentLoaded', function() {
  

(function () {
  // value -> CSS/JavaScript mapping for external files
  var mapping = {
    jsoneditor: {
      css: 'https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/css/jsoneditor.min.css',
      js: 'https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.js'
    },
    theme: {
      bootstrap2: {
        css: 'https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css'
      },
      bootstrap3: {
        css: 'https://cdn.jsdelivr.net/npm/bootstrap@3.4.0/dist/css/bootstrap.min.css',
        js: [
          'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@3.4.0/dist/js/bootstrap.min.js'
        ]
      },
      bootstrap4: {
        css: 'https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css'
      },
      foundation3: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/foundation/3.2.5/stylesheets/foundation.css'
      },
      foundation4: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/foundation/4.3.2/css/foundation.min.css'
      },
      foundation5: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.min.css'
      },
      foundation6: {
        css: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation-float.min.css',
        js: [
          'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js',
          'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/js/foundation.min.js'
        ]
      },
      jqueryui: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/south-street/jquery-ui.min.css'
      },
      materialize: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
        js: [
          'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ]
      },
      tailwind: {
        css: 'https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css'
      },
      spectre: {
        css: [
          'https://cdn.jsdelivr.net/npm/spectre.css@latest/dist/spectre.min.css',
          'https://cdn.jsdelivr.net/npm/spectre.css@latest/dist/spectre-exp.min.css'
        ]
      }
    },
    iconlib: {
      foundation2: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/foundicons/2.0/stylesheets/general_foundicons.min.css'
      },
      foundation3: {
        css: 'https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.min.css'
      },
      fontawesome3: {
        css: 'https://cdn.jsdelivr.net/npm/font-awesome@3.2.1/css/font-awesome.min.css'
      },
      fontawesome4: {
        css: 'https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css'
      },
      fontawesome5: {
        css: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
      },
      materialicons: {
        css: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      spectre: {
        css: 'https://cdn.jsdelivr.net/npm/spectre.css@latest/dist/spectre-icons.min.css'
      }
    },
    template: {
      ejs: {
        js: 'https://cdn.jsdelivr.net/npm/ejs@latest/lib/ejs.min.js'
      },
      handlebars: {
        js: 'https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.min.js'
      },
      hogan: {
        js: 'https://cdn.jsdelivr.net/npm/hogan-updated@latest/hogan.min.js'
      },
      lodash: {
        js: 'https://cdn.jsdelivr.net/npm/lodash@latest/lodash.min.js'
      },
      markup: {
        js: 'https://cdn.jsdelivr.net/npm/markup-js@latest/src/markup.min.js'
      },
      mustache: {
        js: 'https://cdn.jsdelivr.net/npm/mustache@latest/mustache.min.js'
      },
      swig: {
        js: 'https://cdnjs.cloudflare.com/ajax/libs/swig/1.4.1/swig.min.js'
      },
      underscore: {
        js: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js'
      }
    },
    ext_lib: {
      lib_aceeditor: {
        js: [
          'https://cdn.jsdelivr.net/npm/ace-builds@latest/src-noconflict/ace.min.js',
          'https://cdn.jsdelivr.net/npm/ace-builds@latest/src-noconflict/mode-json.js',
          'https://cdn.jsdelivr.net/npm/ace-builds@latest/src-noconflict/mode-javascript.js'
        ]
      },
      lib_autocomplete: {
        js: 'https://cdn.jsdelivr.net/npm/@trevoreyre/autocomplete-js@latest/dist/autocomplete.min.js',
        css: 'https://cdn.jsdelivr.net/npm/@trevoreyre/autocomplete-js@latest/dist/style.css'
      },
      lib_cleavejs: {
        js: [
          'https://cdn.jsdelivr.net/npm/cleave.js@latest/dist/cleave.min.js',
          'https://cdn.jsdelivr.net/npm/cleave.js@latest/dist/addons/cleave-phone.i18n.min.js'
        ]
      },
      lib_imaskjs: {
        js: 'https://cdn.jsdelivr.net/npm/imask@latest/dist/imask.min.js'
      },
      lib_jodit: {
        js: 'https://cdn.jsdelivr.net/npm/jodit@latest/build/jodit.min.js',
        css: 'https://cdn.jsdelivr.net/npm/jodit@latest/build/jodit.min.css'
      },
      lib_sceditor: {
        css: 'https://cdn.jsdelivr.net/npm/sceditor@latest/minified/themes/default.min.css',
        js: [
          'https://cdn.jsdelivr.net/npm/sceditor@latest/minified/sceditor.min.js',
          'https://cdn.jsdelivr.net/npm/sceditor@latest/minified/formats/bbcode.js',
          'https://cdn.jsdelivr.net/npm/sceditor@latest/minified/formats/xhtml.js'
        ]
      },
      lib_choices: {
        css: 'https://cdn.jsdelivr.net/npm/choices.js@latest/public/assets/styles/choices.min.css',
        js: 'https://cdn.jsdelivr.net/npm/choices.js@latest/public/assets/scripts/choices.min.js'
      },
      lib_simplemde: {
        css: 'https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css',
        js: 'https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js'
      },
      lib_select2: {
        css: 'https://cdn.jsdelivr.net/npm/select2@4.0.6-rc.1/dist/css/select2.min.css',
        js: [
          // 'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js',
          'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js',
          'https://cdn.jsdelivr.net/npm/select2@4.0.6-rc.1/dist/js/select2.min.js'
        ]
      },
      lib_selectize: {
        css: [
          'https://cdn.jsdelivr.net/npm/selectize@latest/dist/css/selectize.min.css',
          'https://cdn.jsdelivr.net/npm/selectize@latest/dist/css/selectize.default.min.css'
        ],
        js: [
          'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js',
          'https://cdn.jsdelivr.net/npm/selectize@latest/dist/js/standalone/selectize.min.js'
        ]
      },
      lib_flatpickr: {
        css: 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
        js: 'https://cdn.jsdelivr.net/npm/flatpickr'
      },
      lib_signaturepad: {
        js: 'https://cdn.jsdelivr.net/npm/signature_pad@latest/dist/signature_pad.min.js'
      },
      lib_mathjs: {
        js: 'https://cdn.jsdelivr.net/npm/mathjs@latest/dist/math.min.js'
      },
      lib_jquery: {
        js: 'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js'
      },
      lib_dompurify: {
        js: 'https://cdn.jsdelivr.net/npm/dompurify@latest/dist/purify.min.js'
      }
    }
  }

  var extendObj = function (destination) {
    var source, i, property
    for (i = 1; i < arguments.length; i++) {
      source = arguments[i]
      for (property in source) {
        if (!source.hasOwnProperty(property)) continue
        if (source[property] && typeof source[property] === 'object' && source[property] !== null) {
          if (!destination.hasOwnProperty(property)) destination[property] = {}
          extendObj(destination[property], source[property])
        } else {
          destination[property] = source[property]
        }
      }
    }
    return destination
  }

  if (window.mappingOverride && typeof window.mappingOverride === 'object' && !Array.isArray(window.mappingOverride)) {
    extendObj(mapping, window.mappingOverride)
  }

  // Theme to use in ACE editor instances
  var aceTheme = 'ace/theme/monokai-light'

  // ACE Editor Beautify extension
  var aceBeautify = window.ace.require('ace/ext/beautify')

  // ACE Range addon
  var aceRange = window.ace.require('ace/range').Range

  // ACE Editor placeholders
  var jeEditSchema = document.querySelector('#schema')
  var jeEditStartval = document.querySelector('#startval')
  var jeEditCode = document.querySelector('#editor')
  var jeEditCSS = document.querySelector('#csseditor')
  var jeOutput = document.querySelector('#output') // Form output
  var jeValidate = document.querySelector('#validate') // Validation output

  // ACE Editor instances
  var aceCodeEditor
  var aceStyleEditor
  var aceSchemaEditor
  var aceStartvalEditor
  var aceOutputEditor
  var aceValidateEditor

  /*// Error Modal box
  var jeModal = document.querySelector('.modal')
  var jeModalContent = jeModal.querySelector('p')
  var jeModalClose = jeModal.querySelector('.close-button')*/

  // Iframe
  var jeIframeEl = document.querySelector('iframe')
  var jeIframe = jeIframeEl.contentWindow || (jeIframeEl.contentDocument.document || jeIframeEl.contentDocument)

  // Options Checkboxes (Wrapper, not single checkboxes)
  var jeCfg = document.querySelector('#json-editor-config') // Config wrapper
  var jeExtlib = document.querySelector('#ext_lib')

  // Example description placeholder
  var jeExampleDesc = document.querySelector('#example-description')

  // Slide-in config panel
  var jeLeftPanel = document.querySelector('#slideleft-panel')
  var jeRightPanel = document.querySelector('#slideright-panel')

  // Buttons
  var jeShowConfig = document.querySelector('#show-config') // Show config panel
  var jeShowLoadExample = document.querySelector('#show-load-examples') // Show load examples panel
  var jeSchemaLoad = document.querySelector('#external-schema') // Load schema
  var jeExec = document.querySelector('#execute-code') // Create form from Schema
  var jeDirectLink = document.querySelector('#direct_link') // Create direct link url
  var jeUrlReset = document.querySelector('#direct_link_reset') // Clear query params from url
  var jeTabs = document.querySelector('nav.tabs') // Tabs (Wrapper, not single buttons)
  var jeDownloadExample = document.querySelector('#download_example')
  var jeUploadExample = document.querySelector('#upload_example')
  var jeFilesUsed = document.querySelector('#files-used')

  var jeFileUpload = document.querySelector('input[type="file"]')
  var jeDropZone = document.querySelector('#dropzone') // Drag'n'Drop upload zone

  var jeValidationStatus = document.querySelector('#validationstatus')

  // Split panels
  var jeSplitCfg = {
    sizes: [75, 25],
    minSize: [200, 200],
    onDragEnd: function () {
      aceCodeEditor.resize()
      aceStyleEditor.resize()
      aceSchemaEditor.resize()
      aceStartvalEditor.resize()
      aceOutputEditor.resize()
      aceValidateEditor.resize()
    },
    gutter: function () {
      var gutter = document.createElement('div')
      gutter.className = 'split-gutter'
      gutter.style.height = '560px'
      return gutter
    },
    gutterSize: 4
  }
  var jeSplitPanels = [
    ['#split-panel1', '#split-panel2'],
    ['#split-panel3', '#split-panel4'],
    ['#split-panel5', '#split-panel6']
  ]

  var jeBusyOverlay = document.querySelector('#busy-overlay') // Busy overlay

  /* Helper functions */

  // filter function for objects
  Object.filter = function (obj, predicate) {
    var result = {}, key
    for (key in obj) {
      if (obj.hasOwnProperty(key) && predicate(obj[key])) result[key] = obj[key]
    }
    return result
  }

  // Tests if JSON schema is invalid. Returns errormsg if invalid
  var isInvalidJson = function (code) {
    try { JSON.parse(code) } catch (e) { return 'Invalid Schema: ' + e.message.charAt(12).toUpperCase() + e.message.slice(13) }
    return false
  }

  // Click event handler - Toggle visibility state of modal box
  var toggleModal = function () {
    jeModal.classList.toggle('show-modal')
  }

  // Click event handler - Close modal box if clicked outside
  var closeModal = function (e) {
    if (e.target === jeModal && jeModal.classList.contains('show-modal')) toggleModal()
  }

  // Show JSON error in modal box
  var showModalError = function () {
    var val = this.getValue()
    if (val.trim()) {
      var res = isInvalidJson(val)
      if (res) {
        jeModalContent.innerText = res
        toggleModal()
      }
    }
  }

  // Trigger event on element
  var eventFire = function (el, etype) {
    if (el && el.fireEvent) el.fireEvent('on' + etype)
    else {
      el && el.dispatchEvent(new Event(etype, {
        'bubbles': true,
        'cancelable': false
      }))
    }
  }

  // Trigger mouse click event
  var eventClickFire = function (el) {
    el.dispatchEvent(new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': false
    }))
  }

  // Copy text to clipboard
  var copyToClipboard = function (txt) {
    var ta = document.createElement('textarea')
    ta.value = txt
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.bottom = '0px'
    ta.style.left = '0px'
    document.body.appendChild(ta)
    ta.select()
    var res = true
    try { document.execCommand('copy') } catch (err) { res = false }
    document.body.removeChild(ta)
    return res
  }

  // Locked text
  var getLockedText = function () {
    return ['// The following lines are mandatory and readonly. You can add custom code above and below.',
      'if (jseditor instanceof window.JSONEditor) jseditor.destroy();',
      'jseditor = new window.JSONEditor(document.querySelector("#json-editor-form"), jedata);'].join('\n')
  }

  // Get object of intersecting locked markers in Ace Editor
  var getIntersectMarkers = function (newRange, keyString) {
    return Object.filter(aceCodeEditor.getSession().getMarkers(true), function (marker) {
      return marker.clazz == 'readonly-highlight' && marker.range.intersects(newRange) &&
               !(marker.range.isStart(newRange.end.row, newRange.end.column) && keyString !== 'delete') &&
               !(marker.range.isEnd(newRange.start.row, newRange.start.column) && keyString !== 'backspace')
    })
  }

  // Get object of locked markers inside coords in Ace Editor
  var getInsideMarkers = function (row, column) {
    return Object.filter(aceCodeEditor.getSession().getMarkers(true), function (marker) {
      return marker.clazz == 'readonly-highlight' && marker.range.inside(row, column)
    })
  }

  // Get object of all locked markers in Ace Editor
  var getAllMarkers = function () {
    return Object.filter(aceCodeEditor.getSession().getMarkers(true), function (marker) {
      return marker.clazz == 'readonly-highlight'
    })
  }

  // Create anchored range and marker in Ace Editor
  var lockPosition = function (startRow, starColumn, endRow, endColumn) {
    var range = new aceRange(startRow - 1, starColumn, endRow, endColumn),
      session = aceCodeEditor.getSession()
    range.collapseRows()
    range.id = session.addMarker(range, 'readonly-highlight', 'line', true)
    range.start = session.doc.createAnchor(range.start)
    range.end = session.doc.createAnchor(range.end)
    range.end.$insertRight = true
    return range
  }

  var lockText = function () {
    var markers = getAllMarkers(), id
    // Remove existing locked markers
    for (id in markers) aceCodeEditor.getSession().removeMarker(id)

    var range = aceCodeEditor.find(getLockedText(), {caseSensitive: true})

    // Lock text
    if (range) {
      var endRow = aceCodeEditor.getSession().getLength() - 1,
        endColumn = aceCodeEditor.getSession().getLine(endRow).length

        // Add a linefeed if this is the last content in document
        // Otherwise last locked line will be in "text" and not "line" mode
      if (endRow == range.end.row && endColumn == range.end.column) {
        aceCodeEditor.getSession().insert({row: endRow + 1, column: 0}, '\n')
      }

      lockPosition(range.start.row + 1, range.start.column, range.end.row + 1, range.end.column)
      aceCodeEditor.getSession().getSelection().clearSelection()
    }
  }

  // Build list of external JavaScript and CSS files included in <head> of page
  var listExternalFilesUsed = function () {
    var src = [], tags = jeIframe.document.querySelectorAll('head script:not([src=""]), head link[rel="stylesheet"]:not([href=""])')
    for (var tag in tags) {
      if (tags.hasOwnProperty(tag)) {
        src.push(tags[tag].src || tags[tag].href)
      }
    }
    var listToClipboardHandler = function (val) {
      jeModalContent.innerText = copyToClipboard(val) ? 'List copied to clipboard.' : 'Error: Copy to clipboard failed!'
    }
    jeModalContent.innerHTML = '<h5>List of external JavaScript and CSS files used in current example:</h5>' + src.sort().join('<br>') + '<br><br><div class="cbreq"><button id="cbreq-list">Copy list to Clipboard</button></div>'
    jeModalContent.querySelector('#cbreq-list').addEventListener('click', listToClipboardHandler.bind(null, src.sort().join('\n')), {once: true})
    toggleModal()
  }

  // Update values in schema from output JSON
  var updateSchemaValues = function () {
    // this = aceOutputEditor
    return;
    var json
    try {
      json = JSON.parse(this.getValue())
    } catch (err) {
      jeModalContent.innerText = err
      toggleModal()
      return
    }
    jeIframe.updateSchemaValuesIframe(json)
  }

  // Handler for showing/hiding left panel
  var setPanelHandler = function (panel) {
    var panelClose = panel.querySelector('.panel-close-button'),
      panelContainer = panel.querySelector('.panel-container'),
      panelHandler = function (e) {
        if (e.target === panel && !panel.classList.contains('panel-inactive') || !e.currentTarget.contains(panelContainer)) {
          if (panel.classList.contains('panel-active')) panel.classList.toggle('panel-inactive')
          else panel.classList.add('panel-active')
        }
        if (panel.classList.contains('panel-inactive') && panel.classList.contains('panel-left')) {
          // panel closing
          // Trigger generation of form
          eventFire(jeExec, 'click')
        }
      }
    panel.addEventListener('click', panelHandler, false)
    if (panelClose) panelClose.addEventListener('click', panelHandler, false)
    return panelHandler
  }

  // JSONP request
  var loadJSONP = (function () {
    var unique = 0
    return function (url, callback, context) {
      var name = '_jsonp_' + unique++
      url += (url.match(/\?/) ? '&' : '?') + 'callback=' + name
      var script = document.createElement('script')
      script.src = url
      window[name] = function (data) {
        callback.call(context || window, data)
        document.querySelector('head').removeChild(script)
        script = null
        delete window[name]
      }
      document.querySelector('head').appendChild(script)
    }
  })()

  // Function to handle clicks on Tab buttons
  var tabsHandler = function (e) {
    if (e.target && e.target.nodeName == 'BUTTON') {
      var buttons = this.querySelectorAll('button')
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
        document.querySelector(buttons[i].dataset.content).classList.remove('active')
      }
      e.target.classList.add('active')
      document.querySelector(e.target.dataset.content).classList.add('active')

      // Required for ACE editor to update the content after "display: hidden"
      aceSchemaEditor.resize()
      aceStartvalEditor.resize()
      aceCodeEditor.resize()
      aceStyleEditor.resize()
      aceOutputEditor.resize()
      aceValidateEditor.resize()
    }
  }

  // function to catch errors thrown inside iframe
  window.iframeErrorCatcher = function (err) {
    jeModalContent.innerText = err
    toggleModal()
  }

  // catch form output and validation errors from inside iframe  
  window.iframeOutputCatcher = function (json, validation_errors, na) {
    ///var bu = document.querySelector('button[data-content="#content5"]')
    ///bu.style.display = na === 1 ? 'none' : 'initial'
    if (na !== 1) {
      /* Beyondspace: Save value to localStorage */
      localStorage.setItem("jeplayground", JSON.stringify(json));
      const generatedSnippet = `<!-- Beyondspace - Date Picker for Squarespace Form -->
<script src="/s/beyondspace-datepicker.js" id="beyondspace-datepicker-field" data-widget-config='${JSON.stringify(json).replace(/(\r\n|\n|\r)/gm, "")}'></script>
<!-- Beyondspace - Date Picker for Squarespace Form -->`;
      /* Beyondspace: Resize iframe content */
      const contentIframe = document.getElementById('content1');
      var contentIframeWindow = document.getElementById('content1').contentWindow;
      contentIframe.style.height = contentIframeWindow.document.body.scrollHeight * (1+0.05) + "px";

//       aceOutputEditor.setValue(`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

// <!-- DATE PICKER FOR SQUARESPACE FORM -->
// <link rel="stylesheet" href="/s/beyondspace-datepicker.css">
// <script src="/s/beyondspace-datepicker.js"></script>
// <!-- DATE PICKER FOR DELIVERY FORM -->
// <script>
//   $(document).ready(function() {
//       $(document).bsDatePicker({{json}});
//   });
// </script>
// <!-- DATE PICKER FOR SQUARESPACE FORM -->`.replace("{{json}}", JSON.stringify(json, null, 2)));
      aceOutputEditor.setValue(generatedSnippet);
      aceOutputEditor.session.getSelection().clearSelection()
      aceOutputEditor.resize();

      // Show validation errors if there are any
      /*var val = validation_errors.length ? validation_errors : {'schema': 'valid'}
      jeValidationStatus.classList.remove('schema-invalid')
      if (validation_errors.length) jeValidationStatus.classList.add('schema-invalid')

      aceValidateEditor.setValue(JSON.stringify(val, null, 2))
      aceValidateEditor.session.getSelection().clearSelection()
      aceValidateEditor.resize()*/
    }
  }

  // Clear ACE Output and Validation editors
  var clearOutput = function () {
    ///aceValidateEditor.setValue('')
    ///aceValidateEditor.session.getSelection().clearSelection()
    ///aceValidateEditor.resize()
    aceOutputEditor.setValue('')
    aceOutputEditor.session.getSelection().clearSelection()
    aceOutputEditor.resize()
  }

  // Convert URL GET parameters into object or return value if key is supplied
  var getUrlParams = function (key) {
    var prmstr = window.location.search.substr(1), params = {}
    if (prmstr != null && prmstr !== '') {
      var prmarr = prmstr.split('&')
      for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split('=')
        if (typeof key !== 'undefined' && key == tmparr[0]) {
          params = tmparr[1]
          break
        }
        params[tmparr[0]] = tmparr[1]
      }
    }
    return params
  }

  // Convert object into query string
  var toQueryString = function (obj) {
    var parts = []
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
      }
    }
    return parts.join('&')
  }

  // Get options object from checkboxes and selectboxes
  // if "data-json-editor-special" is set on tag, it will not be included
  var getJsonEditorOptions = function () {
    var options = {},
      exclude = ':not([data-json-editor-special])',
      els = jeCfg.querySelectorAll('input[type="checkbox"]' + exclude + ',select' + exclude)
    Array.from(els).forEach(function (el) { // from() unsupported in IE
      if (el.tagName == 'SELECT') options[el.id] = el.value
      else options[el.value] = el.checked ? 1 : 0
      // else if (el.checked) options[el.value] = 1;//el.checked;
    })

    return options
  }

  // Create Direct Link URL with query parameters
  var updateDirectLink = function (e) {
    var url = window.location.toString().replace(window.location.search, '')
    if (e.target == jeDirectLink) {
      url += '?schema=' + encodeURIComponent(window.LZString.compressToBase64(JSON.stringify(aceSchemaEditor.getValue().trim())))
      //        url += '&value=' +  window.LZString.compressToBase64(JSON.stringify(window.jsoneditor.getValue()));
      url += '&value=' + encodeURIComponent(window.LZString.compressToBase64(JSON.stringify(aceStartvalEditor.getValue().trim())))
      url += '&code=' + encodeURIComponent(window.LZString.compressToBase64(JSON.stringify(aceCodeEditor.getValue().trim())))
      url += '&style=' + encodeURIComponent(window.LZString.compressToBase64(JSON.stringify(aceStyleEditor.getValue().trim())))
      url += '&' + toQueryString(getJsonEditorOptions())

      var urlToClipboardHandler = function (val) {
        jeModalContent.innerText = copyToClipboard(val) ? 'URL copied to clipboard.' : 'Error: Copy to clipboard failed!'
      }

      if (window.location.protocol !== 'file:') {
        var encUrl = encodeURIComponent(url)
        if (encUrl.length < 5000) {
          loadJSONP('https://is.gd/create.php?format=json&url=' + encUrl, function (data) {
            // Clipboard actions not allowed here since it's a callback event and not an "User generated event"
            jeModalContent.innerHTML = '<div class="cbreq"><h3>Direct Link Generated</h3><button id="cbreq-url">Copy Url to Clipboard</button> <button id="cbreq-shorturl">Copy ShortUrl to Clipboard</button></div>'
            jeModalContent.querySelector('#cbreq-url').addEventListener('click', urlToClipboardHandler.bind(null, url), {once: true})
            jeModalContent.querySelector('#cbreq-shorturl').addEventListener('click', urlToClipboardHandler.bind(null, data.shorturl), {once: true})
            toggleModal()
          })

          if (window.history) {
            window.history.replaceState('', window.title, url)
          }
        } else {
          urlToClipboardHandler(url)
          toggleModal()
        }
      } else {
        urlToClipboardHandler(url)
        toggleModal()
      }
    } else {
      window.location.replace(url)
    }
    // window.location.href = url;
    // window.location.assign(url);
  }

  // Clear query parameters from URL
  var resetUrl = function (e) {
    if (confirm('Clear URL query parameters?')) {
      if (window.localStorage) window.localStorage.setItem('jeplayground', '')
      updateDirectLink(e)
      aceCodeEditor.setValue('\n' + getLockedText() + '\n')
    }
  }

  // Set editors and config options based on JSON object
  var updateFromFile = function (response) {
    var example = JSON.parse(response),
      schema = JSON.stringify(example.schema, null, 2),
      startval = Object.keys(example.startval).length !== 0 ? JSON.stringify(example.startval, null, 2) : '',
      cfg = example.config,
      code = example.code,
      style = example.style,
      desc = example.desc

    // Clear include external library checkboxes
    Array.from(jeExtlib.querySelectorAll('input')).forEach(function (el) { // from() unsupported in IE
      el.checked = false
    })

    jeExampleDesc.innerHTML = ''
    clearOutput()

    // Add description of example to help page
    if (desc !== '' && desc != 'Add optional description here. (HTML format)') {
      jeModalContent.innerHTML = jeExampleDesc.innerHTML = '<h3>Info about "' + example.title + '" Example</h3>' + desc
      toggleModal()
    }

    // Update ACE Editor instances
    /*aceSchemaEditor.setValue(schema)
    aceSchemaEditor.session.getSelection().clearSelection()
    aceSchemaEditor.resize()

    aceStartvalEditor.setValue(startval)
    aceStartvalEditor.session.getSelection().clearSelection()
    aceStartvalEditor.resize()

    aceCodeEditor.setValue(code)
    aceCodeEditor.session.getSelection().clearSelection()
    aceCodeEditor.resize()
    lockText()

    aceStyleEditor.setValue(style)
    aceStyleEditor.session.getSelection().clearSelection()
    aceStyleEditor.resize()*/

    aceOutputEditor.resize()
    ///aceValidateEditor.resize()

    // Set config options
    for (var id in cfg) {
      if (cfg.hasOwnProperty(id)) {
        var el = jeCfg.querySelector('#' + id)
        if (el) {
          if (el.nodeName == 'INPUT' && el.type == 'checkbox') el.checked = cfg[id] || 0
          else if (el.nodeName == 'SELECT') el.value = cfg[id]
        }
      }
    }

    // Trigger generation of form
    eventFire(jeExec, 'click')
  }

  // Set editors and config options based on query parameters
  var updateFromUrl = function () {
    var params = getUrlParams()
    clearOutput()
    if (params.code) {
      try {
        aceCodeEditor.setValue(JSON.parse(window.LZString.decompressFromBase64(decodeURIComponent(params.code))))
        aceCodeEditor.session.getSelection().clearSelection()
        lockText()
      } catch (err) {
        console.log('Error parsing Javascript data from URL parameter.', err)
      }
      delete params.code
    }
    if (params.style) {
      try {
        aceStyleEditor.setValue(JSON.parse(window.LZString.decompressFromBase64(decodeURIComponent(params.style))))
        aceStyleEditor.session.getSelection().clearSelection()
      } catch (err) {
        console.log('Error parsing CSS data from URL parameter.', err)
      }
      delete params.style
    }
    if (params.schema) {
      try {
        aceSchemaEditor.setValue(JSON.parse(window.LZString.decompressFromBase64(decodeURIComponent(params.schema))))
        aceSchemaEditor.session.getSelection().clearSelection()
      } catch (err) {
        console.log('Error parsing Schema data from URL parameter.', err)
      }
      delete params.schema
    }
    if (params.value) {
      try {
        aceStartvalEditor.setValue(JSON.parse(window.LZString.decompressFromBase64(decodeURIComponent(params.value))))
        aceStartvalEditor.session.getSelection().clearSelection()
      } catch (err) {
        console.log('Error parsing Startval data from URL parameter.', err)
      }
      delete params.value
    }

    ///aceSchemaEditor.resize()
    ///aceStartvalEditor.resize()
    ///aceCodeEditor.resize()
    ///aceStyleEditor.resize()
    aceOutputEditor.resize()
    ///aceValidateEditor.resize()

    for (var id in params) {
      if (params.hasOwnProperty(id)) {
        var el = document.querySelector('#' + id)
        if (el) {
          if (el.tagName == 'SELECT') el.value = params[id]
          else if (el.tagName == 'INPUT') el.checked = params[id] == '1'
        }
      }
    }

    // Trigger generation of form
    // eventFire(jeExec, 'click');
  }

  // Build codeblock to create JSON-Editor instance
  var getCode = function (schema, startval) {
    var opt = 'schema:' + schema + (startval.trim() ? ', startval:' + startval : '')
    return 'var jseditor, jedata = {' + opt + '};'
    //      return 'if (jseditor) jseditor.destroy();var jseditor = new window.JSONEditor(document.querySelector("#json-editor-form"),{' + opt + '});';
  }

  // Fullscreen Drag'n'Drop upload handlers
  var showDropZone = function () {
    jeDropZone.style.display = 'block'
  }
  var hideDropZone = function () {
    jeDropZone.style.display = 'none'
  }

  var handleDrop = function (e) {
    e.preventDefault()
    hideDropZone()
    var file = e.dataTransfer.files[0]
    if (file.type != 'application/json' || file.size === 0) {
      jeModalContent.innerText = 'Error: File uploaded is not a .JSON file'
      toggleModal()
      return
    }

    var reader = new FileReader()
    reader.onload = function (e) {
      var response = e.target.result
      var err = isInvalidJson(response)
      if (err) {
        jeModalContent.innerText = err
        toggleModal()
        return
      } else if (Object.getOwnPropertyNames(JSON.parse(response)).sort().join(',') !== 'code,config,desc,schema,startval,style,title') {
        jeModalContent.innerText = 'JSON file is not in the correct format'
        toggleModal()
        return
      }

      updateFromFile(response)
    }
    reader.readAsText(file)
  }

  var dragHandler = function (e) {
    switch ((this == window ? 'w_' : 'z_') + e.type) {
      case 'w_dragstart':
        this.disabled = true
        break
      case 'w_dragend':
        this.disabled = false
        break
      case 'w_dragenter':
        if (this.disabled !== true) showDropZone()
        break
      case 'z_dragenter':
      case 'z_dragover':
        e.dataTransfer.dropEffect = 'copy'
        break
      case 'z_dragleave':
        hideDropZone()
        break
      case 'z_drop':
        handleDrop(e)
        break
    }

    if (this.disabled !== true) e.preventDefault()
  }

  // Filter out duplicates from array
  var uniqueArray = function (arr) {
    var seen = {}
    return arr.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : seen[item] = true
    })
  }

  // Get CSS and JavaScript files listed in comments using special keywords
  var getUserIncludes = function (code, regex) {
    var match = regex.exec(code), res = []
    while (match != null) {
      if (match[2].trim()) res.push(match[2])
      match = regex.exec(code)
    }
    return res
  }

  // Build list of external files to include in Iframe
  var buildExtFiles = function (options, code) {
    var jsFiles = [], cssFiles = [], extFiles = '', map, styles = aceStyleEditor.getValue().trim()
    for (var i in options) {
      if (options.hasOwnProperty(i) && options[i] && (mapping.ext_lib[i] || mapping[i] && mapping[i][options[i]])) {
        map = mapping.ext_lib[i] || mapping[i][options[i]]
        if (map.js) jsFiles = jsFiles.concat(typeof map.js === 'string' ? [map.js] : map.js)
        if (map.css) cssFiles = cssFiles.concat(typeof map.css === 'string' ? [map.css] : map.css)
      }
    }

    // Include CSS and JavaScript files listed in comments using special keywords
    cssFiles = cssFiles.concat(getUserIncludes(code, /\s*\/\/\s*includeCSS\((['"])([^"']*)\1\)/g))
    jsFiles = jsFiles.concat(getUserIncludes(code, /\s*\/\/\s*includeJS\((['"])([^"']*)\1\)/g))

    cssFiles = uniqueArray(cssFiles)
    jsFiles = uniqueArray(jsFiles)

    if (cssFiles.length) extFiles += '<link rel="stylesheet" href="' + cssFiles.join('" /><link rel="stylesheet" href="') + '" />'
    if (jsFiles.length) extFiles += '<script src="' + jsFiles.join('"><\/script><script src="') + '"><\/script>'

    if (styles !== '') extFiles += '<style>' + styles + '</style>'

    return extFiles
  }

  // Build list of JSON-Editor options from config options
  var buildEditorOptions = function (options) {
    var res = ''
    for (var i in options) {
      if (options.hasOwnProperty(i) && !/^lib_/.test(i)) {
        var val = typeof options[i] === 'string' ? '"' + options[i] + '"' : options[i]
        res += 'JSONEditor.defaults.options["' + i + '"] = ' + val + ';\n'
      }
    }
    return '<script>' + res + '</script>'
  }

  var DEFAULT_JSON_VALUE = {
    "color": "#ffa500",
    "headerColor": "#000000",
    "headerBackground": "#ffffff",
    "rules": [
      {
        "name": "Delivery Dates",
        "displayInline": true,
        "dateFormat": "m-d-Y",
        "timezone": "Default",
        "disabledWeekday": [],
        "disabledDates": [
          {
            "startDate": "",
            "endDate": ""
          }
        ]
      }
    ]
  }

  const savedUrl = localStorage.getItem("jeplayground-url");
  $("#site-url").val(savedUrl);


  var generateColorPicker = function() {
    var contentIframeWindow = document.getElementById('content1').contentWindow;
    if (contentIframeWindow.$)
    /* Beyondspace: load the color picker */    
    if (!pickerLoaded) {
      [
        '[data-schemapath="root.color"] input',
        '[data-schemapath="root.headerColor"] input',
        '[data-schemapath="root.headerBackground"] input'
      ].forEach((input) => {        
          // Simple example, see optional options for more configuration.
          const colorInput = contentIframeWindow.document.querySelector(input);
          contentIframeWindow.$(colorInput).spectrum({
            preferredFormat: "hex",
            showInput: true,
            color: colorInput.value,
            change: function(color) {
                colorInput.value = color.toHexString(); // #ff0000               
                // Create a new 'change' event
                var event = new Event('change');

                // Dispatch it.
                colorInput.dispatchEvent(event);
            }
        });        
      })
    }
    pickerLoaded = true;
  }

  var fetchDefaultValue = async function(defaultValue) {
    let defaultVal = defaultValue;
    if (localStorage.getItem("jeplayground")) {
      try {
        defaultVal = JSON.parse(localStorage.getItem("jeplayground")) || defaultVal;
      } catch(e) {
        console.log(e);
      }    
    }

    if ($("#site-url").val().trim()) {
      const siteUrl = $("#site-url").val();
      const siteResponse = await fetch('https://dev--beyondspacecrawler.bangank36.autocode.gg/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: siteUrl})
      });
      const siteHtml = await siteResponse.json();  

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(siteHtml, 'text/html');

      // Find the date picker script instance
      if (doc.querySelector("[src*='beyondspace-datepicker']")) {
        const scripts = doc.querySelector("[src*='beyondspace-datepicker']");
        const config = scripts.dataset.widgetConfig;

        localStorage.setItem("jeplayground-url", siteUrl);

        try {
          defaultVal = JSON.parse(config) || defaultVal;
        } catch(e) {
          console.log(e);
        }        
      }
    }    

    return defaultVal;
  }  

  /* Beyondspace: get the site url to get previous config */  
  $(document).on("change blur", "#site-url", async function() {
    const json = await fetchDefaultValue();
    var iframeWin = document.getElementById('content1').contentWindow;
    iframeWin.updateSchemaValuesIframe(json);
  });

  // Create page for Iframe
  var createIframeContent = function (code) {
        code = code || `var jseditor, jedata = {schema:{
      "title": "Datepicker Input",
      "type": "object",
      "properties": {
        "color": {
          "type": "string",
          "format": "color",
          "description": "Set the selected date color",
          "default": "#ccc",
          "title": "Color"
        },
        "age": {
          "type": "integer",
          "default": 25,
          "minimum": 18,
          "maximum": 99
        },
        "favorite_color": {
          "type": "string",
          "format": "color",
          "title": "favorite color",
          "default": "#ffa500"
        },
        "gender": {
          "type": "string",
          "enum": [
            "male",
            "female",
            "other"
          ]
        },
        "date": {
          "type": "string",
          "format": "date",
          "options": {
            "flatpickr": {}
          }
        },
        "location": {
          "type": "object",
          "title": "Location",
          "properties": {
            "city": {
              "type": "string",
              "default": "San Francisco"
            },
            "state": {
              "type": "string",
              "default": "CA"
            },
            "citystate": {
              "type": "string",
              "description": "This is generated automatically from the previous two fields",
              "template": "{{city}}, {{state}}",
              "watch": {
                "city": "location.city",
                "state": "location.state"
              }
            }
          }
        },
        "rules": {
          "type": "array",
          "format": "table",
          "title": "Datepicker rule",
          "uniqueItems": true,
          "items": {
            "type": "object",
            "title": "Field Placeholder",
            "properties": {
              "name": {
                "type": "string",
                "default": "Delivery Date",
                "description": "By default, the plugin will replace all text field with placeholder 'Delivery Date'",
                "title": "Placeholder value"
              },
              "addedDay": {
                "type": "string",
                "default": "Delivery Date",
                "format": "number",
                "description": "Number of days required to produce the products eg: 1-2. The number will be auto increased by 01 if cutoff times is set and current time is due",
                "title": "Lead Time"
              },
              "cutoffTime": {
                "type": "string",
                "default": "Delivery Date",
                "format": "time",
                "description": "Production Cutoff Time for Same Day Delivery",
                "title": "Cutoff Times"
              },
              "timezone": {
                "type": "array",
                "default": "Local",
                "format": "select2",
                "description": "Set up timezone for the cutoff time calculation, format in tz database",
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "enum": ["Local"]
                }
              },
              "disabledWeekday": {
                "type": "array",
                "default": "",
                "format": "select2",
                "description": "Days of week when user can not select",
                "title": "Disabled Days of week",
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "enum": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
                }
              },
              "disabledDates": {
                "type": "array",
                "default": "",
                "format": "select2",
                "description": "Dates when user can not select",
                "title": "Disabled Dates",
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "enum": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
                }
              }
              
            }
          },
          "default": [
            {
              "name": "Delivery Date",
              "addedDay": "Walter"
            }
          ]
        }
      }
    }};// The following lines are mandatory and readonly. You can add custom code above and below.
    if (jseditor instanceof window.JSONEditor) jseditor.destroy();
    jseditor = new window.JSONEditor(document.querySelector("#json-editor-form"), jedata);
    `
        var options = {
          ajax: 0,
          ajaxCredentials: 0,
          array_controls_top: 0,
          disable_array_add: 0,
          disable_array_delete: 0,
          disable_array_delete_all_rows: 0,
          disable_array_delete_last_row: 0,
          disable_array_reorder: 0,
          disable_collapse: 0,
          disable_edit_json: 0,
          disable_properties: 0,
          display_required_only: 0,
          enable_array_copy: 0,
          iconlib: "bootstrap3",
          keep_oneof_values: 1,
          lib_aceeditor: 0,
          lib_autocomplete: 0,
          lib_choices: 0,
          lib_cleavejs: 0,
          lib_dompurify: 0,
          lib_flatpickr: 1,
          lib_jodit: 0,
          lib_jquery: 1,
          lib_mathjs: 0,
          lib_sceditor: 0,
          lib_select2: 1,
          lib_selectize: 0,
          lib_signaturepad: 0,
          lib_simplemde: 0,
          no_additional_properties: 0,
          object_layout: "normal",
          prompt_before_delete: 1,
          remove_empty_properties: 0,
          required_by_default: 0,
          show_errors: "interaction",
          show_opt_in: 0,
          template: "default",
          theme: "bootstrap3"
        }
        try {
          var options = getJsonEditorOptions()
        } catch(e) {}
        return `<!DOCTYPE HTML>\n<html lang=\"en\">\n<head>\n<title>JSON-Editor Form</title>\n<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n<style>\nbody {margin:0;padding:0;font: normal .9em/1.2 Arial;background-color:#02577a !important;}\n.inner-row {display: grid;background-color: #fff;position: relative;max-width: 1200px;left:50%;transform: translate(-50%,0);padding: 1rem 2rem;box-shadow: 2px 0 5px rgba(0,0,0,.2);margin:0 0 3rem 0;}\n</style>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/css/jsoneditor.min.css\" />\n<script src=\"https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.js\"></script>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@3.4.0/dist/css/bootstrap.min.css\" /><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/spectre.css@latest/dist/spectre-icons.min.css\" /><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/select2@4.0.6-rc.1/dist/css/select2.min.css\" /><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css\" /><script src=\"https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/bootstrap@3.4.0/dist/js/bootstrap.min.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.min.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/ace-builds@latest/src-noconflict/ace.min.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/ace-builds@latest/src-noconflict/mode-json.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/ace-builds@latest/src-noconflict/mode-javascript.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/select2@4.0.6-rc.1/dist/js/select2.min.js\"></script><script src=\"https://cdn.jsdelivr.net/npm/flatpickr\"></script>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/spectrum-colorpicker@1.8.1/spectrum.min.css\"/><script src=\"https://cdn.jsdelivr.net/npm/spectrum-colorpicker@1.8.1/spectrum.min.js\"></script>\n<script>JSONEditor.defaults.options[\"theme\"] = \"bootstrap3\";\nJSONEditor.defaults.options[\"iconlib\"] = \"spectre\";\nJSONEditor.defaults.options[\"object_layout\"] = \"normal\";\nJSONEditor.defaults.options[\"template\"] = \"handlebars\";\nJSONEditor.defaults.options[\"show_errors\"] = \"interaction\";\nJSONEditor.defaults.options[\"required_by_default\"] = 0;\nJSONEditor.defaults.options[\"no_additional_properties\"] = 1;\nJSONEditor.defaults.options[\"display_required_only\"] = 0;\nJSONEditor.defaults.options[\"remove_empty_properties\"] = 0;\nJSONEditor.defaults.options[\"keep_oneof_values\"] = 1;\nJSONEditor.defaults.options[\"ajax\"] = 0;\nJSONEditor.defaults.options[\"ajaxCredentials\"] = 0;\nJSONEditor.defaults.options[\"show_opt_in\"] = 0;\nJSONEditor.defaults.options[\"disable_edit_json\"] = 1;\nJSONEditor.defaults.options[\"disable_collapse\"] = 0;\nJSONEditor.defaults.options[\"disable_properties\"] = 1;\nJSONEditor.defaults.options[\"disable_array_add\"] = 0;\nJSONEditor.defaults.options[\"disable_array_reorder\"] = 1;\nJSONEditor.defaults.options[\"disable_array_delete\"] = 0;\nJSONEditor.defaults.options[\"enable_array_copy\"] = 0;\nJSONEditor.defaults.options[\"array_controls_top\"] = 0;\nJSONEditor.defaults.options[\"disable_array_delete_all_rows\"] = 0;\nJSONEditor.defaults.options[\"disable_array_delete_last_row\"] = 1;\nJSONEditor.defaults.options[\"prompt_before_delete\"] = 1;\n</script>\n</head>\n<body>\n<div class=\"inner-row\"><div id=\"json-editor-form\"></div></div>\n<script>\nwindow.updateSchemaValuesIframe = function(json) {\nif (jseditor instanceof window.JSONEditor && !jseditor.destroyed) jseditor.setValue(json);\n};\ntry{\nvar jseditor, jedata = {schema:{\n  \"title\": \"Datepicker Input Settings\",\n  \"type\": \"object\",\n  \"format\": \"grid-strict\",\n  \"properties\": {\n    \"color\": {\n      \"type\": \"string\",\n      \"format\": \"text\",\n      \"description\": \"Set the selected date color\",\n      \"default\": \"#ffa500\",\n      \"title\": \"Color\",\n      \"options\": {\n        \"grid_columns\": 2,\n        \"infoText\": \"Pick a color\",\n        \"tooltip\": \"Your full name\"\n      }\n    },\n    \"headerColor\": {\n      \"type\": \"string\",\n      \"format\": \"text\",\n      \"description\": \"Set the header color\",\n      \"default\": \"#000000e6\",\n      \"title\": \"Header Color\",\n      \"options\": {\n        \"grid_columns\": 2\n      }\n    },\n    \"headerBackground\": {\n      \"type\": \"string\",\n      \"format\": \"text\",\n      \"description\": \"Set the header background\",\n      \"default\": \"#ffffff\",\n      \"title\": \"Header Background\",\n      \"options\": {\n        \"grid_columns\": 2\n      }\n    },\n    \"rules\": {\n      \"type\": \"array\",\n      \"format\": \"grid\",\n      \"title\": \"Settings\",\n      \"uniqueItems\": true,\n      \"items\": {\n        \"type\": \"object\",\n        \"format\": \"grid-strict\",\n        \"title\": \"Datepicker rule\",\n        \"properties\": {\n          \"name\": {\n            \"type\": \"string\",\n            \"default\": \"Delivery Date\",\n            \"description\": \"By default, the plugin will replace all text field with placeholder 'Delivery Date'\",\n            \"title\": \"Placeholder value\",\n            \"options\": {\n              \"grid_columns\": 12,\n              \"tooltip\": \"Your full name\"\n            }\n          },\n          \"displayInline\": {\n            \"type\": \"boolean\",\n            \"default\": true,\n            \"format\": \"checkbox\",\n            \"description\": \"Always show the datepicker by default, suggest to set 'true' on lightbox form and product form\",\n            \"title\": \"Always display inline\",\n            \"options\": {\n              \"grid_columns\": 12\n            }\n          },\n          \"dateFormat\": {\n            \"type\": \"string\",\n            \"default\": \"m-d-Y\",\n            \"format\": \"select2\",\n            \"description\": \"Define how the date display in the input as well as submit data, this wont affect how the date-range picker of this tool displaying\",\n            \"title\": \"Date Format\",\n            \"enum\": [\n              \"l, M J, Y\",\n              \"m-d-Y\",\n              \"d-m-Y\",\n              \"m-d-y\",\n              \"d-m-y\"\n            ],\n            \"options\": {\n              \"grid_columns\": 12,\n              \"enum_titles\": [\n                \"weekday ,month date, year [l, M J, Y]\",\n                \"month date year [m-d-Y]\",\n                \"date month year [d-m-Y]\",\n                \"month date 2 digits year [m-d-y]\",\n                \"date month 2 digits year [d-m-y]\"\n              ]\n            }\n          },\n          \"locale\": {\n            \"type\": \"string\",\n            \"default\": \"en\",\n            \"format\": \"select2\",\n            \"description\": \"Change language of the datepicker\",\n            \"title\": \"Localisation\",\n            \"enum\": [\n              \"ar\",\n              \"at\",\n              \"az\",\n              \"be\",\n              \"bg\",\n              \"bn\",\n              \"bs\",\n              \"cat\",\n              \"cs\",\n              \"cy\",\n              \"da\",\n              \"de\",\n              \"eo\",\n              \"es\",\n              \"et\",\n              \"fa\",\n              \"fi\",\n              \"fo\",\n              \"fr\",\n              \"ga\",\n              \"gr\",\n              \"he\",\n              \"hu\",\n              \"id\",\n              \"is\",\n              \"it\",\n              \"ja\",\n              \"ka\",\n              \"km\",\n              \"ko\",\n              \"kz\",\n              \"lt\",\n              \"lv\",\n              \"mk\",\n              \"mn\",\n              \"ms\",\n              \"my\",\n              \"nl\",\n              \"no\",\n              \"pa\",\n              \"pl\",\n              \"pt\",\n              \"ro\",\n              \"ru\",\n              \"si\",\n              \"sk\",\n              \"sl\",\n              \"sr-cyr\",\n              \"sr\",\n              \"sv\",\n              \"th\",\n              \"tr\",\n              \"uk\",\n              \"uz\",\n              \"uz_latn\",\n              \"vn\",\n              \"zh-tw\",\n              \"zh\"\n            ],\n            \"options\": {\n              \"grid_columns\": 12,\n              \"enum_titles\": [\n                \"Arabic\",\n                \"Austria\",\n                \"Azerbaijan\",\n                \"Belarusian\",\n                \"Bulgarian\",\n                \"Bangla\",\n                \"Bosnian\",\n                \"Catalan\",\n                \"Czech\",\n                \"Welsh\",\n                \"Danish\",\n                \"German\",\n                \"Esperanto\",\n                \"Spanish\",\n                \"Estonian\",\n                \"Farsi (Persian)\",\n                \"Finnish\",\n                \"Faroese\",\n                \"French\",\n                \"Gaelic\",\n                \"Greek\",\n                \"Hebrew\",\n                \"Hungarian\",\n                \"Indonesian\",\n                \"Icelandic\",\n                \"Italian\",\n                \"Japanese\",\n                \"Georgian\",\n                \"Khmer\",\n                \"Republic of Korea\",\n                \"Kazakh\",\n                \"Lithuanian\",\n                \"Latvian\",\n                \"Macedonian\",\n                \"Mongolian\",\n                \"Malaysian\",\n                \"Burmese\",\n                \"Dutch\",\n                \"Norwegian\",\n                \"Punjabi\",\n                \"Polish\",\n                \"Portuguese\",\n                \"Romanian\",\n                \"Russian\",\n                \"Sinhala\",\n                \"Slovak\",\n                \"Slovenian\",\n                \"Serbian Cyrillic\",\n                \"Serbian\",\n                \"Swedish\",\n                \"Thai\",\n                \"Turkish\",\n                \"Ukrainian\",\n                \"Uzbek\",\n                \"Uzbek Latin\",\n                \"Vietnamese\",\n                \"Mandarin Taiwan\",\n                \"Mandarin\"\n              ]\n            }\n          },\n          \"leadTime\": {\n            \"type\": \"number\",\n            \"default\": 0,\n            \"format\": \"number\",\n            \"description\": \"Decide how many days from today's date customers allow to select a delivery date or pickup date eg: 1-2. The number will be auto increased by 01 if cutoff times is set and current time is due\",\n            \"title\": \"Preorder Days\",\n            \"options\": {\n              \"grid_columns\": 12\n            }\n          },\n          \"cutoffTime\": {\n            \"type\": \"string\",\n            \"default\": \"Delivery Date\",\n            \"format\": \"time\",\n            \"description\": \"Customers need to place and order before Cutoff Time for Same Day Delivery, leave blank for no restriction. Keep preorder days blank or 0 to allow same day delivery/pickup\",\n            \"title\": \"Cutoff Times\",\n            \"options\": {\n              \"grid_columns\": 12\n            }\n          },\n          \"timezone\": {\n            \"type\": \"string\",\n            \"default\": \"Default\",\n            \"format\": \"select2\",\n            \"description\": \"Set up timezone for the cutoff time calculation, format in tz database. Leave blank or default for local timezone (in user machine)\",\n            \"uniqueItems\": true,\n            \"enum\": [\n              \"Default\",\n              \"Africa/Abidjan\",\n              \"Africa/Accra\",\n              \"Africa/Addis_Ababa\",\n              \"Africa/Algiers\",\n              \"Africa/Asmara\",\n              \"Africa/Asmera\",\n              \"Africa/Bamako\",\n              \"Africa/Bangui\",\n              \"Africa/Banjul\",\n              \"Africa/Bissau\",\n              \"Africa/Blantyre\",\n              \"Africa/Brazzaville\",\n              \"Africa/Bujumbura\",\n              \"Africa/Cairo\",\n              \"Africa/Casablanca\",\n              \"Africa/Ceuta\",\n              \"Africa/Conakry\",\n              \"Africa/Dakar\",\n              \"Africa/Dar_es_Salaam\",\n              \"Africa/Djibouti\",\n              \"Africa/Douala\",\n              \"Africa/El_Aaiun\",\n              \"Africa/Freetown\",\n              \"Africa/Gaborone\",\n              \"Africa/Harare\",\n              \"Africa/Johannesburg\",\n              \"Africa/Juba\",\n              \"Africa/Kampala\",\n              \"Africa/Khartoum\",\n              \"Africa/Kigali\",\n              \"Africa/Kinshasa\",\n              \"Africa/Lagos\",\n              \"Africa/Libreville\",\n              \"Africa/Lome\",\n              \"Africa/Luanda\",\n              \"Africa/Lubumbashi\",\n              \"Africa/Lusaka\",\n              \"Africa/Malabo\",\n              \"Africa/Maputo\",\n              \"Africa/Maseru\",\n              \"Africa/Mbabane\",\n              \"Africa/Mogadishu\",\n              \"Africa/Monrovia\",\n              \"Africa/Nairobi\",\n              \"Africa/Ndjamena\",\n              \"Africa/Niamey\",\n              \"Africa/Nouakchott\",\n              \"Africa/Ouagadougou\",\n              \"Africa/Porto-Novo\",\n              \"Africa/Sao_Tome\",\n              \"Africa/Timbuktu\",\n              \"Africa/Tripoli\",\n              \"Africa/Tunis\",\n              \"Africa/Windhoek\",\n              \"America/Adak\",\n              \"America/Anchorage\",\n              \"America/Anguilla\",\n              \"America/Antigua\",\n              \"America/Araguaina\",\n              \"America/Argentina/Buenos_Aires\",\n              \"America/Argentina/Catamarca\",\n              \"America/Argentina/ComodRivadavia\",\n              \"America/Argentina/Cordoba\",\n              \"America/Argentina/Jujuy\",\n              \"America/Argentina/La_Rioja\",\n              \"America/Argentina/Mendoza\",\n              \"America/Argentina/Rio_Gallegos\",\n              \"America/Argentina/Salta\",\n              \"America/Argentina/San_Juan\",\n              \"America/Argentina/San_Luis\",\n              \"America/Argentina/Tucuman\",\n              \"America/Argentina/Ushuaia\",\n              \"America/Aruba\",\n              \"America/Asuncion\",\n              \"America/Atikokan\",\n              \"America/Atka\",\n              \"America/Bahia\",\n              \"America/Bahia_Banderas\",\n              \"America/Barbados\",\n              \"America/Belem\",\n              \"America/Belize\",\n              \"America/Blanc-Sablon\",\n              \"America/Boa_Vista\",\n              \"America/Bogota\",\n              \"America/Boise\",\n              \"America/Buenos_Aires\",\n              \"America/Cambridge_Bay\",\n              \"America/Campo_Grande\",\n              \"America/Cancun\",\n              \"America/Caracas\",\n              \"America/Catamarca\",\n              \"America/Cayenne\",\n              \"America/Cayman\",\n              \"America/Chicago\",\n              \"America/Chihuahua\",\n              \"America/Coral_Harbour\",\n              \"America/Cordoba\",\n              \"America/Costa_Rica\",\n              \"America/Creston\",\n              \"America/Cuiaba\",\n              \"America/Curacao\",\n              \"America/Danmarkshavn\",\n              \"America/Dawson\",\n              \"America/Dawson_Creek\",\n              \"America/Denver\",\n              \"America/Detroit\",\n              \"America/Dominica\",\n              \"America/Edmonton\",\n              \"America/Eirunepe\",\n              \"America/El_Salvador\",\n              \"America/Ensenada\",\n              \"America/Fort_Nelson\",\n              \"America/Fort_Wayne\",\n              \"America/Fortaleza\",\n              \"America/Glace_Bay\",\n              \"America/Godthab\",\n              \"America/Goose_Bay\",\n              \"America/Grand_Turk\",\n              \"America/Grenada\",\n              \"America/Guadeloupe\",\n              \"America/Guatemala\",\n              \"America/Guayaquil\",\n              \"America/Guyana\",\n              \"America/Halifax\",\n              \"America/Havana\",\n              \"America/Hermosillo\",\n              \"America/Indiana/Indianapolis\",\n              \"America/Indiana/Knox\",\n              \"America/Indiana/Marengo\",\n              \"America/Indiana/Petersburg\",\n              \"America/Indiana/Tell_City\",\n              \"America/Indiana/Vevay\",\n              \"America/Indiana/Vincennes\",\n              \"America/Indiana/Winamac\",\n              \"America/Indianapolis\",\n              \"America/Inuvik\",\n              \"America/Iqaluit\",\n              \"America/Jamaica\",\n              \"America/Jujuy\",\n              \"America/Juneau\",\n              \"America/Kentucky/Louisville\",\n              \"America/Kentucky/Monticello\",\n              \" America/Knox_IN\",\n              \" America/Kralendijk\",\n              \" America/La_Paz\",\n              \" America/Lima\",\n              \" America/Los_Angeles\",\n              \" America/Louisville\",\n              \" America/Lower_Princes\",\n              \" America/Maceio\",\n              \" America/Managua\",\n              \" America/Manaus\",\n              \" America/Marigot\",\n              \" America/Martinique\",\n              \" America/Matamoros\",\n              \" America/Mazatlan\",\n              \" America/Mendoza\",\n              \" America/Menominee\",\n              \" America/Merida\",\n              \" America/Metlakatla\",\n              \" America/Mexico_City\",\n              \" America/Miquelon\",\n              \" America/Moncton\",\n              \" America/Monterrey\",\n              \" America/Montevideo\",\n              \"America/Montreal\",\n              \"America/Montserrat\",\n              \"America/Nassau\",\n              \"America/New_York\",\n              \"America/Nipigon\",\n              \"America/Nome\",\n              \"America/Noronha\",\n              \"America/North_Dakota/Beulah\",\n              \"America/North_Dakota/Center\",\n              \"America/North_Dakota/New_Salem\",\n              \"America/Ojinaga\",\n              \"America/Panama\",\n              \"America/Pangnirtung\",\n              \"America/Paramaribo\",\n              \"America/Phoenix\",\n              \"America/Port-au-Prince\",\n              \"America/Port_of_Spain\",\n              \"America/Porto_Acre\",\n              \"America/Porto_Velho\",\n              \"America/Puerto_Rico\",\n              \"America/Punta_Arenas\",\n              \"America/Rainy_River\",\n              \"America/Rankin_Inlet\",\n              \"America/Recife\",\n              \"America/Regina\",\n              \"America/Resolute\",\n              \"America/Rio_Branco\",\n              \"America/Rosario\",\n              \"America/Santa_Isabel\",\n              \"America/Santarem\",\n              \"America/Santiago\",\n              \"America/Santo_Domingo\",\n              \"America/Sao_Paulo\",\n              \"America/Scoresbysund\",\n              \"America/Shiprock\",\n              \"America/Sitka\",\n              \"America/St_Barthelemy\",\n              \"America/St_Johns\",\n              \"America/St_Kitts\",\n              \"America/St_Lucia\",\n              \"America/St_Thomas\",\n              \"America/St_Vincent\",\n              \"America/Swift_Current\",\n              \"America/Tegucigalpa\",\n              \"America/Thule\",\n              \"America/Thunder_Bay\",\n              \"America/Tijuana\",\n              \"America/Toronto\",\n              \"America/Tortola\",\n              \"America/Vancouver\",\n              \"America/Virgin\",\n              \"America/Whitehorse\",\n              \"America/Winnipeg\",\n              \"America/Yakutat\",\n              \"America/Yellowknife\",\n              \"Antarctica/Casey\",\n              \"Antarctica/Davis\",\n              \"Antarctica/DumontDUrville\",\n              \"Antarctica/Macquarie\",\n              \"Antarctica/Mawson\",\n              \"Antarctica/McMurdo\",\n              \"Antarctica/Palmer\",\n              \"Antarctica/Rothera\",\n              \"Antarctica/South_Pole\",\n              \"Antarctica/Syowa\",\n              \"Antarctica/Troll\",\n              \"Antarctica/Vostok\",\n              \"Arctic/Longyearbyen\",\n              \"Asia/Aden\",\n              \"Asia/Almaty\",\n              \"Asia/Amman\",\n              \"Asia/Anadyr\",\n              \"Asia/Aqtau\",\n              \"Asia/Aqtobe\",\n              \"Asia/Ashgabat\",\n              \"Asia/Ashkhabad\",\n              \"Asia/Atyrau\",\n              \"Asia/Baghdad\",\n              \"Asia/Bahrain\",\n              \"Asia/Baku\",\n              \"Asia/Bangkok\",\n              \"Asia/Barnaul\",\n              \"Asia/Beirut\",\n              \"Asia/Bishkek\",\n              \"Asia/Brunei\",\n              \"Asia/Calcutta\",\n              \"Asia/Chita\",\n              \"Asia/Choibalsan\",\n              \"Asia/Chongqing\",\n              \"Asia/Chungking\",\n              \"Asia/Colombo\",\n              \"Asia/Dacca\",\n              \"Asia/Damascus\",\n              \"Asia/Dhaka\",\n              \"Asia/Dili\",\n              \"Asia/Dubai\",\n              \"Asia/Dushanbe\",\n              \"Asia/Famagusta\",\n              \"Asia/Gaza\",\n              \"Asia/Harbin\",\n              \"Asia/Hebron\",\n              \"Asia/Ho_Chi_Minh\",\n              \"Asia/Hong_Kong\",\n              \"Asia/Hovd\",\n              \"Asia/Irkutsk\",\n              \"Asia/Istanbul\",\n              \"Asia/Jakarta\",\n              \"Asia/Jayapura\",\n              \"Asia/Jerusalem\",\n              \"Asia/Kabul\",\n              \"Asia/Kamchatka\",\n              \"Asia/Karachi\",\n              \"Asia/Kashgar\",\n              \"Asia/Kathmandu\",\n              \"Asia/Katmandu\",\n              \"Asia/Khandyga\",\n              \"Asia/Kolkata\",\n              \"Asia/Krasnoyarsk\",\n              \"Asia/Kuala_Lumpur\",\n              \"Asia/Kuching\",\n              \"Asia/Kuwait\",\n              \"Asia/Macao\",\n              \"Asia/Macau\",\n              \"Asia/Magadan\",\n              \"Asia/Makassar\",\n              \"Asia/Manila\",\n              \"Asia/Muscat\",\n              \"Asia/Nicosia\",\n              \"Asia/Novokuznetsk\",\n              \"Asia/Novosibirsk\",\n              \"Asia/Omsk\",\n              \"Asia/Oral\",\n              \"Asia/Phnom_Penh\",\n              \"Asia/Pontianak\",\n              \"Asia/Pyongyang\",\n              \"Asia/Qatar\",\n              \"Asia/Qyzylorda\",\n              \"Asia/Rangoon\",\n              \"Asia/Riyadh\",\n              \"Asia/Saigon\",\n              \"Asia/Sakhalin\",\n              \"Asia/Samarkand\",\n              \"Asia/Seoul\",\n              \"Asia/Shanghai\",\n              \"Asia/Singapore\",\n              \"Asia/Srednekolymsk\",\n              \"Asia/Taipei\",\n              \"Asia/Tashkent\",\n              \"Asia/Tbilisi\",\n              \"Asia/Tehran\",\n              \"Asia/Tel_Aviv\",\n              \"Asia/Thimbu\",\n              \"Asia/Thimphu\",\n              \"Asia/Tokyo\",\n              \"Asia/Tomsk\",\n              \"Asia/Ujung_Pandang\",\n              \"Asia/Ulaanbaatar\",\n              \"Asia/Ulan_Bator\",\n              \"Asia/Urumqi\",\n              \"Asia/Ust-Nera\",\n              \"Asia/Vientiane\",\n              \"Asia/Vladivostok\",\n              \"Asia/Yakutsk\",\n              \"Asia/Yangon\",\n              \"Asia/Yekaterinburg\",\n              \"Asia/Yerevan\",\n              \"Atlantic/Azores\",\n              \"Atlantic/Bermuda\",\n              \"Atlantic/Canary\",\n              \"Atlantic/Cape_Verde\",\n              \"Atlantic/Faeroe\",\n              \"Atlantic/Faroe\",\n              \"Atlantic/Jan_Mayen\",\n              \"Atlantic/Madeira\",\n              \"Atlantic/Reykjavik\",\n              \"Atlantic/South_Georgia\",\n              \"Atlantic/St_Helena\",\n              \"Atlantic/Stanley\",\n              \"Australia/ACT\",\n              \"Australia/Adelaide\",\n              \"Australia/Brisbane\",\n              \"Australia/Broken_Hill\",\n              \"Australia/Canberra\",\n              \"Australia/Currie\",\n              \"Australia/Darwin\",\n              \"Australia/Eucla\",\n              \"Australia/Hobart\",\n              \"Australia/LHI\",\n              \"Australia/Lindeman\",\n              \"Australia/Lord_Howe\",\n              \"Australia/Melbourne\",\n              \"Australia/NSW\",\n              \"Australia/North\",\n              \"Australia/Perth\",\n              \"Australia/Queensland\",\n              \"Australia/South\",\n              \"Australia/Sydney\",\n              \"Australia/Tasmania\",\n              \"Australia/Victoria\",\n              \"Australia/West\",\n              \"Australia/Yancowinna\",\n              \"Brazil/Acre\",\n              \"Brazil/DeNoronha\",\n              \"Brazil/East\",\n              \"Brazil/West\",\n              \"CET\",\n              \"CST6CDT\",\n              \"Canada/Atlantic\",\n              \"Canada/Central\",\n              \"Canada/Eastern\",\n              \"Canada/Mountain\",\n              \"Canada/Newfoundland\",\n              \"Canada/Pacific\",\n              \"Canada/Saskatchewan\",\n              \"Canada/Yukon\",\n              \"Chile/Continental\",\n              \"Chile/EasterIsland\",\n              \"Cuba\",\n              \"EET\",\n              \"EST\",\n              \"EST5EDT\",\n              \"Egypt\",\n              \"Eire\",\n              \"Etc/GMT\",\n              \"Etc/GMT+0\",\n              \"Etc/GMT+1\",\n              \"Etc/GMT+10\",\n              \"Etc/GMT+11\",\n              \"Etc/GMT+12\",\n              \"Etc/GMT+2\",\n              \"Etc/GMT+3\",\n              \"Etc/GMT+4\",\n              \"Etc/GMT+5\",\n              \"Etc/GMT+6\",\n              \"Etc/GMT+7\",\n              \"Etc/GMT+8\",\n              \"Etc/GMT+9\",\n              \"Etc/GMT-0\",\n              \"Etc/GMT-1\",\n              \"Etc/GMT-10\",\n              \"Etc/GMT-11\",\n              \"Etc/GMT-12\",\n              \"Etc/GMT-13\",\n              \"Etc/GMT-14\",\n              \"Etc/GMT-2\",\n              \"Etc/GMT-3\",\n              \"Etc/GMT-4\",\n              \"Etc/GMT-5\",\n              \"Etc/GMT-6\",\n              \"Etc/GMT-7\",\n              \"Etc/GMT-8\",\n              \"Etc/GMT-9\",\n              \"Etc/GMT0\",\n              \"Etc/Greenwich\",\n              \"Etc/UCT\",\n              \"Etc/UTC\",\n              \"Etc/Universal\",\n              \"Etc/Zulu\",\n              \"Europe/Amsterdam\",\n              \"Europe/Andorra\",\n              \"Europe/Astrakhan\",\n              \"Europe/Athens\",\n              \"Europe/Belfast\",\n              \"Europe/Belgrade\",\n              \"Europe/Berlin\",\n              \"Europe/Bratislava\",\n              \"Europe/Brussels\",\n              \"Europe/Bucharest\",\n              \"Europe/Budapest\",\n              \"Europe/Busingen\",\n              \"Europe/Chisinau\",\n              \"Europe/Copenhagen\",\n              \"Europe/Dublin\",\n              \"Europe/Gibraltar\",\n              \"Europe/Guernsey\",\n              \"Europe/Helsinki\",\n              \"Europe/Isle_of_Man\",\n              \"Europe/Istanbul\",\n              \"Europe/Jersey\",\n              \"Europe/Kaliningrad\",\n              \"Europe/Kiev\",\n              \"Europe/Kirov\",\n              \"Europe/Lisbon\",\n              \"Europe/Ljubljana\",\n              \"Europe/London\",\n              \"Europe/Luxembourg\",\n              \"Europe/Madrid\",\n              \"Europe/Malta\",\n              \"Europe/Mariehamn\",\n              \"Europe/Minsk\",\n              \"Europe/Monaco\",\n              \"Europe/Moscow\",\n              \"Europe/Nicosia\",\n              \"Europe/Oslo\",\n              \"Europe/Paris\",\n              \"Europe/Podgorica\",\n              \"Europe/Prague\",\n              \"Europe/Riga\",\n              \"Europe/Rome\",\n              \"Europe/Samara\",\n              \"Europe/San_Marino\",\n              \"Europe/Sarajevo\",\n              \"Europe/Saratov\",\n              \"Europe/Simferopol\",\n              \"Europe/Skopje\",\n              \"Europe/Sofia\",\n              \"Europe/Stockholm\",\n              \"Europe/Tallinn\",\n              \"Europe/Tirane\",\n              \"Europe/Tiraspol\",\n              \"Europe/Ulyanovsk\",\n              \"Europe/Uzhgorod\",\n              \"Europe/Vaduz\",\n              \"Europe/Vatican\",\n              \"Europe/Vienna\",\n              \"Europe/Vilnius\",\n              \"Europe/Volgograd\",\n              \"Europe/Warsaw\",\n              \"Europe/Zagreb\",\n              \"Europe/Zaporozhye\",\n              \"Europe/Zurich\",\n              \"GB\",\n              \"GB-Eire\",\n              \"GMT\",\n              \"GMT+0\",\n              \"GMT-0\",\n              \"GMT0\",\n              \"Greenwich\",\n              \"HST\",\n              \"Hongkong\",\n              \"Iceland\",\n              \"Indian/Antananarivo\",\n              \"Indian/Chagos\",\n              \"Indian/Christmas\",\n              \"Indian/Cocos\",\n              \"Indian/Comoro\",\n              \"Indian/Kerguelen\",\n              \"Indian/Mahe\",\n              \"Indian/Maldives\",\n              \"Indian/Mauritius\",\n              \"Indian/Mayotte\",\n              \"Indian/Reunion\",\n              \"Iran\",\n              \"Israel\",\n              \"Jamaica\",\n              \"Japan\",\n              \"Kwajalein\",\n              \"Libya\",\n              \"MET\",\n              \"MST\",\n              \"MST7MDT\",\n              \"Mexico/BajaNorte\",\n              \"Mexico/BajaSur\",\n              \"Mexico/General\",\n              \"NZ\",\n              \"NZ-CHAT\",\n              \"Navajo\",\n              \"PRC\",\n              \"PST8PDT\",\n              \"Pacific/Apia\",\n              \"Pacific/Auckland\",\n              \"Pacific/Bougainville\",\n              \"Pacific/Chatham\",\n              \"Pacific/Chuuk\",\n              \"Pacific/Easter\",\n              \"Pacific/Efate\",\n              \"Pacific/Enderbury\",\n              \"Pacific/Fakaofo\",\n              \"Pacific/Fiji\",\n              \"Pacific/Funafuti\",\n              \"Pacific/Galapagos\",\n              \"Pacific/Gambier\",\n              \"Pacific/Guadalcanal\",\n              \"Pacific/Guam\",\n              \"Pacific/Honolulu\",\n              \"Pacific/Johnston\",\n              \"Pacific/Kiritimati\",\n              \"Pacific/Kosrae\",\n              \"Pacific/Kwajalein\",\n              \"Pacific/Majuro\",\n              \"Pacific/Marquesas\",\n              \"Pacific/Midway\",\n              \"Pacific/Nauru\",\n              \"Pacific/Niue\",\n              \"Pacific/Norfolk\",\n              \"Pacific/Noumea\",\n              \"Pacific/Pago_Pago\",\n              \"Pacific/Palau\",\n              \"Pacific/Pitcairn\",\n              \"Pacific/Pohnpei\",\n              \"Pacific/Ponape\",\n              \"Pacific/Port_Moresby\",\n              \"Pacific/Rarotonga\",\n              \"Pacific/Saipan\",\n              \"Pacific/Samoa\",\n              \"Pacific/Tahiti\",\n              \"Pacific/Tarawa\",\n              \"Pacific/Tongatapu\",\n              \"Pacific/Truk\",\n              \"Pacific/Wake\",\n              \"Pacific/Wallis\",\n              \"Pacific/Yap\",\n              \"Poland\",\n              \"Portugal\",\n              \"ROC\",\n              \"ROK\",\n              \"Singapore\",\n              \"Turkey\",\n              \"UCT\",\n              \"US/Alaska\",\n              \"US/Aleutian\",\n              \"US/Arizona\",\n              \"US/Central\",\n              \"US/East-Indiana\",\n              \"US/Eastern\",\n              \"US/Hawaii\",\n              \"US/Indiana-Starke\",\n              \"US/Michigan\",\n              \"US/Mountain\",\n              \"US/Pacific\",\n              \"US/Pacific-New\",\n              \"US/Samoa\",\n              \"UTC\",\n              \"Universal\",\n              \"W-SU\",\n              \"WET\",\n              \"Zulu\"\n            ],\n            \"title\": \"Timezone\",\n            \"options\": {\n              \"grid_columns\": 12\n            }\n          },\n          \"disabledWeekday\": {\n            \"type\": \"array\",\n            \"default\": \"\",\n            \"format\": \"select2\",\n            \"description\": \"Days of week when user can not select\",\n            \"title\": \"Disabled Days of week\",\n            \"uniqueItems\": true,\n            \"items\": {\n              \"type\": \"string\",\n              \"enum\": [\n                \"monday\",\n                \"tuesday\",\n                \"wednesday\",\n                \"thursday\",\n                \"friday\",\n                \"saturday\",\n                \"sunday\"\n              ]\n            },\n            \"options\": {\n              \"grid_columns\": 6\n            }\n          },\n          \"disabledDates\": {\n            \"type\": \"array\",\n            \"format\": \"table\",\n            \"uniqueItems\": true,\n            \"description\": \"Dates when user can not select, support range. Emit end date to set single date\",\n            \"title\": \"Disabled Dates\",\n            \"items\": {\n              \"type\": \"object\",\n              \"title\": \"Date range\",\n              \"properties\": {\n                \"startDate\": {\n                  \"type\": \"string\",\n                  \"format\": \"date\",\n                  \"options\": {\n                    \"flatpickr\": {\n                      \"datefomat\": \"m-d-Y\"\n                    }\n                  },\n                  \"title\": \"Start Date\"\n                },\n                \"endDate\": {\n                  \"type\": \"string\",\n                  \"format\": \"date\",\n                  \"options\": {\n                    \"flatpickr\": {\n                      \"dateFomat\": \"m-d-Y\"\n                    }\n                  },\n                  \"title\": \"End Date\"\n                }\n              }\n            },\n            \"options\": {\n              \"grid_columns\": 6\n            }\n          }\n        }\n      },\n      \"default\": [\n        {\n          \"name\": \"Delivery Date\",\n          \"displayInline\": true,\n          \"dateFormat\": \"m-d-Y\",\n          \"leadTime\": 0,\n          \"cutoffTime\": \"\",\n          \"timezone\": \"Default\",\n          \"disabledWeekday\": [],\n          \"disabledDates\": [\n            {\n              \"startDate\": \"\",\n              \"endDate\": \"\"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}};// The following lines are mandatory and readonly. You can add custom code above and below.\nif (jseditor instanceof window.JSONEditor) jseditor.destroy();\njseditor = new window.JSONEditor(document.querySelector(\"#json-editor-form\"), jedata);\n\nvar updateOutput = function() {window.top.iframeOutputCatcher(jseditor.getValue(), jseditor.validate()); };\nif (jseditor instanceof window.JSONEditor && !jseditor.destroyed) {\njseditor.on(\"change\",updateOutput);\n} else {\nwindow.top.iframeOutputCatcher(null, null, 1);\n}\n}\ncatch(err){\nif (window.top.iframeErrorCatcher) window.top.iframeErrorCatcher(err);else console.log(err);\n};\n</script>\n<link rel="stylesheet" href="https://beyondspace.tk/squarescript/000.BeyondSpace/Showcase/Datepicker/css/jsoneditor_demo_iframe.min.css">\n</body>\n</html>`
  }

  // Update form values in iframe (Currently uses the StartVal editor, but should be from a different source)
  /*    var setValueIframe = function() {
      var val = aceStartvalEditor.getValue();
      if (val.trim() && jeIframe.jseditor) jeIframe.jseditor.setValue(JSON.parse(val));
    }; */

  //  Parse JSON string and return JSON object. Empty object returned on error
  var parseJson = function (str) {
    var res
    try { res = JSON.parse(str) } catch (e) { res = {} }
    return res
  }

  var uploadExampleHandler = function (e) {
    e.preventDefault()
    var files = e.target.files || e.dataTransfer.files
    if (files.length !== 0) {
      var file = files[0]

      var reader = new FileReader()
      reader.onload = function (e) {
        var response = e.target.result
        var err = isInvalidJson(response)
        if (err) {
          jeModalContent.innerText = err
          toggleModal()
          return
        } else if (Object.getOwnPropertyNames(JSON.parse(response)).sort().join(',') !== 'code,config,desc,schema,startval,style,title') {
          jeModalContent.innerText = 'JSON file is not in the correct format'
          toggleModal()
          return
        }

        updateFromFile(response)
      }
      reader.readAsText(file)
    }
  }

  // Load Schema, Start Value, JavaScript Styles and Config options from Browser LocalStorage
  var loadFromLocalStorage = function () {
    if (window.localStorage) {
      var data = window.localStorage.getItem('jeplayground')
      if (data) updateFromFile(data)
    }
  }

  // Save Schema, Start Value, JavaScript Styles and Config options in Browser LocalStorage
  var saveToLocalStorage = function () {
    return; // NOTE
    if (window.localStorage) {
      window.localStorage.setItem('jeplayground', JSON.stringify({
        'schema': parseJson(aceSchemaEditor.getValue()),
        'startval': parseJson(aceStartvalEditor.getValue()),
        'config': getJsonEditorOptions(),
        'code': aceCodeEditor.getValue().trim(),
        'style': aceStyleEditor.getValue().trim(),
        'desc': ''
      }, null, 2))
    }
  }

  // Save Schema, Start Value, JavaScript Styles and Config options in examples schema format
  var downloadExampleHandler = function () {
    var title = prompt('Enter a Title for the example', 'JSON-Editor Example')
    if (title === null) return
    var example = {
        'title': title,
        'schema': parseJson(aceSchemaEditor.getValue()),
        'startval': parseJson(aceStartvalEditor.getValue()),
        'config': getJsonEditorOptions(),
        'code': aceCodeEditor.getValue().trim(),
        'style': aceStyleEditor.getValue().trim(),
        'desc': 'Add optional description here. (HTML format)'
      },
      filename = (example.title || 'example').toLowerCase().replace(/[\s<>:"\\|*]/g, '-') + '.json',
      blob = new Blob([JSON.stringify(example, null, 2)], {type: 'application/json;charset=utf-8'})

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename)
    } else {
      var a = document.createElement('a')
      a.download = filename
      a.href = URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':')
      eventClickFire(a)
    }
  }

  // Load external file
  var loadFile = function (file, mimeType, callback) {
    if (window.fetch && window.File && window.FileReader && window.FileList && window.Blob) {
      fetch(file, {mode: 'no-cors'})
        .then(function (response) {
          return response.blob()
        }).then(function (blob) {
          var reader = new FileReader()
          reader.onload = function (e) {
            callback(e.target.result)
          }
          reader.readAsText(blob)
        })
        .catch(function () {
          callback('')
        })
    } else {
      // IOS Safari and other crappy browsers :D
      var xobj = new XMLHttpRequest()
      xobj.overrideMimeType(mimeType)
      xobj.open('GET', file, true)
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4) {
          if (xobj.status == '200') callback(xobj.responseText)
          else callback('')
        }
      }
      xobj.send(null)
    }
  }

  // Change event handler - Load selected JSON Schema into editor
  var loadExampleFiles = function (e) {
    if (e.target.nodeName == 'BUTTON' && e.target.value) {
      eventClickFire(jeRightPanel) // Close panel
      loadFile('examples/' + e.target.value + '.json', 'application/json', updateFromFile)
    }
  }

  // Get index of examples and populate selectbox with results
  var getExamplesIndex = function () {
    var out = '<h2>JSON-Editor Example</h2>',
      examplesSort = function (x, y) { return (x.title > y.title) - (x.title < y.title) }
    loadFile('examples/index.json', 'application/json', function (cfg) {
      if (isInvalidJson(cfg)) {
        jeShowLoadExample.disabled = true
        jeShowLoadExample.style.cursor = 'not-allowed'
        jeShowLoadExample.title = 'No examples available due to invalid index file'
      } else {
        JSON.parse(cfg).forEach(function (el) {
          out += '<details open><summary>' + el.group + '</summary>'
          el.items.sort(examplesSort).forEach(function (el) {
            out += '<button value="' + el.file + '">' + el.title + '</button>'
          })
          out += '</details>'
        })
        jeSchemaLoad.innerHTML = out
      }
    })
  }

  // Extend expand/collapse for details/summary tags, so that only one open is allowed
  /*    var summaryOpenHandler = function(e) {
      if (e.target.nodeName == 'SUMMARY') {
        var details = this.querySelectorAll('details');
        for (var i=0;i<details.length;i++) {
          if (details[i] != e.target.parentNode) details[i].removeAttribute('open');
        }
      }
    }; */

  // Handler for buttons in editor slidedown panel
  var editorPanelButtonHandler = function (e) {
    // "this" is the ACE Editor instance
    if (e.target.dataset.action) {
      e.preventDefault()
      switch (e.target.dataset.action.toLowerCase()) {
        case 'search':
          this.execCommand('find')
          break
        case 'replace':
          this.execCommand('replace')
          break
        case 'beautify':
          aceBeautify.beautify(this.session)
          if (this.id === 'editor6') lockText() // id editor6 = aceCodeEditor
          break
        case 'wordwrap':
          this.setOption('wrap', this.getOption('wrap') == 'off')
          break
        case 'clear': {
          if (this.id === 'editor6') {
            this.setValue('\n' + getLockedText() + '\n')
            lockText()
          } else this.setValue('')
          this.session.getSelection().clearSelection()
          break
        }
      }
    }
  }

  // Set click event action for buttons in editor slidedown menus
  var setEditorPanelButtons = function (edEl, ed) {
    var buttons = edEl.parentNode.querySelectorAll('.slidedown-menu button');
    [].forEach.call(buttons, function (button) {
      button.addEventListener('click', editorPanelButtonHandler.bind(ed))
    })
  }

  // "OnReady" event for Iframe
  var iframeOnReady = function (a, b) {
    return a.readyState === 'loading' ? a.addEventListener('DOMContentLoaded', b) : b()
  }

  // Callback for when iframe is ready
  var iframeReady = function () {
    // console.log('Not busy');
    ///jeBusyOverlay.classList.remove('active')
    eventFire(document.querySelector('nav.tabs button:nth-of-type(1)'), 'click')
  }

  // Click event handler - Creates the form from the JSON schema
  var generateForm = async function (e) {
    e && e.preventDefault()

    // Trigger Tab switching when form is ready
    window.requestAnimationFrame(function () {
      // console.log('Busy');
      ///jeBusyOverlay.classList.add('active') // Doesn't seem to work
      iframeOnReady(jeIframe, iframeReady)
    })

    // var startVal = aceOutputEditor.getValue() || aceStartvalEditor.getValue();
    var startVal = aceStartvalEditor ? aceStartvalEditor.getValue() : "";

    // Get content of ACE editor schema, startval and JavaScript;
    var code = aceStartvalEditor ? getCode(aceSchemaEditor.getValue(), startVal) + aceCodeEditor.getValue() : `// The following lines are mandatory and readonly. You can add custom code above and below.
if (jseditor instanceof window.JSONEditor) jseditor.destroy();
jseditor = new window.JSONEditor(document.querySelector("#json-editor-form"), jedata);
`

    /*
      // Alternative to document.write() which is deprecated
      var bData = new Blob([createIframeContent(code)], {type: 'text/html'});
      jeIframeEl.onload = function() { window.URL.revokeObjectURL(bData); };
      jeIframeEl.src = window.URL.createObjectURL(bData);
*/

    // Iframe needs to be regenerated to prevent windows object from being cached
    // https://stackoverflow.com/questions/42065729/clean-the-cache-of-iframe
    var newIframeEl = document.createElement('iframe'),
      parent = jeIframeEl.parentNode,
      nextSibling = jeIframeEl.nextSibling

    newIframeEl.className = jeIframeEl.className
    newIframeEl.id = jeIframeEl.id

    parent.removeChild(jeIframeEl)
    parent.insertBefore(newIframeEl, nextSibling)

    jeIframeEl = newIframeEl
    jeIframe = jeIframeEl.contentWindow || (jeIframeEl.contentDocument.document || jeIframeEl.contentDocument)

    const defaultVal = await fetchDefaultValue(DEFAULT_JSON_VALUE);

    // document.write() seems to be the only way if you want reliable path info from window.loctation. See test example: https://codepen.io/pmk/pen/wOwoyW
    
    /* Beyondspace: append the code to the form iframe */
    jeIframe.document.open();
    jeIframe.document.write(createIframeContent(code));        

    jeIframe.onload = async function() {
      /* Beyondspace: set the default value to the form */      
      jeIframe.updateSchemaValuesIframe(defaultVal);      

      $.getScript( "https://cdn.jsdelivr.net/npm/spectrum-colorpicker@1.8.1/spectrum.min.js" )
        .done(function( script, textStatus ) {
          [
            '[data-schemapath="root.color"] input',
            '[data-schemapath="root.headerColor"] input',
            '[data-schemapath="root.headerBackground"] input'
          ].forEach((input) => {
              // Simple example, see optional options for more configuration.
              const colorInput = jeIframe.document.querySelector(input);
                console.log(colorInput);
              jeIframe.$(colorInput).spectrum({
                preferredFormat: "hex",
                showInput: true,
                color: colorInput.value,
                change: function(color) {
                    colorInput.value = color.toHexString(); // #ff0000               
                    // Create a new 'change' event
                    var event = new Event('change');

                    // Dispatch it.
                    colorInput.dispatchEvent(event);
                }
            });
            
          })
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });      
    }
    
    jeIframe.document.close();
  


    saveToLocalStorage()
  }

  // Create ACE Editor instance
  var createEditor = function (el, options) {
    var replaceCmd = {
        name: 'replace',
        bindKey: {win: 'Ctrl-R', mac: 'Command-Option-F'},
        exec: function (editor) {
          window.ace.config.loadModule('ace/ext/searchbox', function (e) { e.Search(editor, true) })
        },
        readOnly: true
      }, ed = window.ace.edit(el)

    ed.setOptions({theme: aceTheme})
    ed.session.setOptions(extendObj({}, {
      tabSize: 2,
      useSoftTabs: true
    }, options))
    ed.renderer.setOptions({minLines: 40, maxLines: 40})
    // Change replace shortcut from Ctrl-H to Ctrl-R
    ed.commands.addCommand(replaceCmd)

    return ed
  }

  /* Setup */

  /*// Add modal box events
  jeModalClose.addEventListener('click', toggleModal)
  window.addEventListener('click', closeModal)*/

  /*// Setup ACE editor for editing Schema
  aceSchemaEditor = createEditor(jeEditSchema, {mode: 'ace/mode/json'})

  // Setup ACE editor for editing Schema start values
  aceStartvalEditor = createEditor(jeEditStartval, {mode: 'ace/mode/json'})*/

  // Setup ACE editor for editing output values
  aceOutputEditor = createEditor(jeOutput, {
    mode: 'ace/mode/html',
    wrap: true,
    useWrapMode: true,
    indentedSoftWrap: true
  })

  /*// Setup ACE editor for displayiong validation results
  aceValidateEditor = createEditor(jeValidate, {mode: 'ace/mode/json'})

  // Setup ACE editor for editing CSS
  aceStyleEditor = createEditor(jeEditCSS, {
    mode: 'ace/mode/css',
    wrap: true,
    useWrapMode: true,
    indentedSoftWrap: true
  })

  // Setup ACE editor for editing JavaScript
  aceCodeEditor = createEditor(jeEditCode, {
    mode: 'ace/mode/javascript',
    wrap: true,
    useWrapMode: true,
    indentedSoftWrap: true
  })

  // Fix to make the marker positions update correctly
  // https://github.com/ajaxorg/ace/issues/3687
  aceCodeEditor.on('change', aceCodeEditor.$onChangeFrontMarker)

  // Intercept keypress
  aceCodeEditor.keyBinding.addKeyboardHandler({
    handleKeyboard: function (data, hash, keyString, keyCode, event) {
      if (hash === -1 || keyCode === -1 || (keyCode === 67 && hash === 1) || (keyCode <= 40 && keyCode >= 37)) return false
      var newRange = aceCodeEditor.getSelectionRange(), block = Object.keys(getIntersectMarkers(newRange, keyString)).length > 0
      if (keyString == 'return' && block) aceCodeEditor.selection.moveTo(newRange.end.row + 1, 0)
      return block ? {command: 'null', passEvent: false} : false
    }
  })

  // Prevent cutting text into the locked range using context menu
  aceCodeEditor.on('cut', function (e) {
    if (Object.keys(getIntersectMarkers(e)).length) e.setEnd(e.start.row, e.start.column)
  }, false)

  // Prevent pasting text into the locked range using context menu
  aceCodeEditor.on('paste', function (e) {
    if (Object.keys(getIntersectMarkers(aceCodeEditor.getSelectionRange())).length) e.text = ''
  }, false)

  // Override default ace editor instance $tryReplace function
  // Prevent replace function from overwriting the locked range
  aceCodeEditor.$tryReplace = (function (orgFunc) {
    return function (newRange) {
      return Object.keys(getIntersectMarkers(newRange)).length ? null : orgFunc.apply(this, arguments)
    }
  })(aceCodeEditor.$tryReplace)

  // Override default session moveText function
  // Prevent moving text into the locked range
  var session = aceCodeEditor.getSession()
  session.moveText = (function (orgFunc) {
    return function (fromRange, toPosition) {
      // Is toPosition inside any markers?
      var block = Object.keys(getInsideMarkers(toPosition.row, toPosition.column)).length > 0
      // Does the content being moved contain any markers?
      if (!block) block = Object.keys(getIntersectMarkers(fromRange)).length > 0
      return block ? fromRange : orgFunc.apply(this, arguments)
    }
  })(session.moveText)

  lockText()

  // Show error if JSON schema or startval is invalid
  aceSchemaEditor.on('blur', showModalError.bind(aceSchemaEditor))
  aceStartvalEditor.on('blur', showModalError.bind(aceStartvalEditor))*/

  // Update form if output JSON is changed
  aceOutputEditor.on('blur', updateSchemaValues.bind(aceOutputEditor))

  // Set buttom event in editor slidedown panels.
  //setEditorPanelButtons(jeEditSchema, aceSchemaEditor)
  //setEditorPanelButtons(jeEditStartval, aceStartvalEditor)
  //setEditorPanelButtons(jeEditCode, aceCodeEditor)
  //setEditorPanelButtons(jeEditCSS, aceStyleEditor)
  setEditorPanelButtons(jeOutput, aceOutputEditor)
  //setEditorPanelButtons(jeValidate, aceValidateEditor)

  // Set events on tabs buttons
  /*jeTabs.addEventListener('click', tabsHandler, false)

  // Set handler for showing/hiding left panel
  var panelLeftHandler = setPanelHandler(jeLeftPanel)
  jeShowConfig.addEventListener('click', panelLeftHandler, false)

  // Set handler for showing/hiding left panel
  var panelRightHandler = setPanelHandler(jeRightPanel)
  jeShowLoadExample.addEventListener('click', panelRightHandler, false)

  // Set button event for loading external schemas
  if (window.fetch && window.File && window.FileReader && window.FileList && window.Blob) {
    jeSchemaLoad.addEventListener('click', loadExampleFiles, false)
  } else {
    jeShowLoadExample.disabled = true
    jeShowLoadExample.style.cursor = 'not-allowed'
    jeShowLoadExample.title = 'Not available locally due to CORS policy'
  }

  // Set button event for generating form
  jeExec.addEventListener('click', generateForm, false)

  jeFilesUsed.addEventListener('click', listExternalFilesUsed, false)
  // Create the direct link URL
  jeDirectLink.addEventListener('click', updateDirectLink, false)
  jeUrlReset.addEventListener('click', resetUrl, false)

  // Set button event for downloading as example
  jeDownloadExample.addEventListener('click', downloadExampleHandler, false)
  // Set button event for uploading example
  jeUploadExample.addEventListener('click', eventClickFire.bind(null, jeFileUpload), false)
  jeFileUpload.addEventListener('change', uploadExampleHandler, false)

  // Set event handler for details/summary tags
  // jeCfg.addEventListener('click', summaryOpenHandler, false);

  // Set Drag'n'Drop handlers
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    ['dragenter', 'dragstart', 'dragend'].forEach(function (ev) {
      window.addEventListener(ev, dragHandler, false)
    });
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (ev) {
      jeDropZone.addEventListener(ev, dragHandler, false)
    })
  }

  // Set resizable split panels
  window.Split(jeSplitPanels[0], jeSplitCfg)
  window.Split(jeSplitPanels[1], jeSplitCfg)
  window.Split(jeSplitPanels[2], jeSplitCfg)

  // Populate examples selectbox
  getExamplesIndex()*/

  // Update fields from query parameters
  if (window.location.search) {
    //updateFromUrl()
    // Trigger generation of form
    //eventFire(jeExec, 'click')
  } else 
  {
    //loadFromLocalStorage() 
  }

  generateForm();
})()
});
