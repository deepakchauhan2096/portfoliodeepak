exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPropValid);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/components/Edu.js":
/*!*******************************!*\
  !*** ./src/components/Edu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./src/components/Item.js");
/* harmony import */ var _assets_image_vervebot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/image/vervebot.png */ "./src/assets/image/vervebot.png");
/* harmony import */ var _assets_image_tryscrum_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/image/tryscrum.png */ "./src/assets/image/tryscrum.png");
/* harmony import */ var _assets_image_materiallibrary_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image/materiallibrary.png */ "./src/assets/image/materiallibrary.png");
/* harmony import */ var _assets_image_trybusinessagility_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/image/trybusinessagility.png */ "./src/assets/image/trybusinessagility.png");







// import img_five from "../assets/image/img_five.png"
// import img_six from "../assets/image/img_six.jpg"

const Edu = () => {
  const data = [{
    img: _assets_image_tryscrum_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    content: "",
    url: "http://tryscrum.com"
  }, {
    img: _assets_image_materiallibrary_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    content: "",
    url: "http://materiallibrary.com"
  }, {
    img: _assets_image_vervebot_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    content: "",
    url: "http://vervebot.com"
  }, {
    img: _assets_image_trybusinessagility_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    content: "",
    url: "https://trybusinessagility.com"
  }
  // {
  //      img:img_five,
  //      content:""
  // },
  // {
  //      img:img_six,
  //      content:""
  // }
  ];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    itemPadding: [0, 0],
    autoPlaySpeed: 2500,
    showArrows: true,
    pagination: false,
    isRTL: true
  }, data.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "carousel-items",
    style: {
      backgroundImage: `url(${item.img})`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: item.url,
    className: "preview"
  }, "Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edu);

/***/ }),

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  justify-content: center;
  align-items: center;
  height: 45vh;
  width: 100%;
  font-size: 4em;
  border-radius:10px;
`);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _assets_css_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/layout.css */ "./src/assets/css/layout.css");
/* harmony import */ var _assets_css_layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_layout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Skill */ "./src/components/Skill.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Edu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Edu */ "./src/components/Edu.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");








const Layout = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "container-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Edu__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "content1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Skill__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "content2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Project__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "content3"
  }, "Content3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "Footer"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _assets_images_web_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/web-logo.png */ "./src/assets/images/web-logo.png");



const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
    crossorigin: "anonymous"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",
    crossorigin: "anonymous"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./src/components/Item.js");
/* harmony import */ var _assets_image_img_one_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/image/img_one.jpg */ "./src/assets/image/img_one.jpg");
/* harmony import */ var _assets_image_img_two_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/image/img_two.jpg */ "./src/assets/image/img_two.jpg");
/* harmony import */ var _assets_image_img_three_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image/img_three.jpg */ "./src/assets/image/img_three.jpg");
/* harmony import */ var _assets_image_img_four_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/image/img_four.jpg */ "./src/assets/image/img_four.jpg");
/* harmony import */ var _assets_image_img_five_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/image/img_five.jpg */ "./src/assets/image/img_five.jpg");
/* harmony import */ var _assets_image_img_six_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/image/img_six.jpg */ "./src/assets/image/img_six.jpg");









const Project = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    itemPadding: [0, 0],
    enableAutoPlay: true,
    autoPlaySpeed: 2500,
    showArrows: true,
    pagination: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      background: "violet"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_img_one_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "img_one"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      background: "violet"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_img_two_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: "img_one"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      background: "violet"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_img_three_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
    className: "img_one"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      background: "violet"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_img_four_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
    className: "img_one"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      background: "violet"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_img_five_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
    className: "img_one"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      background: "violet"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_img_six_jpg__WEBPACK_IMPORTED_MODULE_8__["default"],
    className: "img_one"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_profile_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/image/profile.jpeg */ "./src/assets/image/profile.jpeg");


const Sidebar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      overflow: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_profile_jpeg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "deepak chauhan",
    width: "120px",
    style: {
      borderRadius: "50%",
      margin: "30px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    style: {
      backgroundColor: "black",
      height: "1px",
      borderWidth: "0",
      margin: "0 30px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      backgroundColor: "",
      margin: "20px 30px",
      textAlign: "start"
    }
  }, "I am a React Full-stack developer passionate about providing modern, clean, and fully validated sites. Plus, I have a lot of experience in building minimum viable products for startups and helping them to build their teams. I've worked with JavaScript, React, and HTML5/CSS3. During my career,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      backgroundColor: "",
      margin: "20px 30px",
      textAlign: "start"
    }
  }, "I have worked as a full-stack developer, interfacing with databases including MySQL & MongoDB. I am adept at designing and consuming various styles of APIs, including REST & GraphQL. With my work and experience, I can help you with the development of web projects, from static websites like personal pages to complex web applications. I can also integrate the development of an ongoing web project, solo or being part of a team. Highlighted skills:  React,  Redux, HTML5, CSS3, and others."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/components/Skill.js":
/*!*********************************!*\
  !*** ./src/components/Skill.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_js_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/image/js.png */ "./src/assets/image/js.png");
/* harmony import */ var _assets_image_React_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/image/React.png */ "./src/assets/image/React.png");
/* harmony import */ var _assets_image_Bootstrap_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/image/Bootstrap.png */ "./src/assets/image/Bootstrap.png");
/* harmony import */ var _assets_image_html_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/image/html.png */ "./src/assets/image/html.png");
/* harmony import */ var _assets_image_css_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image/css.png */ "./src/assets/image/css.png");
/* harmony import */ var _assets_image_profile_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/image/profile.jpeg */ "./src/assets/image/profile.jpeg");







const Skill = () => {
  const data = [{
    skill: "JavaScript",
    rank: "75%",
    bg: "violet"
  }, {
    skill: "HTML/CSS",
    rank: "85%",
    bg: "indigo"
  }, {
    skill: "React Js",
    rank: "80%",
    bg: "blue"
  }, {
    skill: "Gatsby",
    rank: "80%",
    bg: "green"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      overflow: "hidden",
      borderTop: ""
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    style: {
      textAlign: "start",
      fontSize: "20px",
      padding: "10px 0px",
      margin: "0 30px"
    }
  }, "Skills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    style: {
      backgroundColor: "black",
      height: "0.5px",
      borderWidth: "0",
      margin: "0 30px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row px-4 py-4",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_js_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    width: 80,
    style: {
      borderRadius: "10px"
    },
    title: "Java Scipt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_React_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    width: 80,
    style: {
      borderRadius: "10px"
    },
    title: "React Js"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_Bootstrap_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    width: 80,
    style: {
      borderRadius: "10px"
    },
    title: "Bootstrap"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_html_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    width: 80,
    style: {
      borderRadius: "10px",
      background: "blue"
    },
    title: "HTML 5"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row px-4 py-4",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_image_css_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    width: 80,
    style: {
      borderRadius: "10px"
    },
    title: "CSS 3"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skill);

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./src/assets/css/layout.css":
/*!***********************************!*\
  !*** ./src/assets/css/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-elastic-carousel/dist/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/dist/index.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consts": () => (/* binding */ consts),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-elastic-carousel/node_modules/react-swipeable/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var react_only_when__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-only-when */ "./node_modules/react-elastic-carousel/node_modules/react-only-when/dist/index.es.js");








function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var noop = function noop() {};
var numberToArray = function numberToArray(n) {
  return _toConsumableArray(Array(n).keys());
};
var cssPrefix = function cssPrefix() {
  var prefix = "rec";
  var space = " ";
  var result = "".concat(prefix); // initial it with global prefix;
  // in case of an array we add the class prefix per item;

  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  var chainedClasses = classNames.reduce(function (acc, current) {
    if (current) {
      acc += "".concat(space).concat(prefix, "-").concat(current); // we must keep spaces between class names
    }

    return acc;
  }, "");
  result += chainedClasses;
  return result;
};
var pipe = function pipe() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  font-size: 1.6em;\n  background-color: rgba(103, 58, 183, 0.1);\n  color: ", ";\n  box-shadow: 0 0 2px 0px #333;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  line-height: 50px;\n  align-self: center;\n  cursor: pointer;\n  outline: none;\n  &:hover:enabled,\n  &:focus:enabled {\n    color: #fff;\n    background-color: rgba(103, 58, 183, 1);\n    box-shadow: 0 0 2px 0 #333;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject(), function (props) {
  return props.disabled ? "#999" : "#333";
});

var consts = {
  PREV: "PREV",
  NEXT: "NEXT",
  START: "flex-start",
  CENTER: "center",
  END: "flex-end"
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  overflow: hidden;\n  user-select: none;\n  justify-content: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.attrs(function (_ref) {
  var style = _ref.style;
  return {
    style: style,
    className: cssPrefix("item-wrapper")
  };
})(_templateObject$1(), function (_ref2) {
  var itemPosition = _ref2.itemPosition;
  return itemPosition;
});
ItemWrapper.defaultProps = {
  style: {},
  itemPosition: consts.CENTER
};
ItemWrapper.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf([consts.START, consts.CENTER, consts.END])
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  margin: 0 10px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var calcLeft = function calcLeft(_ref) {
  var isRTL = _ref.isRTL,
      verticalMode = _ref.verticalMode,
      isSwiping = _ref.isSwiping,
      swipedSliderPosition = _ref.swipedSliderPosition,
      sliderPosition = _ref.sliderPosition;

  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcRight = function calcRight(_ref2) {
  var isRTL = _ref2.isRTL,
      verticalMode = _ref2.verticalMode,
      isSwiping = _ref2.isSwiping,
      swipedSliderPosition = _ref2.swipedSliderPosition,
      sliderPosition = _ref2.sliderPosition;

  if (!verticalMode && isRTL) {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  } else {
    return "auto";
  }
};

var calcTop = function calcTop(_ref3) {
  var verticalMode = _ref3.verticalMode,
      isSwiping = _ref3.isSwiping,
      swipedSliderPosition = _ref3.swipedSliderPosition,
      sliderPosition = _ref3.sliderPosition;

  if (!verticalMode) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcTransition = function calcTransition(_ref4) {
  var isSwiping = _ref4.isSwiping,
      transitionMs = _ref4.transitionMs,
      easing = _ref4.easing,
      tiltEasing = _ref4.tiltEasing;
  var duration = isSwiping ? 0 : transitionMs;
  var effectiveEasing = isSwiping ? tiltEasing : easing;
  return "all ".concat(duration, "ms ").concat(effectiveEasing);
}; // We use attributes (style) to bypass multiple creation of classes (dynamic styling)


var Slider = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.attrs(function (props) {
  return {
    style: {
      transition: calcTransition(props),
      left: calcLeft(props),
      right: calcRight(props),
      top: calcTop(props)
    }
  };
})(_templateObject$3(), function (_ref5) {
  var verticalMode = _ref5.verticalMode;
  return verticalMode ? "column" : "row";
}, function (_ref6) {
  var verticalMode = _ref6.verticalMode;
  return verticalMode ? "min-height: 100%;" : "";
}, function (_ref7) {
  var verticalMode = _ref7.verticalMode,
      outerSpacing = _ref7.outerSpacing;
  return verticalMode ? "" : "margin: 0 ".concat(outerSpacing, "px;");
});

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCarousel = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.attrs(function (props) {
  return {
    style: {
      height: props.size.height
    }
  };
})(_templateObject$4());

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  direction: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject$5(), function (_ref) {
  var isRTL = _ref.isRTL;
  return isRTL ? "rtl" : "ltr";
});

var ItemWrapperContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemWrapperContainer, _React$Component);

  var _super = _createSuper(ItemWrapperContainer);

  function ItemWrapperContainer() {
    var _this;

    _classCallCheck(this, ItemWrapperContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(ItemWrapperContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemWrapper, _extends({}, this.props, {
        onClick: this.onClick
      }));
    }
  }]);

  return ItemWrapperContainer;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

ItemWrapperContainer.defaultProps = {
  onClick: noop
};
ItemWrapperContainer.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

var Track = function Track(_ref) {
  var children = _ref.children,
      childWidth = _ref.childWidth,
      autoTabIndexVisibleItems = _ref.autoTabIndexVisibleItems,
      enableSwipe = _ref.enableSwipe,
      enableMouseSwipe = _ref.enableMouseSwipe,
      preventDefaultTouchmoveEvent = _ref.preventDefaultTouchmoveEvent,
      itemsToShow = _ref.itemsToShow,
      itemsToScroll = _ref.itemsToScroll,
      currentItem = _ref.currentItem,
      itemPosition = _ref.itemPosition,
      itemPadding = _ref.itemPadding,
      onSwiped = _ref.onSwiped,
      onSwiping = _ref.onSwiping,
      verticalMode = _ref.verticalMode,
      onItemClick = _ref.onItemClick;
  var width = "".concat(childWidth, "px");
  var paddingStyle = "".concat(itemPadding.join("px "), "px");
  var minVisibleItem = currentItem;
  var maxVisibleItem = currentItem + itemsToShow;
  var prevItem = minVisibleItem - itemsToScroll;
  var nextItem = maxVisibleItem + itemsToScroll;
  var originalChildren = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child, idx) {
    var isVisible = idx >= minVisibleItem && idx < maxVisibleItem;
    var isPrevItem = !isVisible && idx >= prevItem && idx < currentItem;
    var isNextItem = !isVisible && idx < nextItem && idx > currentItem;
    var itemClass = "carousel-item";
    var childToRender = autoTabIndexVisibleItems ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      tabIndex: isVisible ? 0 : -1
    }) : child;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: cssPrefix(itemClass, "".concat(itemClass, "-").concat(idx), "".concat(itemClass, "-").concat(isVisible ? "visible" : "hidden"), isPrevItem && "".concat(itemClass, "-prev"), isNextItem && "".concat(itemClass, "-next"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemWrapperContainer, {
      id: idx,
      itemPosition: itemPosition,
      style: {
        width: width,
        padding: paddingStyle
      },
      key: idx,
      onClick: onItemClick
    }, childToRender));
  });
  var toRender = enableSwipe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_1__.Swipeable, {
    style: {
      display: "flex",
      flexDirection: verticalMode ? "column" : "row"
    },
    stopPropagation: true,
    preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
    trackMouse: enableMouseSwipe,
    onSwiped: onSwiped,
    onSwiping: onSwiping,
    className: cssPrefix("swipable")
  }, originalChildren) : originalChildren;
  return toRender;
};

Track.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array.isRequired),
  itemsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  noAutoTabbedItems: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  currentItem: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  itemPosition: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  itemPadding: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
  childWidth: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  verticalMode: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  enableSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  enableMouseSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  preventDefaultTouchmoveEvent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  onSwiped: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onSwiping: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  onItemClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

var directionIcons = {
  left: "???",
  right: "???",
  up: "???",
  down: "???"
};
var arrowClassname = cssPrefix("arrow");

var rotateStyle = function rotateStyle(direction) {
  var rotate = {};

  if (direction === Arrow.up || direction === Arrow.down) {
    rotate.transform = "rotate(90deg)";
  }

  return rotate;
};

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      icons = _ref.icons,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["direction", "onClick", "icons", "style"]);

  var arrows = _objectSpread2(_objectSpread2({}, directionIcons), icons);

  var styleObj = _objectSpread2(_objectSpread2({}, rotateStyle(direction)), style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, _extends({
    tabIndex: 0,
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(arrowClassname, "".concat(arrowClassname, "-").concat(direction)),
    style: styleObj
  }, rest), arrows[direction]);
};

Arrow.left = "left";
Arrow.right = "right";
Arrow.up = "up";
Arrow.down = "down";
Arrow.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["left", "right", "up", "down"]).isRequired,
  icons: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

var NEXT_ITEM = "NEXT_ITEM";
var PREV_ITEM = "PREV_ITEM";

var activeIndexReducer = function activeIndexReducer(state, action) {
  var limit = action.limit,
      itemsToScroll = action.itemsToScroll,
      type = action.type;

  switch (type) {
    case NEXT_ITEM:
      {
        var optimisticNextItem = state + itemsToScroll;
        var nextItem = limit >= optimisticNextItem ? optimisticNextItem : limit;
        return nextItem;
      }

    case PREV_ITEM:
      {
        var optimisticPrevItem = state - itemsToScroll;
        var prevItem = optimisticPrevItem >= limit ? optimisticPrevItem : limit;
        return prevItem;
      }

    default:
      return state;
  }
};

var nextItemAction = function nextItemAction(limit, itemsToScroll) {
  return {
    type: NEXT_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};
var prevItemAction = function prevItemAction(limit, itemsToScroll) {
  return {
    type: PREV_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: 0;\n  transition: all 250ms ease;\n  border: none;\n  margin: 5px;\n  background-color: ", ";\n  font-size: 1.3em;\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  box-shadow: ", ";\n  border-radius: 50%;\n  outline: none;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var boxShadow = "0 0 1px 2px rgba(0, 0, 0, 0.5)";
var activeBoxShadow = "0 0 1px 3px rgba(103,58,183,1)";
var hoveredBoxShadow = "0 0 1px 3px rgba(103,58,183,.5)";
var Dot = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject$6(), function (_ref2) {
  var active = _ref2.active;
  return active ? "rgba(103,58,183,.5)" : "transparent";
}, function (_ref3) {
  var active = _ref3.active;
  return active ? activeBoxShadow : boxShadow;
}, function (_ref4) {
  var active = _ref4.active;
  return active ? activeBoxShadow : hoveredBoxShadow;
});

var DotContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(DotContainer, _React$Component);

  var _super = _createSuper(DotContainer);

  function DotContainer() {
    var _this;

    _classCallCheck(this, DotContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(DotContainer, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dot, {
        tabIndex: active ? -1 : 0,
        onClick: this.onClick,
        active: active,
        className: "".concat(cssPrefix("dot"), " ").concat(active ? cssPrefix("dot_active") : "")
      });
    }
  }]);

  return DotContainer;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

DotContainer.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Indicators = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject$7());

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _super.apply(this, arguments);
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          numOfPages = _this$props.numOfPages,
          activePage = _this$props.activePage,
          onClick = _this$props.onClick;
      var pages = numberToArray(numOfPages);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Indicators, {
        className: cssPrefix("pagination")
      }, pages.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DotContainer, {
          key: i,
          id: i,
          active: i === activePage,
          onClick: onClick
        });
      }));
    }
  }]);

  return Pagination;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Pagination.defaultProps = {
  onClick: noop
};
Pagination.propTypes = {
  numOfPages: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  activePage: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "isComponentMounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      rootHeight: 0,
      childHeight: 0,
      sliderPosition: 0,
      swipedSliderPosition: 0,
      isSwiping: false,
      transitioning: false,
      transitionMs: _this.props.transitionMs,
      activeIndex: _this.props.initialActiveIndex || _this.props.initialFirstItem,
      // support deprecated  initialFirstItem
      pages: [],
      activePage: 0,
      sliderContainerWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (name) {
      return function (ref) {
        return _this[name] = ref;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initResizeObserver", function () {
      _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_3__["default"](function (entries, observer) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          var _loop = function _loop() {
            var entry = _step.value;

            if (entry.target === _this.sliderContainer) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why.
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onContainerResize(entry);
              });
            }

            if (entry.target === _this.slider) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onSliderResize(entry);
              });
            }
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });

      _this.ro.observe(_this.sliderContainer);

      _this.ro.observe(_this.slider);
    });

    _defineProperty(_assertThisInitialized(_this), "unSubscribeObserver", function () {
      return _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "setAutoPlay", function () {
      var _this$getDerivedProps = _this.getDerivedPropsFromBreakPoint(),
          autoPlaySpeed = _this$getDerivedProps.autoPlaySpeed;

      _this.autoPlayIntervalId = setInterval(function () {
        if (_this.isComponentMounted) {
          var transitioning = _this.state.transitioning;

          if (!transitioning) {
            _this.slideNext();
          }
        }
      }, autoPlaySpeed);
    });

    _defineProperty(_assertThisInitialized(_this), "removeAutoPlay", function () {
      if (_this.autoPlayIntervalId) {
        clearInterval(_this.autoPlayIntervalId);
        _this.autoPlayIntervalId = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPages", function () {
      var numOfPages = _this.getNumOfPages();

      var pages = numberToArray(numOfPages);

      _this.setState({
        pages: pages
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderTransitionEnd", function (fn) {
      _this.slider.addEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSliderTransitionHook", function (fn) {
      _this.slider.removeEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "getDerivedPropsFromBreakPoint", function () {
      var _this$props = _this.props,
          breakPoints = _this$props.breakPoints,
          restOfProps = _objectWithoutProperties(_this$props, ["breakPoints"]);

      var sliderContainerWidth = _this.state.sliderContainerWidth; // default breakpoint from individual props

      var currentBreakPoint; // if breakpoints were added as props override the individual props

      if (breakPoints && breakPoints.length > 0) {
        currentBreakPoint = breakPoints.slice() // no mutations
        .reverse() // so we can find last match
        .find(function (bp) {
          return bp.width <= sliderContainerWidth;
        });

        if (!currentBreakPoint) {
          /* in case we don't have a lower width than sliderContainerWidth
           * this mostly happens in initilization when sliderContainerWidth is 0
           */
          currentBreakPoint = breakPoints[0];
        }
      } // merge direct props with current breakpoint Props


      return _objectSpread2(_objectSpread2({}, restOfProps), currentBreakPoint);
    });

    _defineProperty(_assertThisInitialized(_this), "updateSliderPosition", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps2 = _this.getDerivedPropsFromBreakPoint(),
            children = _this$getDerivedProps2.children,
            verticalMode = _this$getDerivedProps2.verticalMode,
            itemsToShow = _this$getDerivedProps2.itemsToShow,
            transitionMs = _this$getDerivedProps2.transitionMs;

        var childHeight = state.childHeight,
            activeIndex = state.activeIndex;

        var childWidth = _this.calculateChildWidth();

        var totalItems = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;
        var hiddenSlots = totalItems - itemsToShow;
        var moveBy = activeIndex * -1;
        var emptySlots = itemsToShow - (totalItems - activeIndex);

        if (emptySlots > 0 && hiddenSlots > 0) {
          moveBy = emptySlots + activeIndex * -1;
        }

        var sliderPosition = (verticalMode ? childHeight : childWidth) * moveBy;
        var newActiveIndex = emptySlots > 0 ? activeIndex - emptySlots : activeIndex; // go back from 0ms to whatever set by the user
        // We were at 0ms because we wanted to disable animation on resize
        // see https://github.com/sag1v/react-elastic-carousel/issues/94

        window.requestAnimationFrame(function () {
          if (_this.isComponentMounted) {
            _this.setState({
              transitionMs: transitionMs
            });
          }
        });
        return {
          sliderPosition: sliderPosition,
          activeIndex: newActiveIndex < 0 ? 0 : newActiveIndex
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderResize", function (sliderNode) {
      if (!_this.isComponentMounted) {
        return;
      }

      var _this$getDerivedProps3 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps3.verticalMode,
          children = _this$getDerivedProps3.children,
          itemsToShow = _this$getDerivedProps3.itemsToShow;

      var sliderHeight = sliderNode.contentRect.height;
      var nextState = {};
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;

      if (verticalMode) {
        var childHeight = sliderHeight / childrenLength; // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")

        nextState.rootHeight = childHeight * Math.min(childrenLength, itemsToShow);
        nextState.childHeight = childHeight;
      } else {
        nextState.rootHeight = sliderHeight;
      }

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "calculateChildWidth", function () {
      var sliderContainerWidth = _this.state.sliderContainerWidth;

      var _this$getDerivedProps4 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps4.verticalMode,
          itemsToShow = _this$getDerivedProps4.itemsToShow,
          showEmptySlots = _this$getDerivedProps4.showEmptySlots,
          children = _this$getDerivedProps4.children;
      /* based on slider container's width, get num of items to show
          * and calculate child's width (and update it in state)
          */


      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length || 1;
      var childWidth = 0;

      if (verticalMode) {
        childWidth = sliderContainerWidth;
      } else {
        // When "showEmptySlots" is false
        // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")
        childWidth = sliderContainerWidth / (showEmptySlots ? itemsToShow : Math.min(childrenLength, itemsToShow));
      }

      return childWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerResize", function (sliderContainerNode) {
      var newSliderContainerWidth = sliderContainerNode.contentRect.width; // update slider container width
      // disable animation on resize see https://github.com/sag1v/react-elastic-carousel/issues/94

      var _this$getDerivedProps5 = _this.getDerivedPropsFromBreakPoint(),
          outerSpacing = _this$getDerivedProps5.outerSpacing,
          initialVerticalMode = _this$getDerivedProps5.verticalMode;

      var containerWidth = newSliderContainerWidth - (initialVerticalMode ? 0 : outerSpacing * 2);

      if (!_this.isComponentMounted || _this.state.sliderContainerWidth === newSliderContainerWidth) {
        // prevent infinite loop
        return;
      }

      _this.setState({
        sliderContainerWidth: containerWidth,
        transitionMs: 0
      }, function () {
        // we must get these props inside setState (get future props because its async)
        var _this$getDerivedProps6 = _this.getDerivedPropsFromBreakPoint(),
            onResize = _this$getDerivedProps6.onResize,
            itemsToShow = _this$getDerivedProps6.itemsToShow,
            children = _this$getDerivedProps6.children;

        var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length || 1;

        _this.setState(function (currentState) {
          // We might need to change the selected index when the size of the container changes
          // we are making sure the selected index is not out of boundaries and respecting itemsToShow
          // This usually happens with breakpoints. see https://github.com/sag1v/react-elastic-carousel/issues/122
          var activeIndex = currentState.activeIndex; // we take the lowest, in case itemsToShow is greater than childrenLength

          var maxItemsToShow = Math.min(childrenLength, itemsToShow);
          var endLimit = childrenLength - maxItemsToShow;

          if (activeIndex > endLimit) {
            activeIndex = endLimit;
          }

          return {
            activeIndex: activeIndex
          };
        }, function () {
          /* Based on all of the above new data:
          * update slider position
          * get the new current breakpoint
          * pass the current breakpoint to the consumer's callback
          */
          _this.updateSliderPosition();

          var currentBreakPoint = _this.getDerivedPropsFromBreakPoint();

          onResize(currentBreakPoint);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "tiltMovement", function (position) {
      var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;

      _this.setState(function (state) {
        return {
          isSwiping: true,
          swipedSliderPosition: position - distance
        };
      });

      setTimeout(function () {
        _this.setState({
          isSwiping: false,
          swipedSliderPosition: 0
        });
      }, duration);
    });

    _defineProperty(_assertThisInitialized(_this), "convertChildToCbObj", function (index) {
      var _this$getDerivedProps7 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps7.children; // support decimal itemsToShow


      var roundedIdx = Math.round(index);
      var child = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children)[roundedIdx];
      return {
        item: child.props,
        index: roundedIdx
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemIndex", function (currentIndex, getPrev) {
      var _this$getDerivedProps8 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps8.children,
          itemsToShow = _this$getDerivedProps8.itemsToShow,
          itemsToScroll = _this$getDerivedProps8.itemsToScroll;

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length || 1;
      var notEnoughItemsToShow = itemsToShow > childrenLength;
      var limit = getPrev ? 0 : childrenLength - itemsToShow;

      if (notEnoughItemsToShow) {
        limit = 0; // basically don't move
      }

      var nextAction = getPrev ? prevItemAction(0, itemsToScroll) : nextItemAction(limit, itemsToScroll);
      var nextItem = activeIndexReducer(currentIndex, nextAction);
      return nextItem;
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemObj", function (getPrev) {
      var _this$getDerivedProps9 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps9.children;

      var activeIndex = _this.state.activeIndex;

      var nextItemIndex = _this.getNextItemIndex(activeIndex, getPrev); // support decimal itemsToShow


      var roundedIdx = Math.round(nextItemIndex);
      var asElement = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children)[roundedIdx];
      var asObj = {
        item: asElement.props,
        index: roundedIdx
      };
      return asObj;
    });

    _defineProperty(_assertThisInitialized(_this), "resetSwipe", function () {
      _this.setState({
        swipedSliderPosition: 0,
        transitioning: false,
        isSwiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwiping", function (data) {
      var deltaX = data.deltaX,
          absX = data.absX,
          deltaY = data.deltaY,
          absY = data.absY,
          dir = data.dir;

      _this.setState(function (state) {
        var childHeight = state.childHeight,
            activeIndex = state.activeIndex,
            sliderPosition = state.sliderPosition;

        var _this$getDerivedProps10 = _this.getDerivedPropsFromBreakPoint(),
            itemsToShow = _this$getDerivedProps10.itemsToShow,
            verticalMode = _this$getDerivedProps10.verticalMode,
            children = _this$getDerivedProps10.children,
            isRTL = _this$getDerivedProps10.isRTL;

        var childWidth = _this.calculateChildWidth(); // determine how far can user swipe


        var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length || 1;
        var goingNext = !verticalMode && dir === "Left" && !isRTL || !verticalMode && dir === "Right" && isRTL || verticalMode && dir === "Up";
        var goingBack = !verticalMode && dir === "Right" && !isRTL || !verticalMode && dir === "Left" && isRTL || verticalMode && dir === "Down";
        var horizontalSwipe = dir === "Left" || dir === "Right";
        var verticalSwipe = dir === "Up" || dir === "Down";
        var horizontalMode = !verticalMode;
        var distanceSwipe = 0;
        var horizontalEdgeStoppage = childWidth / 2;
        var verticalEdgeStoppage = childHeight / 2;

        if (verticalMode) {
          if (verticalSwipe) {
            var trackSize = childrenLength * childHeight;

            if (goingNext) {
              distanceSwipe = trackSize - childHeight * activeIndex - itemsToShow * childHeight + verticalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childHeight * activeIndex + verticalEdgeStoppage;
            }
          }
        } else {
          if (horizontalSwipe) {
            var _trackSize = childrenLength * childWidth;

            if (goingNext) {
              distanceSwipe = _trackSize - childWidth * activeIndex - itemsToShow * childWidth + horizontalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childWidth * activeIndex + horizontalEdgeStoppage;
            }
          }
        }

        var shouldHorizontalSkipUpdate = horizontalMode && verticalSwipe || horizontalMode && horizontalSwipe && absX > distanceSwipe;
        var shouldVerticalSkipUpdate = verticalMode && horizontalSwipe || verticalMode && verticalSwipe && absY > distanceSwipe;

        if (shouldHorizontalSkipUpdate || shouldVerticalSkipUpdate) {
          // bail out of state update
          return;
        }

        var swipedSliderPosition;

        if (horizontalSwipe) {
          if (isRTL) {
            swipedSliderPosition = sliderPosition + deltaX;
          } else {
            swipedSliderPosition = sliderPosition - deltaX;
          }
        } else {
          swipedSliderPosition = sliderPosition - deltaY;
        }

        return {
          swipedSliderPosition: swipedSliderPosition,
          isSwiping: true,
          transitioning: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwiped", function (data) {
      // we need to handle all scenarios:
      // 1. Horizontal mode - swipe left or right
      // 2. Horizontal mode with RTL - swipe left or right
      // 3. vertical mode - swipe up or down
      var absX = data.absX,
          absY = data.absY,
          dir = data.dir;
      var _this$state = _this.state,
          childHeight = _this$state.childHeight,
          activeIndex = _this$state.activeIndex;

      var _this$getDerivedProps11 = _this.getDerivedPropsFromBreakPoint(),
          verticalMode = _this$getDerivedProps11.verticalMode,
          isRTL = _this$getDerivedProps11.isRTL,
          itemsToScroll = _this$getDerivedProps11.itemsToScroll;

      var childWidth = _this.calculateChildWidth();

      var func = _this.resetSwipe;
      var minSwipeDistanceHorizontal = childWidth / 5;
      var minSwipeDistanceVertical = childHeight / 5;
      var swipedLeft = dir === "Left";
      var swipedRight = dir === "Right";
      var swipedUp = dir === "Up";
      var swipedDown = dir === "Down";
      var verticalGoSwipe = verticalMode && (swipedUp || swipedDown) && absY > minSwipeDistanceVertical;
      var horizontalGoSwipe = !verticalMode && (swipedRight || swipedLeft) && absX > minSwipeDistanceHorizontal;
      var goodToGo = false;

      if (verticalGoSwipe || horizontalGoSwipe) {
        goodToGo = true;
      }

      if (goodToGo) {
        // we should go to a different item
        // determine what method we need to invoke
        if (verticalMode) {
          // get number of slides from user's swiping
          var numberOfSlidesViaSwipe = Math.ceil((absY - minSwipeDistanceVertical) / childHeight); // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll

          var numberOfSlidesTogo = Math.max(itemsToScroll, numberOfSlidesViaSwipe);
          var backSlidesToGo = activeIndex - numberOfSlidesTogo;
          var forwardSlideTtoGo = activeIndex + numberOfSlidesTogo; // up or down

          if (swipedDown) {
            // func = this.onPrevStart;
            func = function func() {
              return _this.goTo(backSlidesToGo);
            };
          }

          if (swipedUp) {
            // func = this.onNextStart;
            func = function func() {
              return _this.goTo(forwardSlideTtoGo);
            };
          }
        } else {
          // get number of slides from user's swiping
          var _numberOfSlidesViaSwipe = Math.ceil((absX - minSwipeDistanceHorizontal) / childWidth); // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll


          var _numberOfSlidesTogo = Math.max(itemsToScroll, _numberOfSlidesViaSwipe);

          var _backSlidesToGo = activeIndex - _numberOfSlidesTogo;

          var _forwardSlideTtoGo = activeIndex + _numberOfSlidesTogo; // horizontal mode


          if (isRTL) {
            // flip sides
            if (swipedLeft) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }

            if (swipedRight) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }
          } else {
            // normal behavior
            if (swipedLeft) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }

            if (swipedRight) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }
          }
        }
      } // we are not "tilting" on edges, so we need to reset isSwiping and transitioning.
      // otherwise we wont slide back to edge


      _this.setState({
        isSwiping: false,
        transitioning: false
      });

      func({
        skipTilt: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNextStart", function (options) {
      var _this$getDerivedProps12 = _this.getDerivedPropsFromBreakPoint(),
          onNextStart = _this$getDerivedProps12.onNextStart;

      var activeIndex = _this.state.activeIndex;

      var nextItemObj = _this.getNextItemObj();

      var prevItemObj = _this.convertChildToCbObj(activeIndex);

      onNextStart(prevItemObj, nextItemObj);

      _this.slideNext(options);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevStart", function (options) {
      var _this$getDerivedProps13 = _this.getDerivedPropsFromBreakPoint(),
          onPrevStart = _this$getDerivedProps13.onPrevStart;

      var activeIndex = _this.state.activeIndex;

      var nextItemObj = _this.getNextItemObj(true);

      var prevItemObj = _this.convertChildToCbObj(activeIndex);

      onPrevStart(prevItemObj, nextItemObj);

      _this.slidePrev(options);
    });

    _defineProperty(_assertThisInitialized(_this), "slideNext", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;

      var _this$getDerivedProps14 = _this.getDerivedPropsFromBreakPoint(),
          enableTilt = _this$getDerivedProps14.enableTilt;

      var _this$state2 = _this.state,
          activeIndex = _this$state2.activeIndex,
          sliderPosition = _this$state2.sliderPosition;

      var nextItem = _this.getNextItemIndex(activeIndex, false);

      if (activeIndex !== nextItem) {
        _this.goTo(nextItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(sliderPosition, 20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slidePrev", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;
      var activeIndex = _this.state.activeIndex;

      var _this$getDerivedProps15 = _this.getDerivedPropsFromBreakPoint(),
          enableTilt = _this$getDerivedProps15.enableTilt;

      var prevItem = _this.getNextItemIndex(activeIndex, true);

      if (activeIndex !== prevItem) {
        _this.goTo(prevItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(0, -20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextEnd", function () {
      var _this$getDerivedProps16 = _this.getDerivedPropsFromBreakPoint(),
          onNextEnd = _this$getDerivedProps16.onNextEnd,
          onChange = _this$getDerivedProps16.onChange;

      var _this$state3 = _this.state,
          activeIndex = _this$state3.activeIndex,
          activePage = _this$state3.activePage;

      var nextItemObj = _this.convertChildToCbObj(activeIndex);

      _this.removeSliderTransitionHook(_this.onNextEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onNextEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevEnd", function () {
      var _this$getDerivedProps17 = _this.getDerivedPropsFromBreakPoint(),
          onPrevEnd = _this$getDerivedProps17.onPrevEnd,
          onChange = _this$getDerivedProps17.onChange;

      var _this$state4 = _this.state,
          activeIndex = _this$state4.activeIndex,
          activePage = _this$state4.activePage;

      var nextItemObj = _this.convertChildToCbObj(activeIndex);

      _this.removeSliderTransitionHook(_this.onPrevEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onPrevEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "generatePositionUpdater", function (direction, nextItemId, verticalMode, rest) {
      return function (state) {
        var sliderPosition = state.sliderPosition,
            childHeight = state.childHeight,
            activeIndex = state.activeIndex;

        var childWidth = _this.calculateChildWidth();

        var newSliderPosition = 0;
        var childSize = verticalMode ? childHeight : childWidth;

        if (direction === consts.NEXT) {
          newSliderPosition = sliderPosition - childSize * (nextItemId - activeIndex);
        } else {
          newSliderPosition = sliderPosition + childSize * (activeIndex - nextItemId);
        }

        return _objectSpread2({
          sliderPosition: newSliderPosition,
          activeIndex: nextItemId,
          swipedSliderPosition: 0,
          isSwiping: false
        }, rest);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "goTo", function (nextItemId) {
      var _this$getDerivedProps18 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps18.children,
          verticalMode = _this$getDerivedProps18.verticalMode,
          itemsToShow = _this$getDerivedProps18.itemsToShow;

      var activeIndex = _this.state.activeIndex;
      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;
      var safeNextItemId = Math.max(0, nextItemId); // don't allow negative numbers

      var isPrev = activeIndex > safeNextItemId;

      var nextAvailableItem = _this.getNextItemIndex(activeIndex, isPrev);

      var noChange = nextAvailableItem === activeIndex;
      var outOfBoundary = safeNextItemId + itemsToShow >= childrenLength;

      if (noChange) {
        return;
      }

      if (outOfBoundary) {
        // Either go to last index (respect itemsToShow) or 0 index if we can't fill the slider
        safeNextItemId = Math.max(0, childrenLength - itemsToShow);
      }

      var direction = consts.NEXT;
      var positionEndCb = _this.onNextEnd;

      if (isPrev) {
        direction = consts.PREV;
        positionEndCb = _this.onPrevEnd;
      }

      var stateUpdater = _this.generatePositionUpdater(direction, safeNextItemId, verticalMode, {
        transitioning: true
      });

      _this.setState(stateUpdater, function () {
        // callback
        pipe(_this.updateActivePage(), _this.onSliderTransitionEnd(positionEndCb));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNumOfPages", function () {
      var _this$getDerivedProps19 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps19.children,
          itemsToShow = _this$getDerivedProps19.itemsToShow;

      var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;
      var safeItemsToShow = Math.max(itemsToShow, 1);
      var numOfPages = Math.ceil(childrenLength / safeItemsToShow);
      return numOfPages || 1;
    });

    _defineProperty(_assertThisInitialized(_this), "updateActivePage", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps20 = _this.getDerivedPropsFromBreakPoint(),
            itemsToShow = _this$getDerivedProps20.itemsToShow,
            children = _this$getDerivedProps20.children;

        var activeIndex = state.activeIndex,
            activePage = state.activePage;

        var numOfPages = _this.getNumOfPages();

        var childrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;
        var inRangeItemsToShow = Math.min(childrenLength, itemsToShow); // watch out from 0 (so we wont divide by zero)

        var safeItemsToShow = Math.max(inRangeItemsToShow, 1);
        var newActivePage = Math.ceil(activeIndex / safeItemsToShow);
        var inRangeActivePageIndex = Math.min(numOfPages - 1, newActivePage);

        if (activePage !== inRangeActivePageIndex) {
          return {
            activePage: inRangeActivePageIndex
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorClick", function (indicatorId) {
      var _this$getDerivedProps21 = _this.getDerivedPropsFromBreakPoint(),
          itemsToShow = _this$getDerivedProps21.itemsToShow;

      var gotoIndex = indicatorId * itemsToShow;

      _this.setState({
        activePage: indicatorId
      });

      _this.goTo(gotoIndex);
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isComponentMounted = true;
      this.initResizeObserver();
      this.updateActivePage();
      this.setPages();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          enableAutoPlay = _this$props2.enableAutoPlay,
          children = _this$props2.children,
          itemsToShow = _this$props2.itemsToShow,
          itemsToScroll = _this$props2.itemsToScroll,
          breakPoints = _this$props2.breakPoints;
      var _this$state5 = this.state,
          activeIndex = _this$state5.activeIndex,
          sliderContainerWidth = _this$state5.sliderContainerWidth;
      var nextItem = this.getNextItemIndex(activeIndex, false);
      var currentChildrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;
      var prevChildrenLength = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(prevProps.children).length; // update pages (for pagination)

      if (prevChildrenLength !== currentChildrenLength || prevProps.itemsToShow !== itemsToShow || prevProps.itemsToScroll !== itemsToScroll || prevProps.breakPoints !== breakPoints || sliderContainerWidth !== prevState.sliderContainerWidth) {
        // we mimic a container resize to recalculate item width when itemsToShow are updated
        this.onContainerResize({
          contentRect: {
            width: sliderContainerWidth
          }
        });
        this.setPages();
        this.updateActivePage();
      } // autoplay update


      if (activeIndex === nextItem) {
        this.removeAutoPlay();
      } else if (enableAutoPlay && !this.autoPlayIntervalId) {
        this.setAutoPlay();
      } else if (!enableAutoPlay && this.autoPlayIntervalId) {
        this.removeAutoPlay();
      }

      if (prevChildrenLength !== currentChildrenLength) {
        var _this$getDerivedProps22 = this.getDerivedPropsFromBreakPoint(),
            calculatedItemsToShow = _this$getDerivedProps22.itemsToShow; // number of items is reduced (we don't care if number of items is increased)
        // we need to check if our current index is not out of boundaries
        // we need to include itemsToShow so we can fill up the slots


        var lastIndex = currentChildrenLength - 1;
        var isOutOfRange = activeIndex + calculatedItemsToShow > lastIndex;

        if (isOutOfRange) {
          // we are out of boundaries, go "back" to last item of the list (respect itemsToShow)
          this.goTo(Math.max(0, currentChildrenLength - calculatedItemsToShow));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isComponentMounted = false;
      this.removeAutoPlay();
      this.unSubscribeObserver();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          activePage = _this$state6.activePage,
          isSwiping = _this$state6.isSwiping,
          sliderPosition = _this$state6.sliderPosition,
          swipedSliderPosition = _this$state6.swipedSliderPosition,
          rootHeight = _this$state6.rootHeight,
          pages = _this$state6.pages,
          activeIndex = _this$state6.activeIndex,
          transitionMs = _this$state6.transitionMs;

      var _this$getDerivedProps23 = this.getDerivedPropsFromBreakPoint(),
          className = _this$getDerivedProps23.className,
          style = _this$getDerivedProps23.style,
          itemsToShow = _this$getDerivedProps23.itemsToShow,
          itemsToScroll = _this$getDerivedProps23.itemsToScroll,
          verticalMode = _this$getDerivedProps23.verticalMode,
          isRTL = _this$getDerivedProps23.isRTL,
          easing = _this$getDerivedProps23.easing,
          tiltEasing = _this$getDerivedProps23.tiltEasing,
          children = _this$getDerivedProps23.children,
          focusOnSelect = _this$getDerivedProps23.focusOnSelect,
          autoTabIndexVisibleItems = _this$getDerivedProps23.autoTabIndexVisibleItems,
          itemPosition = _this$getDerivedProps23.itemPosition,
          itemPadding = _this$getDerivedProps23.itemPadding,
          outerSpacing = _this$getDerivedProps23.outerSpacing,
          enableSwipe = _this$getDerivedProps23.enableSwipe,
          enableMouseSwipe = _this$getDerivedProps23.enableMouseSwipe,
          pagination = _this$getDerivedProps23.pagination,
          showArrows = _this$getDerivedProps23.showArrows,
          disableArrowsOnEnd = _this$getDerivedProps23.disableArrowsOnEnd,
          preventDefaultTouchmoveEvent = _this$getDerivedProps23.preventDefaultTouchmoveEvent,
          renderArrow = _this$getDerivedProps23.renderArrow,
          renderPagination = _this$getDerivedProps23.renderPagination;

      var childWidth = this.calculateChildWidth();
      var numOfPages = this.getNumOfPages();
      /** Determine if arrows should be disabled */

      var canSlidePrev = activeIndex !== this.getNextItemIndex(activeIndex, true);
      var canSlideNext = activeIndex !== this.getNextItemIndex(activeIndex, false);
      var disabledPrevArrow = !canSlidePrev && disableArrowsOnEnd;
      var disabledNextArrow = !canSlideNext && disableArrowsOnEnd;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CarouselWrapper, {
        isRTL: isRTL,
        className: "".concat(cssPrefix("carousel-wrapper"), " ").concat(className),
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCarousel, {
        className: cssPrefix("carousel"),
        size: {
          height: rootHeight
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_only_when__WEBPACK_IMPORTED_MODULE_4__["default"], {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.PREV,
        onClick: this.onPrevStart,
        isEdge: !canSlidePrev
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Arrow, {
        onClick: this.onPrevStart,
        direction: verticalMode ? Arrow.up : Arrow.left,
        disabled: disabledPrevArrow
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SliderContainer, {
        className: cssPrefix("slider-container"),
        ref: this.setRef("sliderContainer")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Slider, {
        verticalMode: verticalMode,
        isRTL: isRTL,
        easing: easing,
        sliderPosition: sliderPosition,
        swipedSliderPosition: swipedSliderPosition,
        isSwiping: isSwiping,
        transitionMs: transitionMs,
        tiltEasing: tiltEasing,
        className: cssPrefix("slider"),
        ref: this.setRef("slider"),
        outerSpacing: outerSpacing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Track, {
        verticalMode: verticalMode,
        children: react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),
        childWidth: childWidth,
        currentItem: activeIndex,
        autoTabIndexVisibleItems: autoTabIndexVisibleItems,
        itemsToShow: itemsToShow,
        itemsToScroll: itemsToScroll,
        itemPosition: itemPosition,
        itemPadding: itemPadding,
        enableSwipe: enableSwipe,
        enableMouseSwipe: enableMouseSwipe,
        preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
        onSwiped: this.onSwiped,
        onSwiping: this.onSwiping,
        onItemClick: focusOnSelect ? this.goTo : undefined
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_only_when__WEBPACK_IMPORTED_MODULE_4__["default"], {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.NEXT,
        onClick: this.onNextStart,
        isEdge: !canSlideNext
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Arrow, {
        onClick: this.onNextStart,
        direction: verticalMode ? Arrow.down : Arrow.right,
        disabled: disabledNextArrow
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_only_when__WEBPACK_IMPORTED_MODULE_4__["default"], {
        when: pagination
      }, renderPagination ? renderPagination({
        pages: pages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pagination, {
        numOfPages: numOfPages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      })));
    }
  }]);

  return Carousel;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Carousel.defaultProps = {
  className: "",
  style: {},
  verticalMode: false,
  isRTL: false,
  initialFirstItem: 0,
  initialActiveIndex: 0,
  showArrows: true,
  showEmptySlots: false,
  disableArrowsOnEnd: true,
  pagination: true,
  easing: "ease",
  tiltEasing: "ease",
  transitionMs: 500,
  enableTilt: true,
  enableSwipe: true,
  enableMouseSwipe: true,
  preventDefaultTouchmoveEvent: false,
  focusOnSelect: false,
  autoTabIndexVisibleItems: true,
  itemsToShow: 1,
  itemsToScroll: 1,
  itemPosition: consts.CENTER,
  itemPadding: [0, 0, 0, 0],
  outerSpacing: 0,
  enableAutoPlay: false,
  autoPlaySpeed: 2000,
  // callbacks
  onChange: noop,
  onNextEnd: noop,
  onPrevEnd: noop,
  onNextStart: noop,
  onPrevStart: noop,
  onResize: noop
};
Carousel.propTypes = {
  /** Items to render */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),

  /** The css class for the root element */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** The style object for the root element */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),

  /** Display the Carousel in a vertical layout */
  verticalMode: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Flip right to left */
  isRTL: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Show dots for paging */
  pagination: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Animation speed */
  transitionMs: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),

  /** transition easing pattern */
  easing: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** transition easing pattern for the tilt */
  tiltEasing: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** The "bump" animation when reaching the last item */
  enableTilt: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Number of visible items  */
  itemsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),

  /** Number of items to scroll */
  itemsToScroll: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),

  /** Collection of objects with a width, itemsToShow and itemsToScroll  */
  breakPoints: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    width: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
    itemsToShow: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
    itemsToScroll: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)
  })),

  /** The initial active index when the component mounts */
  initialActiveIndex: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),

  /** **DEPRECATED - use initialActiveIndex instead** The first items when the component mounts */
  initialFirstItem: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),

  /** Show the arrow buttons */
  showArrows: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Show empty slots when children.length < itemsToShow (not compatible with verticalMode yet !) */
  showEmptySlots: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Disables the arrow button when there are no more items */
  disableArrowsOnEnd: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Go to item on click */
  focusOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Automatically inject `tabIndex:0` to visible items */
  autoTabIndexVisibleItems: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** A render prop for the arrow component
   * - ({type, onClick}) => <div onClick={onClick}>{type === 'prev' ? '<-' : '->'}</div>
   */
  renderArrow: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** A render prop for the pagination component
   * - ({ pages, activePage, onClick }) =>  <YourComponent/>
   */
  renderPagination: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** Position the element relative to it's wrapper (use the consts object) - consts.START | consts.CENTER | consts.END */
  itemPosition: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf([consts.START, consts.CENTER, consts.END]),

  /** A padding for each element  */
  itemPadding: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),

  /** A margin at the beginning and at the end of the carousel (not compatible with verticalMode yet !) */
  outerSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  // swipe

  /** Enable or disable swipe */
  enableSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Enable or disable mouse swipe */
  enableMouseSwipe: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Prevent page scroll on touchmove.
   * Use this to stop the browser from scrolling while a user swipes.
   * More details: https://github.com/FormidableLabs/react-swipeable#preventdefaulttouchmoveevent-details
   */
  preventDefaultTouchmoveEvent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  // auto play

  /** Enable or disable auto play */
  enableAutoPlay: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /** Set auto play speed (ms) */
  autoPlaySpeed: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  // callbacks

  /** A callback for the change of an item
   * - onChange(currentItemObject, currentPageIndex) => {} */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** A callback for the beginning of the next transition
   * - onNextStart(prevItemObject, nextItemObject) => {} */
  onNextStart: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** A callback for the beginning of the prev transition
   * - onPrevStart(prevItemObject, nextItemObject) => {} */
  onPrevStart: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** A callback for the end of the next transition
   * - onNextEnd(nextItemObject, currentPageIndex) => {} */
  onNextEnd: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** A callback for the end of the prev transition
   * - onPrevEnd(nextItemObject, currentPageIndex) => {} */
  onPrevEnd: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /** A callback for the "slider-container" resize
   * - onResize(currentBreakPoint) => {} */
  onResize: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-elastic-carousel/node_modules/react-only-when/dist/index.es.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/node_modules/react-only-when/dist/index.es.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Only = function (_Component) {
  inherits(Only, _Component);

  function Only() {
    classCallCheck(this, Only);
    return possibleConstructorReturn(this, (Only.__proto__ || Object.getPrototypeOf(Only)).apply(this, arguments));
  }

  createClass(Only, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          when = _props.when,
          hiddenMode = _props.hiddenMode,
          className = _props.className;

      var singleChild = react__WEBPACK_IMPORTED_MODULE_0___default().Children.only(children);
      var _singleChild$props = singleChild.props,
          style = _singleChild$props.style,
          restOfChildProps = objectWithoutProperties(_singleChild$props, ['style']);

      var extendedProps = _extends({}, restOfChildProps);

      var keepNode = hiddenMode && hiddenMode !== "withNull";

      if (keepNode) {
        if (hiddenMode === "withCss") {
          extendedProps.className = extendedProps.className + ' ' + className;
        } else {
          extendedProps.style = _extends({}, style, hiddenMode === "withDisplay" && { display: "none" }, hiddenMode === "withVisibility" && { visibility: "hidden" });
        }
      }
      var cloned = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(singleChild, extendedProps);
      var toHide = keepNode ? cloned : null;

      return when ? singleChild : toHide;
    }
  }]);
  return Only;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Only.defaultProps = {
  hiddenMode: "withNull",
  className: "r-o_hidden"
};
Only.propTypes = {
  /** A single child element */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired),

  /** When true, children will rendered as is  */
  when: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),

  /** Determines how "react-only-when" should hide the child element 
   * "withNull": Will not render the child
   * "withDisplay": Will render the child with display:none  
   * "withVisibility": Will render the child with visibility:hidden
   * "withCss": Will render the child with a CSS class (you can pass it a custom className prop)
  */
  hiddenMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["withNull", "withDisplay", "withVisibility", "withCss"]),
  /** This is working in combination with hiddenMode={"withCss"}   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Only);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-elastic-carousel/node_modules/react-swipeable/es/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-elastic-carousel/node_modules/react-swipeable/es/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOWN": () => (/* binding */ DOWN),
/* harmony export */   "LEFT": () => (/* binding */ LEFT),
/* harmony export */   "RIGHT": () => (/* binding */ RIGHT),
/* harmony export */   "Swipeable": () => (/* binding */ Swipeable),
/* harmony export */   "UP": () => (/* binding */ UP),
/* harmony export */   "useSwipeable": () => (/* binding */ useSwipeable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaultProps = {
  preventDefaultTouchmoveEvent: false,
  delta: 10,
  rotationAngle: 0,
  trackMouse: false,
  trackTouch: true
};
var initialState = {
  xy: [0, 0],
  swiping: false,
  eventData: undefined,
  start: undefined
};
var LEFT = 'Left';
var RIGHT = 'Right';
var UP = 'Up';
var DOWN = 'Down';
var touchStart = 'touchstart';
var touchMove = 'touchmove';
var touchEnd = 'touchend';
var mouseMove = 'mousemove';
var mouseUp = 'mouseup';

function getDirection(absX, absY, deltaX, deltaY) {
  if (absX > absY) {
    if (deltaX > 0) {
      return LEFT;
    }

    return RIGHT;
  } else if (deltaY > 0) {
    return UP;
  }

  return DOWN;
}

function rotateXYByAngle(pos, angle) {
  if (angle === 0) return pos;
  var angleInRadians = Math.PI / 180 * angle;
  var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
  var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
  return [x, y];
}

function getHandlers(set, handlerProps) {
  var onStart = function onStart(event) {
    // if more than a single touch don't track, for now...
    if (event.touches && event.touches.length > 1) return;
    set(function (state, props) {
      // setup mouse listeners on document to track swipe since swipe can leave container
      if (props.trackMouse) {
        document.addEventListener(mouseMove, onMove);
        document.addEventListener(mouseUp, onUp);
      }

      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
      return _extends({}, state, initialState, {
        eventData: {
          initial: [].concat(xy),
          first: true
        },
        xy: xy,
        start: event.timeStamp || 0
      });
    });
  };

  var onMove = function onMove(event) {
    set(function (state, props) {
      if (!state.xy[0] || !state.xy[1] || event.touches && event.touches.length > 1) {
        return state;
      }

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], props.rotationAngle),
          x = _rotateXYByAngle[0],
          y = _rotateXYByAngle[1];

      var deltaX = state.xy[0] - x;
      var deltaY = state.xy[1] - y;
      var absX = Math.abs(deltaX);
      var absY = Math.abs(deltaY);
      var time = (event.timeStamp || 0) - state.start;
      var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1); // if swipe is under delta and we have not started to track a swipe: skip update

      if (absX < props.delta && absY < props.delta && !state.swiping) return state;
      var dir = getDirection(absX, absY, deltaX, deltaY);

      var eventData = _extends({}, state.eventData, {
        event: event,
        absX: absX,
        absY: absY,
        deltaX: deltaX,
        deltaY: deltaY,
        velocity: velocity,
        dir: dir
      });

      props.onSwiping && props.onSwiping(eventData); // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
      // so we can call preventDefault if needed

      var cancelablePageSwipe = false;

      if (props.onSwiping || props.onSwiped || props["onSwiped" + dir]) {
        cancelablePageSwipe = true;
      }

      if (cancelablePageSwipe && props.preventDefaultTouchmoveEvent && props.trackTouch && event.cancelable) event.preventDefault(); // first is now always false

      return _extends({}, state, {
        eventData: _extends({}, eventData, {
          first: false
        }),
        swiping: true
      });
    });
  };

  var onEnd = function onEnd(event) {
    set(function (state, props) {
      var eventData;

      if (state.swiping) {
        eventData = _extends({}, state.eventData, {
          event: event
        });
        props.onSwiped && props.onSwiped(eventData);
        props["onSwiped" + eventData.dir] && props["onSwiped" + eventData.dir](eventData);
      }

      return _extends({}, state, initialState, {
        eventData: eventData
      });
    });
  };

  var cleanUpMouse = function cleanUpMouse() {
    // safe to just call removeEventListener
    document.removeEventListener(mouseMove, onMove);
    document.removeEventListener(mouseUp, onUp);
  };

  var onUp = function onUp(e) {
    cleanUpMouse();
    onEnd(e);
  };

  var attachTouch = function attachTouch(el) {
    if (el && el.addEventListener) {
      // attach touch event listeners and handlers
      var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
      tls.forEach(function (_ref3) {
        var e = _ref3[0],
            h = _ref3[1];
        return el.addEventListener(e, h);
      }); // return properly scoped cleanup method for removing listeners

      return function () {
        return tls.forEach(function (_ref4) {
          var e = _ref4[0],
              h = _ref4[1];
          return el.removeEventListener(e, h);
        });
      };
    }
  };

  var onRef = function onRef(el) {
    // "inline" ref functions are called twice on render, once with null then again with DOM element
    // ignore null here
    if (el === null) return;
    set(function (state, props) {
      // if the same DOM el as previous just return state
      if (state.el === el) return state;
      var addState = {}; // if new DOM el clean up old DOM and reset cleanUpTouch

      if (state.el && state.el !== el && state.cleanUpTouch) {
        state.cleanUpTouch();
        addState.cleanUpTouch = null;
      } // only attach if we want to track touch


      if (props.trackTouch && el) {
        addState.cleanUpTouch = attachTouch(el);
      } // store event attached DOM el for comparison, clean up, and re-attachment


      return _extends({}, state, {
        el: el
      }, addState);
    });
  }; // set ref callback to attach touch event listeners


  var output = {
    ref: onRef // if track mouse attach mouse down listener

  };

  if (handlerProps.trackMouse) {
    output.onMouseDown = onStart;
  }

  return [output, attachTouch];
}

function updateTransientState(state, props, attachTouch) {
  var addState = {}; // clean up touch handlers if no longer tracking touches

  if (!props.trackTouch && state.cleanUpTouch) {
    state.cleanUpTouch();
    addState.cleanUpTouch = null;
  } else if (props.trackTouch && !state.cleanUpTouch) {
    // attach/re-attach touch handlers
    if (state.el) {
      addState.cleanUpTouch = attachTouch(state.el);
    }
  }

  return _extends({}, state, addState);
}

function useSwipeable(props) {
  var trackMouse = props.trackMouse;
  var transientState = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(_extends({}, initialState, {
    type: 'hook'
  }));
  var transientProps = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  transientProps.current = _extends({}, defaultProps, props);

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return getHandlers(function (cb) {
      return transientState.current = cb(transientState.current, transientProps.current);
    }, {
      trackMouse: trackMouse
    });
  }, [trackMouse]),
      handlers = _React$useMemo[0],
      attachTouch = _React$useMemo[1];

  transientState.current = updateTransientState(transientState.current, transientProps.current, attachTouch);
  return handlers;
}
var Swipeable =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Swipeable, _React$PureComponent);

  function Swipeable(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this._set = function (cb) {
      _this.transientState = cb(_this.transientState, _this.props);
    };

    _this.transientState = _extends({}, initialState, {
      type: 'class'
    });
    return _this;
  }

  var _proto = Swipeable.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        _this$props$nodeName = _this$props.nodeName,
        nodeName = _this$props$nodeName === void 0 ? 'div' : _this$props$nodeName,
        innerRef = _this$props.innerRef,
        children = _this$props.children,
        trackMouse = _this$props.trackMouse;

    var _getHandlers = getHandlers(this._set, {
      trackMouse: trackMouse
    }),
        handlers = _getHandlers[0],
        attachTouch = _getHandlers[1];

    this.transientState = updateTransientState(this.transientState, this.props, attachTouch);
    var ref = innerRef ? function (el) {
      return innerRef(el), handlers.ref(el);
    } : handlers.ref;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(nodeName, _extends({}, handlers, {
      className: className,
      style: style,
      ref: ref
    }), children);
  };

  return Swipeable;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));
Swipeable.propTypes = {
  onSwiped: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwiping: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedUp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedRight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedDown: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onSwipedLeft: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  delta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  preventDefaultTouchmoveEvent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  nodeName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  trackMouse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  trackTouch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  innerRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  rotationAngle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
Swipeable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Je),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ ue),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ce),
/* harmony export */   "StyleSheetManager": () => (/* binding */ me),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Ge),
/* harmony export */   "ThemeContext": () => (/* binding */ Me),
/* harmony export */   "ThemeProvider": () => (/* binding */ Le),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ke),
/* harmony export */   "createGlobalStyle": () => (/* binding */ $e),
/* harmony export */   "css": () => (/* binding */ Ae),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isStyledComponent": () => (/* binding */ _),
/* harmony export */   "keyframes": () => (/* binding */ We),
/* harmony export */   "useTheme": () => (/* binding */ Ze),
/* harmony export */   "version": () => (/* binding */ A),
/* harmony export */   "withTheme": () => (/* binding */ Xe)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&(({}).REACT_APP_SC_ATTR||({}).SC_ATTR)||"data-styled",A="5.3.6",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({}).REACT_APP_SC_DISABLE_SPEEDY&&""!==({}).REACT_APP_SC_DISABLE_SPEEDY?"false"!==({}).REACT_APP_SC_DISABLE_SPEEDY&&({}).REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({}).SC_DISABLE_SPEEDY&&""!==({}).SC_DISABLE_SPEEDY?"false"!==({}).SC_DISABLE_SPEEDY&&({}).SC_DISABLE_SPEEDY:"production"!=="development"),P={},O= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return true&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},z=function(e){return x.get(e)},B=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e)},M="style["+N+'][data-styled-version="5.3.6"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},Y=function(){return true?__webpack_require__.nc:0},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.6");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return!1}return!0}var re=te("5.3.6"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),ue=ce.Consumer,le=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),de=(le.Consumer,new X),he=ae();function pe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ce)||de}function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(le)||he}function me(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=pe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ce.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(le.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return"";if(_(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}finally{console.error=r}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];ke(t)&&ke(r)?Be(r,t):e[n]=t}function Be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&ze(e,i[a],a)}return e}var Me=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Ge=Me.Consumer;function Le(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:D(7)}return Array.isArray(e)||"object"!=typeof e?D(8):t?y({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Me.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.6"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,v=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var m=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),a)||w,t,o),v=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,v, true?e.warnTooManyClasses:0),b=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?y({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=y({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=b,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=v,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=N,C.componentStyle=I,C.displayName=v,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:N,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Be({},e.defaultProps,t):t}}), true&&(Pe(v,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(v,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),X.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(_e(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&X.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function l(e){var t=pe(),n=fe(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&d(u,e,t,o,n),null}function d(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var s=y({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ye(s,o)}var Ue=/^\s*<\/[a-z]/i,Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Y();return"<style "+[n&&'nonce="'+n+'"',N+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[N]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",y({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new X({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){if(C)return D(3);if(this.sealed)return D(2);this.seal();var t=__webpack_require__(/*! stream */ "stream"),n=(t.Readable,t.Transform),r=e,o=this.instance,s=this._emitSheetCSS,i=new n({transform:function(e,t,n){var r=e.toString(),i=s();if(o.clearTag(),Ue.test(r)){var a=r.indexOf(">")+1,c=r.slice(0,a),u=r.slice(a);this.push(c+i+u)}else this.push(i+r);n()}});return r.on("error",(function(e){i.emit("error",e)})),r.pipe(i)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+b(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,y({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+b(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Me)},Ke={StyleSheet:X,masterSheet:de}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);
//# sourceMappingURL=styled-components.esm.js.map


/***/ }),

/***/ "./src/assets/image/Bootstrap.png":
/*!****************************************!*\
  !*** ./src/assets/image/Bootstrap.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/Bootstrap-5f7e2134612e0ff9eb26b86df6a97ac4.png");

/***/ }),

/***/ "./src/assets/image/React.png":
/*!************************************!*\
  !*** ./src/assets/image/React.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/React-6bcffb56bd0efaa4776702f7c0aa6a18.png");

/***/ }),

/***/ "./src/assets/image/css.png":
/*!**********************************!*\
  !*** ./src/assets/image/css.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/css-201b4d68795cf813c1fdfed99cb152c7.png");

/***/ }),

/***/ "./src/assets/image/html.png":
/*!***********************************!*\
  !*** ./src/assets/image/html.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/html-b757b1105a63ab582275d4a5dd0a48ea.png");

/***/ }),

/***/ "./src/assets/image/img_five.jpg":
/*!***************************************!*\
  !*** ./src/assets/image/img_five.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img_five-550aea83c92e58f1af201045ad596874.jpg");

/***/ }),

/***/ "./src/assets/image/img_four.jpg":
/*!***************************************!*\
  !*** ./src/assets/image/img_four.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img_four-23c72ce75702598f09b4d9500d7cec05.jpg");

/***/ }),

/***/ "./src/assets/image/img_one.jpg":
/*!**************************************!*\
  !*** ./src/assets/image/img_one.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img_one-e729f4ebe6a126a93ebf3083ad350dea.jpg");

/***/ }),

/***/ "./src/assets/image/img_six.jpg":
/*!**************************************!*\
  !*** ./src/assets/image/img_six.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img_six-e7de7cfe54b4b33675b91acf430c5e00.jpg");

/***/ }),

/***/ "./src/assets/image/img_three.jpg":
/*!****************************************!*\
  !*** ./src/assets/image/img_three.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img_three-7f5552f3dcd2d08b76de95eeb30ed301.jpg");

/***/ }),

/***/ "./src/assets/image/img_two.jpg":
/*!**************************************!*\
  !*** ./src/assets/image/img_two.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/img_two-44dc40b91fbb958b6edaa5e5f691fbce.jpg");

/***/ }),

/***/ "./src/assets/image/js.png":
/*!*********************************!*\
  !*** ./src/assets/image/js.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/image/materiallibrary.png":
/*!**********************************************!*\
  !*** ./src/assets/image/materiallibrary.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/materiallibrary-94127bcb1f7c05af0aafd16d17892255.png");

/***/ }),

/***/ "./src/assets/image/profile.jpeg":
/*!***************************************!*\
  !*** ./src/assets/image/profile.jpeg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/profile-ee259333f34b0c72187b2f946514e807.jpeg");

/***/ }),

/***/ "./src/assets/image/trybusinessagility.png":
/*!*************************************************!*\
  !*** ./src/assets/image/trybusinessagility.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/trybusinessagility-1f115ef8e89d23e290c7d97fa06a6d4d.png");

/***/ }),

/***/ "./src/assets/image/tryscrum.png":
/*!***************************************!*\
  !*** ./src/assets/image/tryscrum.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/tryscrum-fb3a5be313471243dff555ecba563982.png");

/***/ }),

/***/ "./src/assets/image/vervebot.png":
/*!***************************************!*\
  !*** ./src/assets/image/vervebot.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/vervebot-8bffe93fbca3179b24b1b41c75d2e43d.png");

/***/ }),

/***/ "./src/assets/images/web-logo.png":
/*!****************************************!*\
  !*** ./src/assets/images/web-logo.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map