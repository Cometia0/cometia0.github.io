(function (scope) {
  "use strict";

  function F(arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  }

  function F2(fun) {
    return F(2, fun, function (a) {
      return function (b) {
        return fun(a, b);
      };
    });
  }
  function F3(fun) {
    return F(3, fun, function (a) {
      return function (b) {
        return function (c) {
          return fun(a, b, c);
        };
      };
    });
  }
  function F4(fun) {
    return F(4, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return fun(a, b, c, d);
          };
        };
      };
    });
  }
  function F5(fun) {
    return F(5, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return fun(a, b, c, d, e);
            };
          };
        };
      };
    });
  }
  function F6(fun) {
    return F(6, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return fun(a, b, c, d, e, f);
              };
            };
          };
        };
      };
    });
  }
  function F7(fun) {
    return F(7, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return fun(a, b, c, d, e, f, g);
                };
              };
            };
          };
        };
      };
    });
  }
  function F8(fun) {
    return F(8, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return function (h) {
                    return fun(a, b, c, d, e, f, g, h);
                  };
                };
              };
            };
          };
        };
      };
    });
  }
  function F9(fun) {
    return F(9, fun, function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return function (h) {
                    return function (i) {
                      return fun(a, b, c, d, e, f, g, h, i);
                    };
                  };
                };
              };
            };
          };
        };
      };
    });
  }

  function A2(fun, a, b) {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  }
  function A3(fun, a, b, c) {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  }
  function A4(fun, a, b, c, d) {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  }
  function A5(fun, a, b, c, d, e) {
    return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
  }
  function A6(fun, a, b, c, d, e, f) {
    return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
  }
  function A7(fun, a, b, c, d, e, f, g) {
    return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
  }
  function A8(fun, a, b, c, d, e, f, g, h) {
    return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
  }
  function A9(fun, a, b, c, d, e, f, g, h, i) {
    return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
  }

  console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");

  var _JsArray_empty = [];

  function _JsArray_singleton(value) {
    return [value];
  }

  function _JsArray_length(array) {
    return array.length;
  }

  var _JsArray_initialize = F3(function (size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  });

  var _JsArray_initializeFromList = F2(function (max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
  });

  var _JsArray_unsafeGet = F2(function (index, array) {
    return array[index];
  });

  var _JsArray_unsafeSet = F3(function (index, value, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = array[i];
    }

    result[index] = value;
    return result;
  });

  var _JsArray_push = F2(function (value, array) {
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++) {
      result[i] = array[i];
    }

    result[length] = value;
    return result;
  });

  var _JsArray_foldl = F3(function (func, acc, array) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
      acc = A2(func, array[i], acc);
    }

    return acc;
  });

  var _JsArray_foldr = F3(function (func, acc, array) {
    for (var i = array.length - 1; i >= 0; i--) {
      acc = A2(func, array[i], acc);
    }

    return acc;
  });

  var _JsArray_map = F2(function (func, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = func(array[i]);
    }

    return result;
  });

  var _JsArray_indexedMap = F3(function (func, offset, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = A2(func, offset + i, array[i]);
    }

    return result;
  });

  var _JsArray_slice = F3(function (from, to, array) {
    return array.slice(from, to);
  });

  var _JsArray_appendN = F3(function (n, dest, source) {
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length) {
      itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++) {
      result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++) {
      result[i + destLen] = source[i];
    }

    return result;
  });

  // LOG

  var _Debug_log_UNUSED = F2(function (tag, value) {
    return value;
  });

  var _Debug_log = F2(function (tag, value) {
    console.log(tag + ": " + _Debug_toString(value));
    return value;
  });

  // TODOS

  function _Debug_todo(moduleName, region) {
    return function (message) {
      _Debug_crash(8, moduleName, region, message);
    };
  }

  function _Debug_todoCase(moduleName, region, value) {
    return function (message) {
      _Debug_crash(9, moduleName, region, value, message);
    };
  }

  // TO STRING

  function _Debug_toString_UNUSED(value) {
    return "<internals>";
  }

  function _Debug_toString(value) {
    return _Debug_toAnsiString(false, value);
  }

  function _Debug_toAnsiString(ansi, value) {
    if (typeof value === "function") {
      return _Debug_internalColor(ansi, "<function>");
    }

    if (typeof value === "boolean") {
      return _Debug_ctorColor(ansi, value ? "True" : "False");
    }

    if (typeof value === "number") {
      return _Debug_numberColor(ansi, value + "");
    }

    if (value instanceof String) {
      return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
    }

    if (typeof value === "string") {
      return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
    }

    if (typeof value === "object" && "$" in value) {
      var tag = value.$;

      if (typeof tag === "number") {
        return _Debug_internalColor(ansi, "<internals>");
      }

      if (tag[0] === "#") {
        var output = [];
        for (var k in value) {
          if (k === "$") continue;
          output.push(_Debug_toAnsiString(ansi, value[k]));
        }
        return "(" + output.join(",") + ")";
      }

      if (tag === "Set_elm_builtin") {
        return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
      }

      if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
        return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
      }

      if (tag === "Array_elm_builtin") {
        return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
      }

      if (tag === "::" || tag === "[]") {
        var output = "[";

        value.b && ((output += _Debug_toAnsiString(ansi, value.a)), (value = value.b));

        for (
          ;
          value.b;
          value = value.b // WHILE_CONS
        ) {
          output += "," + _Debug_toAnsiString(ansi, value.a);
        }
        return output + "]";
      }

      var output = "";
      for (var i in value) {
        if (i === "$") continue;
        var str = _Debug_toAnsiString(ansi, value[i]);
        var c0 = str[0];
        var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
        output += " " + (parenless ? str : "(" + str + ")");
      }
      return _Debug_ctorColor(ansi, tag) + output;
    }

    if (typeof DataView === "function" && value instanceof DataView) {
      return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
    }

    if (typeof File !== "undefined" && value instanceof File) {
      return _Debug_internalColor(ansi, "<" + value.name + ">");
    }

    if (typeof value === "object") {
      var output = [];
      for (var key in value) {
        var field = key[0] === "_" ? key.slice(1) : key;
        output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
      }
      if (output.length === 0) {
        return "{}";
      }
      return "{ " + output.join(", ") + " }";
    }

    return _Debug_internalColor(ansi, "<internals>");
  }

  function _Debug_addSlashes(str, isChar) {
    var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");

    if (isChar) {
      return s.replace(/\'/g, "\\'");
    } else {
      return s.replace(/\"/g, '\\"');
    }
  }

  function _Debug_ctorColor(ansi, string) {
    return ansi ? "\x1b[96m" + string + "\x1b[0m" : string;
  }

  function _Debug_numberColor(ansi, string) {
    return ansi ? "\x1b[95m" + string + "\x1b[0m" : string;
  }

  function _Debug_stringColor(ansi, string) {
    return ansi ? "\x1b[93m" + string + "\x1b[0m" : string;
  }

  function _Debug_charColor(ansi, string) {
    return ansi ? "\x1b[92m" + string + "\x1b[0m" : string;
  }

  function _Debug_fadeColor(ansi, string) {
    return ansi ? "\x1b[37m" + string + "\x1b[0m" : string;
  }

  function _Debug_internalColor(ansi, string) {
    return ansi ? "\x1b[36m" + string + "\x1b[0m" : string;
  }

  function _Debug_toHexDigit(n) {
    return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
  }

  // CRASH

  function _Debug_crash_UNUSED(identifier) {
    throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
  }

  function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
    switch (identifier) {
      case 0:
        throw new Error(
          'What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.'
        );

      case 1:
        throw new Error(
          "Browser.application programs cannot handle URLs like this:\n\n    " +
            document.location.href +
            "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server."
        );

      case 2:
        var jsonErrorString = fact1;
        throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);

      case 3:
        var portName = fact1;
        throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");

      case 4:
        var portName = fact1;
        var problem = fact2;
        throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);

      case 5:
        throw new Error(
          'Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.'
        );

      case 6:
        var moduleName = fact1;
        throw new Error(
          "Your page is loading multiple Elm scripts with a module named " +
            moduleName +
            ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!"
        );

      case 8:
        var moduleName = fact1;
        var region = fact2;
        var message = fact3;
        throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);

      case 9:
        var moduleName = fact1;
        var region = fact2;
        var value = fact3;
        var message = fact4;
        throw new Error(
          "TODO in module `" +
            moduleName +
            "` from the `case` expression " +
            _Debug_regionToString(region) +
            "\n\nIt received the following value:\n\n    " +
            _Debug_toString(value).replace("\n", "\n    ") +
            "\n\nBut the branch that handles it says:\n\n    " +
            message.replace("\n", "\n    ")
        );

      case 10:
        throw new Error("Bug in https://github.com/elm/virtual-dom/issues");

      case 11:
        throw new Error("Cannot perform mod 0. Division by zero error.");
    }
  }

  function _Debug_regionToString(region) {
    if (region.start.line === region.end.line) {
      return "on line " + region.start.line;
    }
    return "on lines " + region.start.line + " through " + region.end.line;
  }

  // EQUALITY

  function _Utils_eq(x, y) {
    for (
      var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
      isEqual && (pair = stack.pop());
      isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
    ) {}

    return isEqual;
  }

  function _Utils_eqHelp(x, y, depth, stack) {
    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _Debug_crash(5);
      return false;
    }

    if (depth > 100) {
      stack.push(_Utils_Tuple2(x, y));
      return true;
    }

    /**/
    if (x.$ === "Set_elm_builtin") {
      x = $elm$core$Set$toList(x);
      y = $elm$core$Set$toList(y);
    }
    if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
      x = $elm$core$Dict$toList(x);
      y = $elm$core$Dict$toList(y);
    }
    //*/

    /**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

    for (var key in x) {
      if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }
    return true;
  }

  var _Utils_equal = F2(_Utils_eq);
  var _Utils_notEqual = F2(function (a, b) {
    return !_Utils_eq(a, b);
  });

  // COMPARISONS

  // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
  // the particular integer values assigned to LT, EQ, and GT.

  function _Utils_cmp(x, y, ord) {
    if (typeof x !== "object") {
      return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
    }

    /**/
    if (x instanceof String) {
      var a = x.valueOf();
      var b = y.valueOf();
      return a === b ? 0 : a < b ? -1 : 1;
    }
    //*/

    /**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
    /**/
    if (x.$[0] === "#") {
      //*/
      return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
    }

    // traverse conses until end of a list or a mismatch
    for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
    return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
  }

  var _Utils_lt = F2(function (a, b) {
    return _Utils_cmp(a, b) < 0;
  });
  var _Utils_le = F2(function (a, b) {
    return _Utils_cmp(a, b) < 1;
  });
  var _Utils_gt = F2(function (a, b) {
    return _Utils_cmp(a, b) > 0;
  });
  var _Utils_ge = F2(function (a, b) {
    return _Utils_cmp(a, b) >= 0;
  });

  var _Utils_compare = F2(function (x, y) {
    var n = _Utils_cmp(x, y);
    return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
  });

  // COMMON VALUES

  var _Utils_Tuple0_UNUSED = 0;
  var _Utils_Tuple0 = { $: "#0" };

  function _Utils_Tuple2_UNUSED(a, b) {
    return { a: a, b: b };
  }
  function _Utils_Tuple2(a, b) {
    return { $: "#2", a: a, b: b };
  }

  function _Utils_Tuple3_UNUSED(a, b, c) {
    return { a: a, b: b, c: c };
  }
  function _Utils_Tuple3(a, b, c) {
    return { $: "#3", a: a, b: b, c: c };
  }

  function _Utils_chr_UNUSED(c) {
    return c;
  }
  function _Utils_chr(c) {
    return new String(c);
  }

  // RECORDS

  function _Utils_update(oldRecord, updatedFields) {
    var newRecord = {};

    for (var key in oldRecord) {
      newRecord[key] = oldRecord[key];
    }

    for (var key in updatedFields) {
      newRecord[key] = updatedFields[key];
    }

    return newRecord;
  }

  // APPEND

  var _Utils_append = F2(_Utils_ap);

  function _Utils_ap(xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    }

    // append Lists
    if (!xs.b) {
      return ys;
    }
    var root = _List_Cons(xs.a, ys);
    xs = xs.b;
    for (
      var curr = root;
      xs.b;
      xs = xs.b // WHILE_CONS
    ) {
      curr = curr.b = _List_Cons(xs.a, ys);
    }
    return root;
  }

  var _List_Nil_UNUSED = { $: 0 };
  var _List_Nil = { $: "[]" };

  function _List_Cons_UNUSED(hd, tl) {
    return { $: 1, a: hd, b: tl };
  }
  function _List_Cons(hd, tl) {
    return { $: "::", a: hd, b: tl };
  }

  var _List_cons = F2(_List_Cons);

  function _List_fromArray(arr) {
    var out = _List_Nil;
    for (var i = arr.length; i--; ) {
      out = _List_Cons(arr[i], out);
    }
    return out;
  }

  function _List_toArray(xs) {
    for (
      var out = [];
      xs.b;
      xs = xs.b // WHILE_CONS
    ) {
      out.push(xs.a);
    }
    return out;
  }

  var _List_map2 = F3(function (f, xs, ys) {
    for (
      var arr = [];
      xs.b && ys.b;
      xs = xs.b, ys = ys.b // WHILE_CONSES
    ) {
      arr.push(A2(f, xs.a, ys.a));
    }
    return _List_fromArray(arr);
  });

  var _List_map3 = F4(function (f, xs, ys, zs) {
    for (
      var arr = [];
      xs.b && ys.b && zs.b;
      xs = xs.b, ys = ys.b, zs = zs.b // WHILE_CONSES
    ) {
      arr.push(A3(f, xs.a, ys.a, zs.a));
    }
    return _List_fromArray(arr);
  });

  var _List_map4 = F5(function (f, ws, xs, ys, zs) {
    for (
      var arr = [];
      ws.b && xs.b && ys.b && zs.b;
      ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b // WHILE_CONSES
    ) {
      arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
    }
    return _List_fromArray(arr);
  });

  var _List_map5 = F6(function (f, vs, ws, xs, ys, zs) {
    for (
      var arr = [];
      vs.b && ws.b && xs.b && ys.b && zs.b;
      vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b // WHILE_CONSES
    ) {
      arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
    }
    return _List_fromArray(arr);
  });

  var _List_sortBy = F2(function (f, xs) {
    return _List_fromArray(
      _List_toArray(xs).sort(function (a, b) {
        return _Utils_cmp(f(a), f(b));
      })
    );
  });

  var _List_sortWith = F2(function (f, xs) {
    return _List_fromArray(
      _List_toArray(xs).sort(function (a, b) {
        var ord = A2(f, a, b);
        return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
      })
    );
  });

  // MATH

  var _Basics_add = F2(function (a, b) {
    return a + b;
  });
  var _Basics_sub = F2(function (a, b) {
    return a - b;
  });
  var _Basics_mul = F2(function (a, b) {
    return a * b;
  });
  var _Basics_fdiv = F2(function (a, b) {
    return a / b;
  });
  var _Basics_idiv = F2(function (a, b) {
    return (a / b) | 0;
  });
  var _Basics_pow = F2(Math.pow);

  var _Basics_remainderBy = F2(function (b, a) {
    return a % b;
  });

  // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
  var _Basics_modBy = F2(function (modulus, x) {
    var answer = x % modulus;
    return modulus === 0 ? _Debug_crash(11) : (answer > 0 && modulus < 0) || (answer < 0 && modulus > 0) ? answer + modulus : answer;
  });

  // TRIGONOMETRY

  var _Basics_pi = Math.PI;
  var _Basics_e = Math.E;
  var _Basics_cos = Math.cos;
  var _Basics_sin = Math.sin;
  var _Basics_tan = Math.tan;
  var _Basics_acos = Math.acos;
  var _Basics_asin = Math.asin;
  var _Basics_atan = Math.atan;
  var _Basics_atan2 = F2(Math.atan2);

  // MORE MATH

  function _Basics_toFloat(x) {
    return x;
  }
  function _Basics_truncate(n) {
    return n | 0;
  }
  function _Basics_isInfinite(n) {
    return n === Infinity || n === -Infinity;
  }

  var _Basics_ceiling = Math.ceil;
  var _Basics_floor = Math.floor;
  var _Basics_round = Math.round;
  var _Basics_sqrt = Math.sqrt;
  var _Basics_log = Math.log;
  var _Basics_isNaN = isNaN;

  // BOOLEANS

  function _Basics_not(bool) {
    return !bool;
  }
  var _Basics_and = F2(function (a, b) {
    return a && b;
  });
  var _Basics_or = F2(function (a, b) {
    return a || b;
  });
  var _Basics_xor = F2(function (a, b) {
    return a !== b;
  });

  var _String_cons = F2(function (chr, str) {
    return chr + str;
  });

  function _String_uncons(string) {
    var word = string.charCodeAt(0);
    return !isNaN(word)
      ? $elm$core$Maybe$Just(
          0xd800 <= word && word <= 0xdbff
            ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
            : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
        )
      : $elm$core$Maybe$Nothing;
  }

  var _String_append = F2(function (a, b) {
    return a + b;
  });

  function _String_length(str) {
    return str.length;
  }

  var _String_map = F2(function (func, string) {
    var len = string.length;
    var array = new Array(len);
    var i = 0;
    while (i < len) {
      var word = string.charCodeAt(i);
      if (0xd800 <= word && word <= 0xdbff) {
        array[i] = func(_Utils_chr(string[i] + string[i + 1]));
        i += 2;
        continue;
      }
      array[i] = func(_Utils_chr(string[i]));
      i++;
    }
    return array.join("");
  });

  var _String_filter = F2(function (isGood, str) {
    var arr = [];
    var len = str.length;
    var i = 0;
    while (i < len) {
      var char = str[i];
      var word = str.charCodeAt(i);
      i++;
      if (0xd800 <= word && word <= 0xdbff) {
        char += str[i];
        i++;
      }

      if (isGood(_Utils_chr(char))) {
        arr.push(char);
      }
    }
    return arr.join("");
  });

  function _String_reverse(str) {
    var len = str.length;
    var arr = new Array(len);
    var i = 0;
    while (i < len) {
      var word = str.charCodeAt(i);
      if (0xd800 <= word && word <= 0xdbff) {
        arr[len - i] = str[i + 1];
        i++;
        arr[len - i] = str[i - 1];
        i++;
      } else {
        arr[len - i] = str[i];
        i++;
      }
    }
    return arr.join("");
  }

  var _String_foldl = F3(function (func, state, string) {
    var len = string.length;
    var i = 0;
    while (i < len) {
      var char = string[i];
      var word = string.charCodeAt(i);
      i++;
      if (0xd800 <= word && word <= 0xdbff) {
        char += string[i];
        i++;
      }
      state = A2(func, _Utils_chr(char), state);
    }
    return state;
  });

  var _String_foldr = F3(function (func, state, string) {
    var i = string.length;
    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);
      if (0xdc00 <= word && word <= 0xdfff) {
        i--;
        char = string[i] + char;
      }
      state = A2(func, _Utils_chr(char), state);
    }
    return state;
  });

  var _String_split = F2(function (sep, str) {
    return str.split(sep);
  });

  var _String_join = F2(function (sep, strs) {
    return strs.join(sep);
  });

  var _String_slice = F3(function (start, end, str) {
    return str.slice(start, end);
  });

  function _String_trim(str) {
    return str.trim();
  }

  function _String_trimLeft(str) {
    return str.replace(/^\s+/, "");
  }

  function _String_trimRight(str) {
    return str.replace(/\s+$/, "");
  }

  function _String_words(str) {
    return _List_fromArray(str.trim().split(/\s+/g));
  }

  function _String_lines(str) {
    return _List_fromArray(str.split(/\r\n|\r|\n/g));
  }

  function _String_toUpper(str) {
    return str.toUpperCase();
  }

  function _String_toLower(str) {
    return str.toLowerCase();
  }

  var _String_any = F2(function (isGood, string) {
    var i = string.length;
    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);
      if (0xdc00 <= word && word <= 0xdfff) {
        i--;
        char = string[i] + char;
      }
      if (isGood(_Utils_chr(char))) {
        return true;
      }
    }
    return false;
  });

  var _String_all = F2(function (isGood, string) {
    var i = string.length;
    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);
      if (0xdc00 <= word && word <= 0xdfff) {
        i--;
        char = string[i] + char;
      }
      if (!isGood(_Utils_chr(char))) {
        return false;
      }
    }
    return true;
  });

  var _String_contains = F2(function (sub, str) {
    return str.indexOf(sub) > -1;
  });

  var _String_startsWith = F2(function (sub, str) {
    return str.indexOf(sub) === 0;
  });

  var _String_endsWith = F2(function (sub, str) {
    return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
  });

  var _String_indexes = F2(function (sub, str) {
    var subLen = sub.length;

    if (subLen < 1) {
      return _List_Nil;
    }

    var i = 0;
    var is = [];

    while ((i = str.indexOf(sub, i)) > -1) {
      is.push(i);
      i = i + subLen;
    }

    return _List_fromArray(is);
  });

  // TO STRING

  function _String_fromNumber(number) {
    return number + "";
  }

  // INT CONVERSIONS

  function _String_toInt(str) {
    var total = 0;
    var code0 = str.charCodeAt(0);
    var start = code0 == 0x2b /* + */ || code0 == 0x2d /* - */ ? 1 : 0;

    for (var i = start; i < str.length; ++i) {
      var code = str.charCodeAt(i);
      if (code < 0x30 || 0x39 < code) {
        return $elm$core$Maybe$Nothing;
      }
      total = 10 * total + code - 0x30;
    }

    return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 0x2d ? -total : total);
  }

  // FLOAT CONVERSIONS

  function _String_toFloat(s) {
    // check if it is a hex, octal, or binary number
    if (s.length === 0 || /[\sxbo]/.test(s)) {
      return $elm$core$Maybe$Nothing;
    }
    var n = +s;
    // faster isNaN check
    return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
  }

  function _String_fromList(chars) {
    return _List_toArray(chars).join("");
  }

  function _Char_toCode(char) {
    var code = char.charCodeAt(0);
    if (0xd800 <= code && code <= 0xdbff) {
      return (code - 0xd800) * 0x400 + char.charCodeAt(1) - 0xdc00 + 0x10000;
    }
    return code;
  }

  function _Char_fromCode(code) {
    return _Utils_chr(
      code < 0 || 0x10ffff < code
        ? "\uFFFD"
        : code <= 0xffff
          ? String.fromCharCode(code)
          : ((code -= 0x10000), String.fromCharCode(Math.floor(code / 0x400) + 0xd800, (code % 0x400) + 0xdc00))
    );
  }

  function _Char_toUpper(char) {
    return _Utils_chr(char.toUpperCase());
  }

  function _Char_toLower(char) {
    return _Utils_chr(char.toLowerCase());
  }

  function _Char_toLocaleUpper(char) {
    return _Utils_chr(char.toLocaleUpperCase());
  }

  function _Char_toLocaleLower(char) {
    return _Utils_chr(char.toLocaleLowerCase());
  }

  /**/
  function _Json_errorToString(error) {
    return $elm$json$Json$Decode$errorToString(error);
  }
  //*/

  // CORE DECODERS

  function _Json_succeed(msg) {
    return {
      $: 0,
      a: msg,
    };
  }

  function _Json_fail(msg) {
    return {
      $: 1,
      a: msg,
    };
  }

  function _Json_decodePrim(decoder) {
    return { $: 2, b: decoder };
  }

  var _Json_decodeInt = _Json_decodePrim(function (value) {
    return typeof value !== "number"
      ? _Json_expecting("an INT", value)
      : -2147483647 < value && value < 2147483647 && (value | 0) === value
        ? $elm$core$Result$Ok(value)
        : isFinite(value) && !(value % 1)
          ? $elm$core$Result$Ok(value)
          : _Json_expecting("an INT", value);
  });

  var _Json_decodeBool = _Json_decodePrim(function (value) {
    return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
  });

  var _Json_decodeFloat = _Json_decodePrim(function (value) {
    return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
  });

  var _Json_decodeValue = _Json_decodePrim(function (value) {
    return $elm$core$Result$Ok(_Json_wrap(value));
  });

  var _Json_decodeString = _Json_decodePrim(function (value) {
    return typeof value === "string"
      ? $elm$core$Result$Ok(value)
      : value instanceof String
        ? $elm$core$Result$Ok(value + "")
        : _Json_expecting("a STRING", value);
  });

  function _Json_decodeList(decoder) {
    return { $: 3, b: decoder };
  }
  function _Json_decodeArray(decoder) {
    return { $: 4, b: decoder };
  }

  function _Json_decodeNull(value) {
    return { $: 5, c: value };
  }

  var _Json_decodeField = F2(function (field, decoder) {
    return {
      $: 6,
      d: field,
      b: decoder,
    };
  });

  var _Json_decodeIndex = F2(function (index, decoder) {
    return {
      $: 7,
      e: index,
      b: decoder,
    };
  });

  function _Json_decodeKeyValuePairs(decoder) {
    return {
      $: 8,
      b: decoder,
    };
  }

  function _Json_mapMany(f, decoders) {
    return {
      $: 9,
      f: f,
      g: decoders,
    };
  }

  var _Json_andThen = F2(function (callback, decoder) {
    return {
      $: 10,
      b: decoder,
      h: callback,
    };
  });

  function _Json_oneOf(decoders) {
    return {
      $: 11,
      g: decoders,
    };
  }

  // DECODING OBJECTS

  var _Json_map1 = F2(function (f, d1) {
    return _Json_mapMany(f, [d1]);
  });

  var _Json_map2 = F3(function (f, d1, d2) {
    return _Json_mapMany(f, [d1, d2]);
  });

  var _Json_map3 = F4(function (f, d1, d2, d3) {
    return _Json_mapMany(f, [d1, d2, d3]);
  });

  var _Json_map4 = F5(function (f, d1, d2, d3, d4) {
    return _Json_mapMany(f, [d1, d2, d3, d4]);
  });

  var _Json_map5 = F6(function (f, d1, d2, d3, d4, d5) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
  });

  var _Json_map6 = F7(function (f, d1, d2, d3, d4, d5, d6) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
  });

  var _Json_map7 = F8(function (f, d1, d2, d3, d4, d5, d6, d7) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
  });

  var _Json_map8 = F9(function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
  });

  // DECODE

  var _Json_runOnString = F2(function (decoder, string) {
    try {
      var value = JSON.parse(string);
      return _Json_runHelp(decoder, value);
    } catch (e) {
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
    }
  });

  var _Json_run = F2(function (decoder, value) {
    return _Json_runHelp(decoder, _Json_unwrap(value));
  });

  function _Json_runHelp(decoder, value) {
    switch (decoder.$) {
      case 2:
        return decoder.b(value);

      case 5:
        return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);

      case 3:
        if (!_Json_isArray(value)) {
          return _Json_expecting("a LIST", value);
        }
        return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

      case 4:
        if (!_Json_isArray(value)) {
          return _Json_expecting("an ARRAY", value);
        }
        return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

      case 6:
        var field = decoder.d;
        if (typeof value !== "object" || value === null || !(field in value)) {
          return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
        }
        var result = _Json_runHelp(decoder.b, value[field]);
        return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

      case 7:
        var index = decoder.e;
        if (!_Json_isArray(value)) {
          return _Json_expecting("an ARRAY", value);
        }
        if (index >= value.length) {
          return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
        }
        var result = _Json_runHelp(decoder.b, value[index]);
        return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

      case 8:
        if (typeof value !== "object" || value === null || _Json_isArray(value)) {
          return _Json_expecting("an OBJECT", value);
        }

        var keyValuePairs = _List_Nil;
        // TODO test perf of Object.keys and switch when support is good enough
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _Json_runHelp(decoder.b, value[key]);
            if (!$elm$core$Result$isOk(result)) {
              return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
            }
            keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
          }
        }
        return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

      case 9:
        var answer = decoder.f;
        var decoders = decoder.g;
        for (var i = 0; i < decoders.length; i++) {
          var result = _Json_runHelp(decoders[i], value);
          if (!$elm$core$Result$isOk(result)) {
            return result;
          }
          answer = answer(result.a);
        }
        return $elm$core$Result$Ok(answer);

      case 10:
        var result = _Json_runHelp(decoder.b, value);
        return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);

      case 11:
        var errors = _List_Nil;
        for (
          var temp = decoder.g;
          temp.b;
          temp = temp.b // WHILE_CONS
        ) {
          var result = _Json_runHelp(temp.a, value);
          if ($elm$core$Result$isOk(result)) {
            return result;
          }
          errors = _List_Cons(result.a, errors);
        }
        return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

      case 1:
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

      case 0:
        return $elm$core$Result$Ok(decoder.a);
    }
  }

  function _Json_runArrayDecoder(decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);
    for (var i = 0; i < len; i++) {
      var result = _Json_runHelp(decoder, value[i]);
      if (!$elm$core$Result$isOk(result)) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
      }
      array[i] = result.a;
    }
    return $elm$core$Result$Ok(toElmValue(array));
  }

  function _Json_isArray(value) {
    return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
  }

  function _Json_toElmArray(array) {
    return A2($elm$core$Array$initialize, array.length, function (i) {
      return array[i];
    });
  }

  function _Json_expecting(type, value) {
    return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
  }

  // EQUALITY

  function _Json_equality(x, y) {
    if (x === y) {
      return true;
    }

    if (x.$ !== y.$) {
      return false;
    }

    switch (x.$) {
      case 0:
      case 1:
        return x.a === y.a;

      case 2:
        return x.b === y.b;

      case 5:
        return x.c === y.c;

      case 3:
      case 4:
      case 8:
        return _Json_equality(x.b, y.b);

      case 6:
        return x.d === y.d && _Json_equality(x.b, y.b);

      case 7:
        return x.e === y.e && _Json_equality(x.b, y.b);

      case 9:
        return x.f === y.f && _Json_listEquality(x.g, y.g);

      case 10:
        return x.h === y.h && _Json_equality(x.b, y.b);

      case 11:
        return _Json_listEquality(x.g, y.g);
    }
  }

  function _Json_listEquality(aDecoders, bDecoders) {
    var len = aDecoders.length;
    if (len !== bDecoders.length) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (!_Json_equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }
    return true;
  }

  // ENCODE

  var _Json_encode = F2(function (indentLevel, value) {
    return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
  });

  function _Json_wrap(value) {
    return { $: 0, a: value };
  }
  function _Json_unwrap(value) {
    return value.a;
  }

  function _Json_wrap_UNUSED(value) {
    return value;
  }
  function _Json_unwrap_UNUSED(value) {
    return value;
  }

  function _Json_emptyArray() {
    return [];
  }
  function _Json_emptyObject() {
    return {};
  }

  var _Json_addField = F3(function (key, value, object) {
    object[key] = _Json_unwrap(value);
    return object;
  });

  function _Json_addEntry(func) {
    return F2(function (entry, array) {
      array.push(_Json_unwrap(func(entry)));
      return array;
    });
  }

  var _Json_encodeNull = _Json_wrap(null);

  // TASKS

  function _Scheduler_succeed(value) {
    return {
      $: 0,
      a: value,
    };
  }

  function _Scheduler_fail(error) {
    return {
      $: 1,
      a: error,
    };
  }

  function _Scheduler_binding(callback) {
    return {
      $: 2,
      b: callback,
      c: null,
    };
  }

  var _Scheduler_andThen = F2(function (callback, task) {
    return {
      $: 3,
      b: callback,
      d: task,
    };
  });

  var _Scheduler_onError = F2(function (callback, task) {
    return {
      $: 4,
      b: callback,
      d: task,
    };
  });

  function _Scheduler_receive(callback) {
    return {
      $: 5,
      b: callback,
    };
  }

  // PROCESSES

  var _Scheduler_guid = 0;

  function _Scheduler_rawSpawn(task) {
    var proc = {
      $: 0,
      e: _Scheduler_guid++,
      f: task,
      g: null,
      h: [],
    };

    _Scheduler_enqueue(proc);

    return proc;
  }

  function _Scheduler_spawn(task) {
    return _Scheduler_binding(function (callback) {
      callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
    });
  }

  function _Scheduler_rawSend(proc, msg) {
    proc.h.push(msg);
    _Scheduler_enqueue(proc);
  }

  var _Scheduler_send = F2(function (proc, msg) {
    return _Scheduler_binding(function (callback) {
      _Scheduler_rawSend(proc, msg);
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  });

  function _Scheduler_kill(proc) {
    return _Scheduler_binding(function (callback) {
      var task = proc.f;
      if (task.$ === 2 && task.c) {
        task.c();
      }

      proc.f = null;

      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  }

  /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/

  var _Scheduler_working = false;
  var _Scheduler_queue = [];

  function _Scheduler_enqueue(proc) {
    _Scheduler_queue.push(proc);
    if (_Scheduler_working) {
      return;
    }
    _Scheduler_working = true;
    while ((proc = _Scheduler_queue.shift())) {
      _Scheduler_step(proc);
    }
    _Scheduler_working = false;
  }

  function _Scheduler_step(proc) {
    while (proc.f) {
      var rootTag = proc.f.$;
      if (rootTag === 0 || rootTag === 1) {
        while (proc.g && proc.g.$ !== rootTag) {
          proc.g = proc.g.i;
        }
        if (!proc.g) {
          return;
        }
        proc.f = proc.g.b(proc.f.a);
        proc.g = proc.g.i;
      } else if (rootTag === 2) {
        proc.f.c = proc.f.b(function (newRoot) {
          proc.f = newRoot;
          _Scheduler_enqueue(proc);
        });
        return;
      } else if (rootTag === 5) {
        if (proc.h.length === 0) {
          return;
        }
        proc.f = proc.f.b(proc.h.shift());
      } // if (rootTag === 3 || rootTag === 4)
      else {
        proc.g = {
          $: rootTag === 3 ? 0 : 1,
          b: proc.f.b,
          i: proc.g,
        };
        proc.f = proc.f.d;
      }
    }
  }

  function _Process_sleep(time) {
    return _Scheduler_binding(function (callback) {
      var id = setTimeout(function () {
        callback(_Scheduler_succeed(_Utils_Tuple0));
      }, time);

      return function () {
        clearTimeout(id);
      };
    });
  }

  // PROGRAMS

  var _Platform_worker = F4(function (impl, flagDecoder, debugMetadata, args) {
    return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function () {
      return function () {};
    });
  });

  // INITIALIZE A PROGRAM

  function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
    var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
    $elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
    var managers = {};
    var initPair = init(result.a);
    var model = initPair.a;
    var stepper = stepperBuilder(sendToApp, model);
    var ports = _Platform_setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      var pair = A2(update, msg, model);
      stepper((model = pair.a), viewMetadata);
      _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
    }

    _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

    return ports ? { ports: ports } : {};
  }

  // TRACK PRELOADS
  //
  // This is used by code in elm/browser and elm/http
  // to register any HTTP requests that are triggered by init.
  //

  var _Platform_preload;

  function _Platform_registerPreload(url) {
    _Platform_preload.add(url);
  }

  // EFFECT MANAGERS

  var _Platform_effectManagers = {};

  function _Platform_setupEffects(managers, sendToApp) {
    var ports;

    // setup all necessary effect managers
    for (var key in _Platform_effectManagers) {
      var manager = _Platform_effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _Platform_instantiateManager(manager, sendToApp);
    }

    return ports;
  }

  function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
    return {
      b: init,
      c: onEffects,
      d: onSelfMsg,
      e: cmdMap,
      f: subMap,
    };
  }

  function _Platform_instantiateManager(info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined,
    };

    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    function loop(state) {
      return A2(
        _Scheduler_andThen,
        loop,
        _Scheduler_receive(function (msg) {
          var value = msg.a;

          if (msg.$ === 0) {
            return A3(onSelfMsg, router, value, state);
          }

          return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
        })
      );
    }

    return (router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b)));
  }

  // ROUTING

  var _Platform_sendToApp = F2(function (router, msg) {
    return _Scheduler_binding(function (callback) {
      router.g(msg);
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  });

  var _Platform_sendToSelf = F2(function (router, msg) {
    return A2(_Scheduler_send, router.h, {
      $: 0,
      a: msg,
    });
  });

  // BAGS

  function _Platform_leaf(home) {
    return function (value) {
      return {
        $: 1,
        k: home,
        l: value,
      };
    };
  }

  function _Platform_batch(list) {
    return {
      $: 2,
      m: list,
    };
  }

  var _Platform_map = F2(function (tagger, bag) {
    return {
      $: 3,
      n: tagger,
      o: bag,
    };
  });

  // PIPE BAGS INTO EFFECT MANAGERS
  //
  // Effects must be queued!
  //
  // Say your init contains a synchronous command, like Time.now or Time.here
  //
  //   - This will produce a batch of effects (FX_1)
  //   - The synchronous task triggers the subsequent `update` call
  //   - This will produce a batch of effects (FX_2)
  //
  // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
  // before subscriptions from FX_1. No good! Earlier versions of this code had
  // this problem, leading to these reports:
  //
  //   https://github.com/elm/core/issues/980
  //   https://github.com/elm/core/pull/981
  //   https://github.com/elm/compiler/issues/1776
  //
  // The queue is necessary to avoid ordering issues for synchronous commands.

  // Why use true/false here? Why not just check the length of the queue?
  // The goal is to detect "are we currently dispatching effects?" If we
  // are, we need to bail and let the ongoing while loop handle things.
  //
  // Now say the queue has 1 element. When we dequeue the final element,
  // the queue will be empty, but we are still actively dispatching effects.
  // So you could get queue jumping in a really tricky category of cases.
  //
  var _Platform_effectsQueue = [];
  var _Platform_effectsActive = false;

  function _Platform_enqueueEffects(managers, cmdBag, subBag) {
    _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

    if (_Platform_effectsActive) return;

    _Platform_effectsActive = true;
    for (var fx; (fx = _Platform_effectsQueue.shift()); ) {
      _Platform_dispatchEffects(fx.p, fx.q, fx.r);
    }
    _Platform_effectsActive = false;
  }

  function _Platform_dispatchEffects(managers, cmdBag, subBag) {
    var effectsDict = {};
    _Platform_gatherEffects(true, cmdBag, effectsDict, null);
    _Platform_gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _Scheduler_rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || { i: _List_Nil, j: _List_Nil },
      });
    }
  }

  function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;
        var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
        effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (
          var list = bag.m;
          list.b;
          list = list.b // WHILE_CONS
        ) {
          _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
        }
        return;

      case 3:
        _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
          s: bag.n,
          t: taggers,
        });
        return;
    }
  }

  function _Platform_toEffect(isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.t) {
        x = temp.s(x);
      }
      return x;
    }

    var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;

    return A2(map, applyTaggers, value);
  }

  function _Platform_insert(isCmd, newEffect, effects) {
    effects = effects || { i: _List_Nil, j: _List_Nil };

    isCmd ? (effects.i = _List_Cons(newEffect, effects.i)) : (effects.j = _List_Cons(newEffect, effects.j));

    return effects;
  }

  // PORTS

  function _Platform_checkPortName(name) {
    if (_Platform_effectManagers[name]) {
      _Debug_crash(3, name);
    }
  }

  // OUTGOING PORTS

  function _Platform_outgoingPort(name, converter) {
    _Platform_checkPortName(name);
    _Platform_effectManagers[name] = {
      e: _Platform_outgoingPortMap,
      u: converter,
      a: _Platform_setupOutgoingPort,
    };
    return _Platform_leaf(name);
  }

  var _Platform_outgoingPortMap = F2(function (tagger, value) {
    return value;
  });

  function _Platform_setupOutgoingPort(name) {
    var subs = [];
    var converter = _Platform_effectManagers[name].u;

    // CREATE MANAGER

    var init = _Process_sleep(0);

    _Platform_effectManagers[name].b = init;
    _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
      for (
        ;
        cmdList.b;
        cmdList = cmdList.b // WHILE_CONS
      ) {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;
        var value = _Json_unwrap(converter(cmdList.a));
        for (var i = 0; i < currentSubs.length; i++) {
          currentSubs[i](value);
        }
      }
      return init;
    });

    // PUBLIC API

    function subscribe(callback) {
      subs.push(callback);
    }

    function unsubscribe(callback) {
      // copy subs into a new array in case unsubscribe is called within a
      // subscribed callback
      subs = subs.slice();
      var index = subs.indexOf(callback);
      if (index >= 0) {
        subs.splice(index, 1);
      }
    }

    return {
      subscribe: subscribe,
      unsubscribe: unsubscribe,
    };
  }

  // INCOMING PORTS

  function _Platform_incomingPort(name, converter) {
    _Platform_checkPortName(name);
    _Platform_effectManagers[name] = {
      f: _Platform_incomingPortMap,
      u: converter,
      a: _Platform_setupIncomingPort,
    };
    return _Platform_leaf(name);
  }

  var _Platform_incomingPortMap = F2(function (tagger, finalTagger) {
    return function (value) {
      return tagger(finalTagger(value));
    };
  });

  function _Platform_setupIncomingPort(name, sendToApp) {
    var subs = _List_Nil;
    var converter = _Platform_effectManagers[name].u;

    // CREATE MANAGER

    var init = _Scheduler_succeed(null);

    _Platform_effectManagers[name].b = init;
    _Platform_effectManagers[name].c = F3(function (router, subList, state) {
      subs = subList;
      return init;
    });

    // PUBLIC API

    function send(incomingValue) {
      var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

      $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

      var value = result.a;
      for (
        var temp = subs;
        temp.b;
        temp = temp.b // WHILE_CONS
      ) {
        sendToApp(temp.a(value));
      }
    }

    return { send: send };
  }

  // EXPORT ELM MODULES
  //
  // Have DEBUG and PROD versions so that we can (1) give nicer errors in
  // debug mode and (2) not pay for the bits needed for that in prod mode.
  //

  function _Platform_export_UNUSED(exports) {
    scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports) : (scope["Elm"] = exports);
  }

  function _Platform_mergeExportsProd(obj, exports) {
    for (var name in exports) {
      name in obj ? (name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name])) : (obj[name] = exports[name]);
    }
  }

  function _Platform_export(exports) {
    scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports) : (scope["Elm"] = exports);
  }

  function _Platform_mergeExportsDebug(moduleName, obj, exports) {
    for (var name in exports) {
      name in obj
        ? name == "init"
          ? _Debug_crash(6, moduleName)
          : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
        : (obj[name] = exports[name]);
    }
  }

  // HELPERS

  var _VirtualDom_divertHrefToApp;

  var _VirtualDom_doc = typeof document !== "undefined" ? document : {};

  function _VirtualDom_appendChild(parent, child) {
    parent.appendChild(child);
  }

  var _VirtualDom_init = F4(function (virtualNode, flagDecoder, debugMetadata, args) {
    // NOTE: this function needs _Platform_export available to work

    /**_UNUSED/
	var node = args['node'];
	//*/
    /**/
    var node = args && args["node"] ? args["node"] : _Debug_crash(0);
    //*/

    node.parentNode.replaceChild(
      _VirtualDom_render(virtualNode, function () {}),
      node
    );

    return {};
  });

  // TEXT

  function _VirtualDom_text(string) {
    return {
      $: 0,
      a: string,
    };
  }

  // NODE

  var _VirtualDom_nodeNS = F2(function (namespace, tag) {
    return F2(function (factList, kidList) {
      for (
        var kids = [], descendantsCount = 0;
        kidList.b;
        kidList = kidList.b // WHILE_CONS
      ) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }
      descendantsCount += kids.length;

      return {
        $: 1,
        c: tag,
        d: _VirtualDom_organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount,
      };
    });
  });

  var _VirtualDom_node = _VirtualDom_nodeNS(undefined);

  // KEYED NODE

  var _VirtualDom_keyedNodeNS = F2(function (namespace, tag) {
    return F2(function (factList, kidList) {
      for (
        var kids = [], descendantsCount = 0;
        kidList.b;
        kidList = kidList.b // WHILE_CONS
      ) {
        var kid = kidList.a;
        descendantsCount += kid.b.b || 0;
        kids.push(kid);
      }
      descendantsCount += kids.length;

      return {
        $: 2,
        c: tag,
        d: _VirtualDom_organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount,
      };
    });
  });

  var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);

  // CUSTOM

  function _VirtualDom_custom(factList, model, render, diff) {
    return {
      $: 3,
      d: _VirtualDom_organizeFacts(factList),
      g: model,
      h: render,
      i: diff,
    };
  }

  // MAP

  var _VirtualDom_map = F2(function (tagger, node) {
    return {
      $: 4,
      j: tagger,
      k: node,
      b: 1 + (node.b || 0),
    };
  });

  // LAZY

  function _VirtualDom_thunk(refs, thunk) {
    return {
      $: 5,
      l: refs,
      m: thunk,
      k: undefined,
    };
  }

  var _VirtualDom_lazy = F2(function (func, a) {
    return _VirtualDom_thunk([func, a], function () {
      return func(a);
    });
  });

  var _VirtualDom_lazy2 = F3(function (func, a, b) {
    return _VirtualDom_thunk([func, a, b], function () {
      return A2(func, a, b);
    });
  });

  var _VirtualDom_lazy3 = F4(function (func, a, b, c) {
    return _VirtualDom_thunk([func, a, b, c], function () {
      return A3(func, a, b, c);
    });
  });

  var _VirtualDom_lazy4 = F5(function (func, a, b, c, d) {
    return _VirtualDom_thunk([func, a, b, c, d], function () {
      return A4(func, a, b, c, d);
    });
  });

  var _VirtualDom_lazy5 = F6(function (func, a, b, c, d, e) {
    return _VirtualDom_thunk([func, a, b, c, d, e], function () {
      return A5(func, a, b, c, d, e);
    });
  });

  var _VirtualDom_lazy6 = F7(function (func, a, b, c, d, e, f) {
    return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
      return A6(func, a, b, c, d, e, f);
    });
  });

  var _VirtualDom_lazy7 = F8(function (func, a, b, c, d, e, f, g) {
    return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
      return A7(func, a, b, c, d, e, f, g);
    });
  });

  var _VirtualDom_lazy8 = F9(function (func, a, b, c, d, e, f, g, h) {
    return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
      return A8(func, a, b, c, d, e, f, g, h);
    });
  });

  // FACTS

  var _VirtualDom_on = F2(function (key, handler) {
    return {
      $: "a0",
      n: key,
      o: handler,
    };
  });
  var _VirtualDom_style = F2(function (key, value) {
    return {
      $: "a1",
      n: key,
      o: value,
    };
  });
  var _VirtualDom_property = F2(function (key, value) {
    return {
      $: "a2",
      n: key,
      o: value,
    };
  });
  var _VirtualDom_attribute = F2(function (key, value) {
    return {
      $: "a3",
      n: key,
      o: value,
    };
  });
  var _VirtualDom_attributeNS = F3(function (namespace, key, value) {
    return {
      $: "a4",
      n: key,
      o: { f: namespace, o: value },
    };
  });

  // XSS ATTACK VECTOR CHECKS
  //
  // For some reason, tabs can appear in href protocols and it still works.
  // So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
  // in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
  // so freaky.
  //
  // Pulling the regular expressions out to the top level gives a slight speed
  // boost in small benchmarks (4-10%) but hoisting values to reduce allocation
  // can be unpredictable in large programs where JIT may have a harder time with
  // functions are not fully self-contained. The benefit is more that the js and
  // js_html ones are so weird that I prefer to see them near each other.

  var _VirtualDom_RE_script = /^script$/i;
  var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
  var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
  var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;

  function _VirtualDom_noScript(tag) {
    return _VirtualDom_RE_script.test(tag) ? "p" : tag;
  }

  function _VirtualDom_noOnOrFormAction(key) {
    return _VirtualDom_RE_on_formAction.test(key) ? "data-" + key : key;
  }

  function _VirtualDom_noInnerHtmlOrFormAction(key) {
    return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
  }

  function _VirtualDom_noJavaScriptUri(value) {
    return _VirtualDom_RE_js.test(value)
      ? /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
      : value;
  }

  function _VirtualDom_noJavaScriptOrHtmlUri(value) {
    return _VirtualDom_RE_js_html.test(value)
      ? /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
      : value;
  }

  function _VirtualDom_noJavaScriptOrHtmlJson(value) {
    return typeof _Json_unwrap(value) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value))
      ? _Json_wrap(
          /**_UNUSED/''//*/ /**/ 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' //*/
        )
      : value;
  }

  // MAP FACTS

  var _VirtualDom_mapAttribute = F2(function (func, attr) {
    return attr.$ === "a0" ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
  });

  function _VirtualDom_mapHandler(func, handler) {
    var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

    // 0 = Normal
    // 1 = MayStopPropagation
    // 2 = MayPreventDefault
    // 3 = Custom

    return {
      $: handler.$,
      a: !tag
        ? A2($elm$json$Json$Decode$map, func, handler.a)
        : A3(
            $elm$json$Json$Decode$map2,
            tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord,
            $elm$json$Json$Decode$succeed(func),
            handler.a
          ),
    };
  }

  var _VirtualDom_mapEventTuple = F2(function (func, tuple) {
    return _Utils_Tuple2(func(tuple.a), tuple.b);
  });

  var _VirtualDom_mapEventRecord = F2(function (func, record) {
    return {
      message: func(record.message),
      stopPropagation: record.stopPropagation,
      preventDefault: record.preventDefault,
    };
  });

  // ORGANIZE FACTS

  function _VirtualDom_organizeFacts(factList) {
    for (
      var facts = {};
      factList.b;
      factList = factList.b // WHILE_CONS
    ) {
      var entry = factList.a;

      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className" ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : (facts[key] = _Json_unwrap(value));

        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class" ? _VirtualDom_addClass(subFacts, key, value) : (subFacts[key] = value);
    }

    return facts;
  }

  function _VirtualDom_addClass(object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  }

  // RENDER

  function _VirtualDom_render(vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _VirtualDom_doc.createTextNode(vNode.a);
    }

    if (tag === 4) {
      var subNode = vNode.k;
      var tagger = vNode.j;

      while (subNode.$ === 4) {
        typeof tagger !== "object" ? (tagger = [tagger, subNode.j]) : tagger.push(subNode.j);

        subNode = subNode.k;
      }

      var subEventRoot = { j: tagger, p: eventNode };
      var domNode = _VirtualDom_render(subNode, subEventRoot);
      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);
      _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
      return domNode;
    }

    // at this point `tag` must be 1 or 2

    var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);

    if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
      domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
    }

    _VirtualDom_applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    }

    return domNode;
  }

  // APPLY FACTS

  function _VirtualDom_applyFacts(domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];

      key === "a1"
        ? _VirtualDom_applyStyles(domNode, value)
        : key === "a0"
          ? _VirtualDom_applyEvents(domNode, eventNode, value)
          : key === "a3"
            ? _VirtualDom_applyAttrs(domNode, value)
            : key === "a4"
              ? _VirtualDom_applyAttrsNS(domNode, value)
              : ((key !== "value" && key !== "checked") || domNode[key] !== value) && (domNode[key] = value);
    }
  }

  // APPLY STYLES

  function _VirtualDom_applyStyles(domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  }

  // APPLY ATTRS

  function _VirtualDom_applyAttrs(domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  }

  // APPLY NAMESPACED ATTRS

  function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;

      typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
    }
  }

  // APPLY EVENTS

  function _VirtualDom_applyEvents(domNode, eventNode, events) {
    var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

    for (var key in events) {
      var newHandler = events[key];
      var oldCallback = allCallbacks[key];

      if (!newHandler) {
        domNode.removeEventListener(key, oldCallback);
        allCallbacks[key] = undefined;
        continue;
      }

      if (oldCallback) {
        var oldHandler = oldCallback.q;
        if (oldHandler.$ === newHandler.$) {
          oldCallback.q = newHandler;
          continue;
        }
        domNode.removeEventListener(key, oldCallback);
      }

      oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
      domNode.addEventListener(
        key,
        oldCallback,
        _VirtualDom_passiveSupported && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
      );
      allCallbacks[key] = oldCallback;
    }
  }

  // PASSIVE EVENTS

  var _VirtualDom_passiveSupported;

  try {
    window.addEventListener(
      "t",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          _VirtualDom_passiveSupported = true;
        },
      })
    );
  } catch (e) {}

  // EVENT HANDLERS

  function _VirtualDom_makeCallback(eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;
      var result = _Json_runHelp(handler.a, event);

      if (!$elm$core$Result$isOk(result)) {
        return;
      }

      var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

      // 0 = Normal
      // 1 = MayStopPropagation
      // 2 = MayPreventDefault
      // 3 = Custom

      var value = result.a;
      var message = !tag ? value : tag < 3 ? value.a : value.message;
      var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
      var currentEventNode =
        (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(), eventNode);
      var tagger;
      var i;
      while ((tagger = currentEventNode.j)) {
        if (typeof tagger == "function") {
          message = tagger(message);
        } else {
          for (var i = tagger.length; i--; ) {
            message = tagger[i](message);
          }
        }
        currentEventNode = currentEventNode.p;
      }
      currentEventNode(message, stopPropagation); // stopPropagation implies isSync
    }

    callback.q = initialHandler;

    return callback;
  }

  function _VirtualDom_equalEvents(x, y) {
    return x.$ == y.$ && _Json_equality(x.a, y.a);
  }

  // DIFF

  // TODO: Should we do patches like in iOS?
  //
  // type Patch
  //   = At Int Patch
  //   | Batch (List Patch)
  //   | Change ...
  //
  // How could it not be better?
  //
  function _VirtualDom_diff(x, y) {
    var patches = [];
    _VirtualDom_diffHelp(x, y, patches, 0);
    return patches;
  }

  function _VirtualDom_pushPatch(patches, type, index, data) {
    var patch = {
      $: type,
      r: index,
      s: data,
      t: undefined,
      u: undefined,
    };
    patches.push(patch);
    return patch;
  }

  function _VirtualDom_diffHelp(x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$;

    // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.
    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _VirtualDom_dekey(y);
        yType = 1;
      } else {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }
    }

    // Now we know that both nodes are the same $.
    switch (yType) {
      case 5:
        var xRefs = x.l;
        var yRefs = y.l;
        var i = xRefs.length;
        var same = i === yRefs.length;
        while (same && i--) {
          same = xRefs[i] === yRefs[i];
        }
        if (same) {
          y.k = x.k;
          return;
        }
        y.k = y.m();
        var subPatches = [];
        _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
        subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
        return;

      case 4:
        // gather nested taggers
        var xTaggers = x.j;
        var yTaggers = y.j;
        var nesting = false;

        var xSubNode = x.k;
        while (xSubNode.$ === 4) {
          nesting = true;

          typeof xTaggers !== "object" ? (xTaggers = [xTaggers, xSubNode.j]) : xTaggers.push(xSubNode.j);

          xSubNode = xSubNode.k;
        }

        var ySubNode = y.k;
        while (ySubNode.$ === 4) {
          nesting = true;

          typeof yTaggers !== "object" ? (yTaggers = [yTaggers, ySubNode.j]) : yTaggers.push(ySubNode.j);

          ySubNode = ySubNode.k;
        }

        // Just bail if different numbers of taggers. This implies the
        // structure of the virtual DOM has changed.
        if (nesting && xTaggers.length !== yTaggers.length) {
          _VirtualDom_pushPatch(patches, 0, index, y);
          return;
        }

        // check if taggers are "the same"
        if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
          _VirtualDom_pushPatch(patches, 2, index, yTaggers);
        }

        // diff everything below the taggers
        _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
        return;

      case 0:
        if (x.a !== y.a) {
          _VirtualDom_pushPatch(patches, 3, index, y.a);
        }
        return;

      case 1:
        _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
        return;

      case 2:
        _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
        return;

      case 3:
        if (x.h !== y.h) {
          _VirtualDom_pushPatch(patches, 0, index, y);
          return;
        }

        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

        var patch = y.i(x.g, y.g);
        patch && _VirtualDom_pushPatch(patches, 5, index, patch);

        return;
    }
  }

  // assumes the incoming arrays are the same length
  function _VirtualDom_pairwiseRefEqual(as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  }

  function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _VirtualDom_pushPatch(patches, 0, index, y);
      return;
    }

    var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
    factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

    diffKids(x, y, patches, index);
  }

  // DIFF FACTS

  // TODO Instead of creating a new diff object, it's possible to just test if
  // there *is* a diff. During the actual patch, do the diff again and make the
  // modifications directly. This way, there's no new allocations. Worth it?
  function _VirtualDom_diffFacts(x, y, category) {
    var diff;

    // look for changes and removals
    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
        if (subDiff) {
          diff = diff || {};
          diff[xKey] = subDiff;
        }
        continue;
      }

      // remove if not in the new facts
      if (!(xKey in y)) {
        diff = diff || {};
        diff[xKey] = !category
          ? typeof x[xKey] === "string"
            ? ""
            : null
          : category === "a1"
            ? ""
            : category === "a0" || category === "a3"
              ? undefined
              : { f: x[xKey].f, o: undefined };

        continue;
      }

      var xValue = x[xKey];
      var yValue = y[xKey];

      // reference equal, so don't worry about it
      if ((xValue === yValue && xKey !== "value" && xKey !== "checked") || (category === "a0" && _VirtualDom_equalEvents(xValue, yValue))) {
        continue;
      }

      diff = diff || {};
      diff[xKey] = yValue;
    }

    // add new stuff
    for (var yKey in y) {
      if (!(yKey in x)) {
        diff = diff || {};
        diff[yKey] = y[yKey];
      }
    }

    return diff;
  }

  // DIFF KIDS

  function _VirtualDom_diffKids(xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;

    var xLen = xKids.length;
    var yLen = yKids.length;

    // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _VirtualDom_pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen,
      });
    } else if (xLen < yLen) {
      _VirtualDom_pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids,
      });
    }

    // PAIRWISE DIFF EVERYTHING ELSE

    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];
      _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
      index += xKid.b || 0;
    }
  }

  // KEYED DIFF

  function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
    var localPatches = [];

    var changes = {}; // Dict String Entry
    var inserts = []; // Array { index : Int, entry : Entry }
    // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length;
    var xIndex = 0;
    var yIndex = 0;

    var index = rootIndex;

    while (xIndex < xLen && yIndex < yLen) {
      var x = xKids[xIndex];
      var y = yKids[yIndex];

      var xKey = x.a;
      var yKey = y.a;
      var xNode = x.b;
      var yNode = y.b;

      var newMatch = undefined;
      var oldMatch = undefined;

      // check if keys match

      if (xKey === yKey) {
        index++;
        _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
        index += xNode.b || 0;

        xIndex++;
        yIndex++;
        continue;
      }

      // look ahead 1 to detect insertions and removals.

      var xNext = xKids[xIndex + 1];
      var yNext = yKids[yIndex + 1];

      if (xNext) {
        var xNextKey = xNext.a;
        var xNextNode = xNext.b;
        oldMatch = yKey === xNextKey;
      }

      if (yNext) {
        var yNextKey = yNext.a;
        var yNextNode = yNext.b;
        newMatch = xKey === yNextKey;
      }

      // swap x and y
      if (newMatch && oldMatch) {
        index++;
        _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
        _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
        index += xNode.b || 0;

        index++;
        _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
        index += xNextNode.b || 0;

        xIndex += 2;
        yIndex += 2;
        continue;
      }

      // insert y
      if (newMatch) {
        index++;
        _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
        _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
        index += xNode.b || 0;

        xIndex += 1;
        yIndex += 2;
        continue;
      }

      // remove x
      if (oldMatch) {
        index++;
        _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
        index += xNode.b || 0;

        index++;
        _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
        index += xNextNode.b || 0;

        xIndex += 2;
        yIndex += 1;
        continue;
      }

      // remove x, insert y
      if (xNext && xNextKey === yNextKey) {
        index++;
        _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
        _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
        index += xNode.b || 0;

        index++;
        _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
        index += xNextNode.b || 0;

        xIndex += 2;
        yIndex += 2;
        continue;
      }

      break;
    }

    // eat up any remaining nodes with removeNode and insertNode

    while (xIndex < xLen) {
      index++;
      var x = xKids[xIndex];
      var xNode = x.b;
      _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];
      _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _VirtualDom_pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts,
      });
    }
  }

  // CHANGES FROM KEYED DIFF

  var _VirtualDom_POSTFIX = "_elmW6BL";

  function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
    var entry = changes[key];

    // never seen this key before
    if (!entry) {
      entry = {
        c: 0,
        z: vnode,
        r: yIndex,
        s: undefined,
      };

      inserts.push({ r: yIndex, A: entry });
      changes[key] = entry;

      return;
    }

    // this key was removed earlier, a match!
    if (entry.c === 1) {
      inserts.push({ r: yIndex, A: entry });

      entry.c = 2;
      var subPatches = [];
      _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry,
      };

      return;
    }

    // this key has already been inserted or moved, a duplicate!
    _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
  }

  function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
    var entry = changes[key];

    // never seen this key before
    if (!entry) {
      var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

      changes[key] = {
        c: 1,
        z: vnode,
        r: index,
        s: patch,
      };

      return;
    }

    // this key was inserted earlier, a match!
    if (entry.c === 0) {
      entry.c = 2;
      var subPatches = [];
      _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

      _VirtualDom_pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry,
      });

      return;
    }

    // this key has already been removed or moved, a duplicate!
    _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
  }

  // ADD DOM NODES
  //
  // Each DOM node has an "index" assigned in order of traversal. It is important
  // to minimize our crawl over the actual DOM, so these indexes (along with the
  // descendantsCount of virtual nodes) let us skip touching entire subtrees of
  // the DOM if we know there are no patches there.

  function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
    _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
  }

  // assumes `patches` is non-empty and indexes increase monotonically.
  function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;

        var subPatches = patch.s.w;
        if (subPatches.length > 0) {
          _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;

        var data = patch.s;
        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;
          if (subPatches.length > 0) {
            _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
          }
        }
      } else {
        patch.t = domNode;
        patch.u = eventNode;
      }

      i++;

      if (!(patch = patches[i]) || (index = patch.r) > high) {
        return i;
      }
    }

    var tag = vNode.$;

    if (tag === 4) {
      var subNode = vNode.k;

      while (subNode.$ === 4) {
        subNode = subNode.k;
      }

      return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
    }

    // tag must be 1 or 2 at this point

    var vKids = vNode.e;
    var childNodes = domNode.childNodes;
    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);
      if (low <= index && index <= nextLow) {
        i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }
      low = nextLow;
    }
    return i;
  }

  // APPLY PATCHES

  function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
    return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
  }

  function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;
      var newNode = _VirtualDom_applyPatch(localDomNode, patch);
      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }
    return rootDomNode;
  }

  function _VirtualDom_applyPatch(domNode, patch) {
    switch (patch.$) {
      case 0:
        return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _VirtualDom_applyFacts(domNode, patch.u, patch.s);
        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _VirtualDom_applyPatchesHelp(domNode, patch.s);

      case 2:
        if (domNode.elm_event_node_ref) {
          domNode.elm_event_node_ref.j = patch.s;
        } else {
          domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
        }
        return domNode;

      case 6:
        var data = patch.s;
        for (var i = 0; i < data.i; i++) {
          domNode.removeChild(domNode.childNodes[data.v]);
        }
        return domNode;

      case 7:
        var data = patch.s;
        var kids = data.e;
        var i = data.v;
        var theEnd = domNode.childNodes[i];
        for (; i < kids.length; i++) {
          domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
        }
        return domNode;

      case 9:
        var data = patch.s;
        if (!data) {
          domNode.parentNode.removeChild(domNode);
          return domNode;
        }
        var entry = data.A;
        if (typeof entry.r !== "undefined") {
          domNode.parentNode.removeChild(domNode);
        }
        entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _VirtualDom_applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _Debug_crash(10); // 'Ran into an unknown patch!'
    }
  }

  function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;
    var newNode = _VirtualDom_render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }
    return newNode;
  }

  function _VirtualDom_applyPatchReorder(domNode, patch) {
    var data = patch.s;

    // remove end inserts
    var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

    // removals
    domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

    // inserts
    var inserts = data.x;
    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    }

    // add end inserts
    if (frag) {
      _VirtualDom_appendChild(domNode, frag);
    }

    return domNode;
  }

  function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _VirtualDom_doc.createDocumentFragment();
    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;
      _VirtualDom_appendChild(frag, entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u));
    }
    return frag;
  }

  function _VirtualDom_virtualize(node) {
    // TEXT NODES

    if (node.nodeType === 3) {
      return _VirtualDom_text(node.textContent);
    }

    // WEIRD NODES

    if (node.nodeType !== 1) {
      return _VirtualDom_text("");
    }

    // ELEMENT NODES

    var attrList = _List_Nil;
    var attrs = node.attributes;
    for (var i = attrs.length; i--; ) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _List_Nil;
    var kids = node.childNodes;

    for (var i = kids.length; i--; ) {
      kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
    }
    return A3(_VirtualDom_node, tag, attrList, kidList);
  }

  function _VirtualDom_dekey(keyedNode) {
    var keyedKids = keyedNode.e;
    var len = keyedKids.length;
    var kids = new Array(len);
    for (var i = 0; i < len; i++) {
      kids[i] = keyedKids[i].b;
    }

    return {
      $: 1,
      c: keyedNode.c,
      d: keyedNode.d,
      e: kids,
      f: keyedNode.f,
      b: keyedNode.b,
    };
  }

  // ELEMENT

  var _Debugger_element;

  var _Browser_element =
    _Debugger_element ||
    F4(function (impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function (sendToApp, initialModel) {
        var view = impl.view;
        /**_UNUSED/
			var domNode = args['node'];
			//*/
        /**/
        var domNode = args && args["node"] ? args["node"] : _Debug_crash(0);
        //*/
        var currNode = _VirtualDom_virtualize(domNode);

        return _Browser_makeAnimator(initialModel, function (model) {
          var nextNode = view(model);
          var patches = _VirtualDom_diff(currNode, nextNode);
          domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
          currNode = nextNode;
        });
      });
    });

  // DOCUMENT

  var _Debugger_document;

  var _Browser_document =
    _Debugger_document ||
    F4(function (impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function (sendToApp, initialModel) {
        var divertHrefToApp = impl.setup && impl.setup(sendToApp);
        var view = impl.view;
        var title = _VirtualDom_doc.title;
        var bodyNode = _VirtualDom_doc.body;
        var currNode = _VirtualDom_virtualize(bodyNode);
        return _Browser_makeAnimator(initialModel, function (model) {
          _VirtualDom_divertHrefToApp = divertHrefToApp;
          var doc = view(model);
          var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.body);
          var patches = _VirtualDom_diff(currNode, nextNode);
          bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
          currNode = nextNode;
          _VirtualDom_divertHrefToApp = 0;
          title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
        });
      });
    });

  // ANIMATION

  var _Browser_cancelAnimationFrame =
    typeof cancelAnimationFrame !== "undefined"
      ? cancelAnimationFrame
      : function (id) {
          clearTimeout(id);
        };

  var _Browser_requestAnimationFrame =
    typeof requestAnimationFrame !== "undefined"
      ? requestAnimationFrame
      : function (callback) {
          return setTimeout(callback, 1000 / 60);
        };

  function _Browser_makeAnimator(model, draw) {
    draw(model);

    var state = 0;

    function updateIfNeeded() {
      state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function (nextModel, isSync) {
      model = nextModel;

      isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded), (state = 2));
    };
  }

  // APPLICATION

  function _Browser_application(impl) {
    var onUrlChange = impl.onUrlChange;
    var onUrlRequest = impl.onUrlRequest;
    var key = function () {
      key.a(onUrlChange(_Browser_getUrl()));
    };

    return _Browser_document({
      setup: function (sendToApp) {
        key.a = sendToApp;
        _Browser_window.addEventListener("popstate", key);
        _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);

        return F2(function (domNode, event) {
          if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
            event.preventDefault();
            var href = domNode.href;
            var curr = _Browser_getUrl();
            var next = $elm$url$Url$fromString(href).a;
            sendToApp(
              onUrlRequest(
                next && curr.protocol === next.protocol && curr.host === next.host && curr.port_.a === next.port_.a
                  ? $elm$browser$Browser$Internal(next)
                  : $elm$browser$Browser$External(href)
              )
            );
          }
        });
      },
      init: function (flags) {
        return A3(impl.init, flags, _Browser_getUrl(), key);
      },
      view: impl.view,
      update: impl.update,
      subscriptions: impl.subscriptions,
    });
  }

  function _Browser_getUrl() {
    return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
  }

  var _Browser_go = F2(function (key, n) {
    return A2(
      $elm$core$Task$perform,
      $elm$core$Basics$never,
      _Scheduler_binding(function () {
        n && history.go(n);
        key();
      })
    );
  });

  var _Browser_pushUrl = F2(function (key, url) {
    return A2(
      $elm$core$Task$perform,
      $elm$core$Basics$never,
      _Scheduler_binding(function () {
        history.pushState({}, "", url);
        key();
      })
    );
  });

  var _Browser_replaceUrl = F2(function (key, url) {
    return A2(
      $elm$core$Task$perform,
      $elm$core$Basics$never,
      _Scheduler_binding(function () {
        history.replaceState({}, "", url);
        key();
      })
    );
  });

  // GLOBAL EVENTS

  var _Browser_fakeNode = { addEventListener: function () {}, removeEventListener: function () {} };
  var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
  var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;

  var _Browser_on = F3(function (node, eventName, sendToSelf) {
    return _Scheduler_spawn(
      _Scheduler_binding(function (callback) {
        function handler(event) {
          _Scheduler_rawSpawn(sendToSelf(event));
        }
        node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
        return function () {
          node.removeEventListener(eventName, handler);
        };
      })
    );
  });

  var _Browser_decodeEvent = F2(function (decoder, event) {
    var result = _Json_runHelp(decoder, event);
    return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
  });

  // PAGE VISIBILITY

  function _Browser_visibilityInfo() {
    return typeof _VirtualDom_doc.hidden !== "undefined"
      ? { hidden: "hidden", change: "visibilitychange" }
      : typeof _VirtualDom_doc.mozHidden !== "undefined"
        ? { hidden: "mozHidden", change: "mozvisibilitychange" }
        : typeof _VirtualDom_doc.msHidden !== "undefined"
          ? { hidden: "msHidden", change: "msvisibilitychange" }
          : typeof _VirtualDom_doc.webkitHidden !== "undefined"
            ? { hidden: "webkitHidden", change: "webkitvisibilitychange" }
            : { hidden: "hidden", change: "visibilitychange" };
  }

  // ANIMATION FRAMES

  function _Browser_rAF() {
    return _Scheduler_binding(function (callback) {
      var id = _Browser_requestAnimationFrame(function () {
        callback(_Scheduler_succeed(Date.now()));
      });

      return function () {
        _Browser_cancelAnimationFrame(id);
      };
    });
  }

  function _Browser_now() {
    return _Scheduler_binding(function (callback) {
      callback(_Scheduler_succeed(Date.now()));
    });
  }

  // DOM STUFF

  function _Browser_withNode(id, doStuff) {
    return _Scheduler_binding(function (callback) {
      _Browser_requestAnimationFrame(function () {
        var node = document.getElementById(id);
        callback(node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
      });
    });
  }

  function _Browser_withWindow(doStuff) {
    return _Scheduler_binding(function (callback) {
      _Browser_requestAnimationFrame(function () {
        callback(_Scheduler_succeed(doStuff()));
      });
    });
  }

  // FOCUS and BLUR

  var _Browser_call = F2(function (functionName, id) {
    return _Browser_withNode(id, function (node) {
      node[functionName]();
      return _Utils_Tuple0;
    });
  });

  // WINDOW VIEWPORT

  function _Browser_getViewport() {
    return {
      scene: _Browser_getScene(),
      viewport: {
        x: _Browser_window.pageXOffset,
        y: _Browser_window.pageYOffset,
        width: _Browser_doc.documentElement.clientWidth,
        height: _Browser_doc.documentElement.clientHeight,
      },
    };
  }

  function _Browser_getScene() {
    var body = _Browser_doc.body;
    var elem = _Browser_doc.documentElement;
    return {
      width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
      height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight),
    };
  }

  var _Browser_setViewport = F2(function (x, y) {
    return _Browser_withWindow(function () {
      _Browser_window.scroll(x, y);
      return _Utils_Tuple0;
    });
  });

  // ELEMENT VIEWPORT

  function _Browser_getViewportOf(id) {
    return _Browser_withNode(id, function (node) {
      return {
        scene: {
          width: node.scrollWidth,
          height: node.scrollHeight,
        },
        viewport: {
          x: node.scrollLeft,
          y: node.scrollTop,
          width: node.clientWidth,
          height: node.clientHeight,
        },
      };
    });
  }

  var _Browser_setViewportOf = F3(function (id, x, y) {
    return _Browser_withNode(id, function (node) {
      node.scrollLeft = x;
      node.scrollTop = y;
      return _Utils_Tuple0;
    });
  });

  // ELEMENT

  function _Browser_getElement(id) {
    return _Browser_withNode(id, function (node) {
      var rect = node.getBoundingClientRect();
      var x = _Browser_window.pageXOffset;
      var y = _Browser_window.pageYOffset;
      return {
        scene: _Browser_getScene(),
        viewport: {
          x: x,
          y: y,
          width: _Browser_doc.documentElement.clientWidth,
          height: _Browser_doc.documentElement.clientHeight,
        },
        element: {
          x: x + rect.left,
          y: y + rect.top,
          width: rect.width,
          height: rect.height,
        },
      };
    });
  }

  // LOAD and RELOAD

  function _Browser_reload(skipCache) {
    return A2(
      $elm$core$Task$perform,
      $elm$core$Basics$never,
      _Scheduler_binding(function (callback) {
        _VirtualDom_doc.location.reload(skipCache);
      })
    );
  }

  function _Browser_load(url) {
    return A2(
      $elm$core$Task$perform,
      $elm$core$Basics$never,
      _Scheduler_binding(function (callback) {
        try {
          _Browser_window.location = url;
        } catch (err) {
          // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
          // Other browsers reload the page, so let's be consistent about that.
          _VirtualDom_doc.location.reload(false);
        }
      })
    );
  }

  var _Bitwise_and = F2(function (a, b) {
    return a & b;
  });

  var _Bitwise_or = F2(function (a, b) {
    return a | b;
  });

  var _Bitwise_xor = F2(function (a, b) {
    return a ^ b;
  });

  function _Bitwise_complement(a) {
    return ~a;
  }

  var _Bitwise_shiftLeftBy = F2(function (offset, a) {
    return a << offset;
  });

  var _Bitwise_shiftRightBy = F2(function (offset, a) {
    return a >> offset;
  });

  var _Bitwise_shiftRightZfBy = F2(function (offset, a) {
    return a >>> offset;
  });

  function _Time_now(millisToPosix) {
    return _Scheduler_binding(function (callback) {
      callback(_Scheduler_succeed(millisToPosix(Date.now())));
    });
  }

  var _Time_setInterval = F2(function (interval, task) {
    return _Scheduler_binding(function (callback) {
      var id = setInterval(function () {
        _Scheduler_rawSpawn(task);
      }, interval);
      return function () {
        clearInterval(id);
      };
    });
  });

  function _Time_here() {
    return _Scheduler_binding(function (callback) {
      callback(_Scheduler_succeed(A2($elm$time$Time$customZone, -new Date().getTimezoneOffset(), _List_Nil)));
    });
  }

  function _Time_getZoneName() {
    return _Scheduler_binding(function (callback) {
      try {
        var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
      } catch (e) {
        var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
      }
      callback(_Scheduler_succeed(name));
    });
  }
  var $elm$core$List$cons = _List_cons;
  var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
  var $elm$core$Array$foldr = F3(function (func, baseCase, _v0) {
    var tree = _v0.c;
    var tail = _v0.d;
    var helper = F2(function (node, acc) {
      if (node.$ === "SubTree") {
        var subTree = node.a;
        return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
      } else {
        var values = node.a;
        return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
      }
    });
    return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
  });
  var $elm$core$Array$toList = function (array) {
    return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
  };
  var $elm$core$Dict$foldr = F3(function (func, acc, t) {
    foldr: while (true) {
      if (t.$ === "RBEmpty_elm_builtin") {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;
        var $temp$func = func,
          $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)),
          $temp$t = left;
        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  });
  var $elm$core$Dict$toList = function (dict) {
    return A3(
      $elm$core$Dict$foldr,
      F3(function (key, value, list) {
        return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
      }),
      _List_Nil,
      dict
    );
  };
  var $elm$core$Dict$keys = function (dict) {
    return A3(
      $elm$core$Dict$foldr,
      F3(function (key, value, keyList) {
        return A2($elm$core$List$cons, key, keyList);
      }),
      _List_Nil,
      dict
    );
  };
  var $elm$core$Set$toList = function (_v0) {
    var dict = _v0.a;
    return $elm$core$Dict$keys(dict);
  };
  var $elm$core$Basics$EQ = { $: "EQ" };
  var $elm$core$Basics$GT = { $: "GT" };
  var $elm$core$Basics$LT = { $: "LT" };
  var $elm$core$Result$Err = function (a) {
    return { $: "Err", a: a };
  };
  var $elm$json$Json$Decode$Failure = F2(function (a, b) {
    return { $: "Failure", a: a, b: b };
  });
  var $elm$json$Json$Decode$Field = F2(function (a, b) {
    return { $: "Field", a: a, b: b };
  });
  var $elm$json$Json$Decode$Index = F2(function (a, b) {
    return { $: "Index", a: a, b: b };
  });
  var $elm$core$Result$Ok = function (a) {
    return { $: "Ok", a: a };
  };
  var $elm$json$Json$Decode$OneOf = function (a) {
    return { $: "OneOf", a: a };
  };
  var $elm$core$Basics$False = { $: "False" };
  var $elm$core$Basics$add = _Basics_add;
  var $elm$core$Maybe$Just = function (a) {
    return { $: "Just", a: a };
  };
  var $elm$core$Maybe$Nothing = { $: "Nothing" };
  var $elm$core$String$all = _String_all;
  var $elm$core$Basics$and = _Basics_and;
  var $elm$core$Basics$append = _Utils_append;
  var $elm$json$Json$Encode$encode = _Json_encode;
  var $elm$core$String$fromInt = _String_fromNumber;
  var $elm$core$String$join = F2(function (sep, chunks) {
    return A2(_String_join, sep, _List_toArray(chunks));
  });
  var $elm$core$String$split = F2(function (sep, string) {
    return _List_fromArray(A2(_String_split, sep, string));
  });
  var $elm$json$Json$Decode$indent = function (str) {
    return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
  };
  var $elm$core$List$foldl = F3(function (func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;
        var $temp$func = func,
          $temp$acc = A2(func, x, acc),
          $temp$list = xs;
        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  });
  var $elm$core$List$length = function (xs) {
    return A3(
      $elm$core$List$foldl,
      F2(function (_v0, i) {
        return i + 1;
      }),
      0,
      xs
    );
  };
  var $elm$core$List$map2 = _List_map2;
  var $elm$core$Basics$le = _Utils_le;
  var $elm$core$Basics$sub = _Basics_sub;
  var $elm$core$List$rangeHelp = F3(function (lo, hi, list) {
    rangeHelp: while (true) {
      if (_Utils_cmp(lo, hi) < 1) {
        var $temp$lo = lo,
          $temp$hi = hi - 1,
          $temp$list = A2($elm$core$List$cons, hi, list);
        lo = $temp$lo;
        hi = $temp$hi;
        list = $temp$list;
        continue rangeHelp;
      } else {
        return list;
      }
    }
  });
  var $elm$core$List$range = F2(function (lo, hi) {
    return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
  });
  var $elm$core$List$indexedMap = F2(function (f, xs) {
    return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
  });
  var $elm$core$Char$toCode = _Char_toCode;
  var $elm$core$Char$isLower = function (_char) {
    var code = $elm$core$Char$toCode(_char);
    return 97 <= code && code <= 122;
  };
  var $elm$core$Char$isUpper = function (_char) {
    var code = $elm$core$Char$toCode(_char);
    return code <= 90 && 65 <= code;
  };
  var $elm$core$Basics$or = _Basics_or;
  var $elm$core$Char$isAlpha = function (_char) {
    return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
  };
  var $elm$core$Char$isDigit = function (_char) {
    var code = $elm$core$Char$toCode(_char);
    return code <= 57 && 48 <= code;
  };
  var $elm$core$Char$isAlphaNum = function (_char) {
    return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char);
  };
  var $elm$core$List$reverse = function (list) {
    return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
  };
  var $elm$core$String$uncons = _String_uncons;
  var $elm$json$Json$Decode$errorOneOf = F2(function (i, error) {
    return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
  });
  var $elm$json$Json$Decode$errorToString = function (error) {
    return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
  };
  var $elm$json$Json$Decode$errorToStringHelp = F2(function (error, context) {
    errorToStringHelp: while (true) {
      switch (error.$) {
        case "Field":
          var f = error.a;
          var err = error.b;
          var isSimple = (function () {
            var _v1 = $elm$core$String$uncons(f);
            if (_v1.$ === "Nothing") {
              return false;
            } else {
              var _v2 = _v1.a;
              var _char = _v2.a;
              var rest = _v2.b;
              return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
            }
          })();
          var fieldName = isSimple ? "." + f : "['" + (f + "']");
          var $temp$error = err,
            $temp$context = A2($elm$core$List$cons, fieldName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;
        case "Index":
          var i = error.a;
          var err = error.b;
          var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
          var $temp$error = err,
            $temp$context = A2($elm$core$List$cons, indexName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;
        case "OneOf":
          var errors = error.a;
          if (!errors.b) {
            return (
              "Ran into a Json.Decode.oneOf with no possibilities" +
              (function () {
                if (!context.b) {
                  return "!";
                } else {
                  return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                }
              })()
            );
          } else {
            if (!errors.b.b) {
              var err = errors.a;
              var $temp$error = err,
                $temp$context = context;
              error = $temp$error;
              context = $temp$context;
              continue errorToStringHelp;
            } else {
              var starter = (function () {
                if (!context.b) {
                  return "Json.Decode.oneOf";
                } else {
                  return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                }
              })();
              var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
              return A2(
                $elm$core$String$join,
                "\n\n",
                A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors))
              );
            }
          }
        default:
          var msg = error.a;
          var json = error.b;
          var introduction = (function () {
            if (!context.b) {
              return "Problem with the given value:\n\n";
            } else {
              return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
            }
          })();
          return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
      }
    }
  });
  var $elm$core$Array$branchFactor = 32;
  var $elm$core$Array$Array_elm_builtin = F4(function (a, b, c, d) {
    return { $: "Array_elm_builtin", a: a, b: b, c: c, d: d };
  });
  var $elm$core$Elm$JsArray$empty = _JsArray_empty;
  var $elm$core$Basics$ceiling = _Basics_ceiling;
  var $elm$core$Basics$fdiv = _Basics_fdiv;
  var $elm$core$Basics$logBase = F2(function (base, number) {
    return _Basics_log(number) / _Basics_log(base);
  });
  var $elm$core$Basics$toFloat = _Basics_toFloat;
  var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
  var $elm$core$Array$empty = A4(
    $elm$core$Array$Array_elm_builtin,
    0,
    $elm$core$Array$shiftStep,
    $elm$core$Elm$JsArray$empty,
    $elm$core$Elm$JsArray$empty
  );
  var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
  var $elm$core$Array$Leaf = function (a) {
    return { $: "Leaf", a: a };
  };
  var $elm$core$Basics$apL = F2(function (f, x) {
    return f(x);
  });
  var $elm$core$Basics$apR = F2(function (x, f) {
    return f(x);
  });
  var $elm$core$Basics$eq = _Utils_equal;
  var $elm$core$Basics$floor = _Basics_floor;
  var $elm$core$Elm$JsArray$length = _JsArray_length;
  var $elm$core$Basics$gt = _Utils_gt;
  var $elm$core$Basics$max = F2(function (x, y) {
    return _Utils_cmp(x, y) > 0 ? x : y;
  });
  var $elm$core$Basics$mul = _Basics_mul;
  var $elm$core$Array$SubTree = function (a) {
    return { $: "SubTree", a: a };
  };
  var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
  var $elm$core$Array$compressNodes = F2(function (nodes, acc) {
    compressNodes: while (true) {
      var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
      var node = _v0.a;
      var remainingNodes = _v0.b;
      var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
      if (!remainingNodes.b) {
        return $elm$core$List$reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
          $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  });
  var $elm$core$Tuple$first = function (_v0) {
    var x = _v0.a;
    return x;
  };
  var $elm$core$Array$treeFromBuilder = F2(function (nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
      if (newNodeSize === 1) {
        return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
      } else {
        var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
          $temp$nodeListSize = newNodeSize;
        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  });
  var $elm$core$Array$builderToArray = F2(function (reverseNodeList, builder) {
    if (!builder.nodeListSize) {
      return A4(
        $elm$core$Array$Array_elm_builtin,
        $elm$core$Elm$JsArray$length(builder.tail),
        $elm$core$Array$shiftStep,
        $elm$core$Elm$JsArray$empty,
        builder.tail
      );
    } else {
      var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
      var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
      var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
      var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
      return A4(
        $elm$core$Array$Array_elm_builtin,
        $elm$core$Elm$JsArray$length(builder.tail) + treeLen,
        A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
        tree,
        builder.tail
      );
    }
  });
  var $elm$core$Basics$idiv = _Basics_idiv;
  var $elm$core$Basics$lt = _Utils_lt;
  var $elm$core$Array$initializeHelp = F5(function (fn, fromIndex, len, nodeList, tail) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return A2($elm$core$Array$builderToArray, false, { nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail });
      } else {
        var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
        var $temp$fn = fn,
          $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
          $temp$len = len,
          $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
          $temp$tail = tail;
        fn = $temp$fn;
        fromIndex = $temp$fromIndex;
        len = $temp$len;
        nodeList = $temp$nodeList;
        tail = $temp$tail;
        continue initializeHelp;
      }
    }
  });
  var $elm$core$Basics$remainderBy = _Basics_remainderBy;
  var $elm$core$Array$initialize = F2(function (len, fn) {
    if (len <= 0) {
      return $elm$core$Array$empty;
    } else {
      var tailLen = len % $elm$core$Array$branchFactor;
      var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
      var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
      return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
    }
  });
  var $elm$core$Basics$True = { $: "True" };
  var $elm$core$Result$isOk = function (result) {
    if (result.$ === "Ok") {
      return true;
    } else {
      return false;
    }
  };
  var $elm$json$Json$Decode$andThen = _Json_andThen;
  var $MartinSStewart$elm_audio$Audio$LoopConfig = F2(function (loopStart, loopEnd) {
    return { loopEnd: loopEnd, loopStart: loopStart };
  });
  var $elm$core$Basics$identity = function (x) {
    return x;
  };
  var $ianmackenzie$elm_units$Quantity$Quantity = function (a) {
    return { $: "Quantity", a: a };
  };
  var $ianmackenzie$elm_units$Quantity$zero = $ianmackenzie$elm_units$Quantity$Quantity(0);
  var $MartinSStewart$elm_audio$Audio$audioDefaultConfig = {
    loop: $elm$core$Maybe$Nothing,
    playbackRate: 1,
    startAt: $ianmackenzie$elm_units$Quantity$zero,
  };
  var $MartinSStewart$elm_audio$Audio$BasicAudio = function (a) {
    return { $: "BasicAudio", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$audioWithConfig = F3(function (audioSettings, source, startTime) {
    return $MartinSStewart$elm_audio$Audio$BasicAudio({ settings: audioSettings, source: source, startTime: startTime });
  });
  var $MartinSStewart$elm_audio$Audio$audio = F2(function (source, startTime) {
    return A3($MartinSStewart$elm_audio$Audio$audioWithConfig, $MartinSStewart$elm_audio$Audio$audioDefaultConfig, source, startTime);
  });
  var $MartinSStewart$elm_audio$Audio$audioSourceBufferId = function (_v0) {
    var audioSource = _v0.a;
    return audioSource.bufferId;
  };
  var $elm$core$Basics$compare = _Utils_compare;
  var $elm$core$Dict$get = F2(function (targetKey, dict) {
    get: while (true) {
      if (dict.$ === "RBEmpty_elm_builtin") {
        return $elm$core$Maybe$Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;
        var _v1 = A2($elm$core$Basics$compare, targetKey, key);
        switch (_v1.$) {
          case "LT":
            var $temp$targetKey = targetKey,
              $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;
          case "EQ":
            return $elm$core$Maybe$Just(value);
          default:
            var $temp$targetKey = targetKey,
              $temp$dict = right;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;
        }
      }
    }
  });
  var $elm$core$Maybe$map = F2(function (f, maybe) {
    if (maybe.$ === "Just") {
      var value = maybe.a;
      return $elm$core$Maybe$Just(f(value));
    } else {
      return $elm$core$Maybe$Nothing;
    }
  });
  var $MartinSStewart$elm_audio$Audio$rawBufferId = function (_v0) {
    var bufferId = _v0.a;
    return bufferId;
  };
  var $elm$core$Maybe$withDefault = F2(function (_default, maybe) {
    if (maybe.$ === "Just") {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  });
  var $MartinSStewart$elm_audio$Audio$length = F2(function (_v0, source) {
    var audioData_ = _v0.a;
    return A2(
      $elm$core$Maybe$withDefault,
      $ianmackenzie$elm_units$Quantity$zero,
      A2(
        $elm$core$Maybe$map,
        function ($) {
          return $.duration;
        },
        A2(
          $elm$core$Dict$get,
          $MartinSStewart$elm_audio$Audio$rawBufferId($MartinSStewart$elm_audio$Audio$audioSourceBufferId(source)),
          audioData_.sourceData
        )
      )
    );
  });
  var $elm$core$List$foldrHelper = F4(function (fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;
      if (!r1.b) {
        return A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;
        if (!r2.b) {
          return A2(fn, a, A2(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;
          if (!r3.b) {
            return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res =
              ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
            return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
          }
        }
      }
    }
  });
  var $elm$core$List$foldr = F3(function (fn, acc, ls) {
    return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
  });
  var $elm$core$List$map = F2(function (f, xs) {
    return A3(
      $elm$core$List$foldr,
      F2(function (x, acc) {
        return A2($elm$core$List$cons, f(x), acc);
      }),
      _List_Nil,
      xs
    );
  });
  var $ianmackenzie$elm_units$Duration$seconds = function (numSeconds) {
    return $ianmackenzie$elm_units$Quantity$Quantity(numSeconds);
  };
  var $author$project$Lib$Audio$Audio$getAudio = F2(function (ad, repo) {
    return A2(
      $elm$core$List$map,
      function (_v0) {
        var sound = _v0.b;
        var _v1 = _v0.c;
        var opt = _v1.a;
        var s = _v1.b;
        if (opt.$ === "ALoop") {
          var _default = $MartinSStewart$elm_audio$Audio$audioDefaultConfig;
          return A3(
            $MartinSStewart$elm_audio$Audio$audioWithConfig,
            _Utils_update(_default, {
              loop: $elm$core$Maybe$Just(
                A2(
                  $MartinSStewart$elm_audio$Audio$LoopConfig,
                  $ianmackenzie$elm_units$Duration$seconds(0),
                  A2($MartinSStewart$elm_audio$Audio$length, ad, sound)
                )
              ),
            }),
            sound,
            s
          );
        } else {
          return A2($MartinSStewart$elm_audio$Audio$audio, sound, s);
        }
      },
      repo
    );
  });
  var $MartinSStewart$elm_audio$Audio$Group = function (a) {
    return { $: "Group", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$group = function (audios) {
    return $MartinSStewart$elm_audio$Audio$Group(audios);
  };
  var $MartinSStewart$elm_audio$Audio$Effect = function (a) {
    return { $: "Effect", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$ScaleVolume = function (a) {
    return { $: "ScaleVolume", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$scaleVolume = F2(function (scaleBy, audio_) {
    return $MartinSStewart$elm_audio$Audio$Effect({
      audio: audio_,
      effectType: $MartinSStewart$elm_audio$Audio$ScaleVolume({
        scaleBy: A2($elm$core$Basics$max, 0, scaleBy),
      }),
    });
  });
  var $author$project$Common$audio = F2(function (ad, model) {
    return A2(
      $MartinSStewart$elm_audio$Audio$scaleVolume,
      model.currentGlobalData.localStorage.volume,
      $MartinSStewart$elm_audio$Audio$group(A2($author$project$Lib$Audio$Audio$getAudio, ad, model.audiorepo))
    );
  });
  var $elm$json$Json$Decode$value = _Json_decodeValue;
  var $author$project$Lib$Audio$Audio$audioPortFromJS = _Platform_incomingPort("audioPortFromJS", $elm$json$Json$Decode$value);
  var $author$project$Lib$Audio$Audio$audioPortToJS = _Platform_outgoingPort("audioPortToJS", $elm$core$Basics$identity);
  var $MartinSStewart$elm_audio$Audio$UserMsg = function (a) {
    return { $: "UserMsg", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$AudioData = function (a) {
    return { $: "AudioData", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$audioData = function (_v0) {
    var model = _v0.a;
    return $MartinSStewart$elm_audio$Audio$AudioData({ sourceData: model.sourceData });
  };
  var $elm$core$Basics$composeR = F3(function (f, g, x) {
    return g(f(x));
  });
  var $elm$json$Json$Decode$map = _Json_map1;
  var $elm$json$Json$Decode$map2 = _Json_map2;
  var $elm$json$Json$Decode$succeed = _Json_succeed;
  var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
    switch (handler.$) {
      case "Normal":
        return 0;
      case "MayStopPropagation":
        return 1;
      case "MayPreventDefault":
        return 2;
      default:
        return 3;
    }
  };
  var $elm$browser$Browser$External = function (a) {
    return { $: "External", a: a };
  };
  var $elm$browser$Browser$Internal = function (a) {
    return { $: "Internal", a: a };
  };
  var $elm$browser$Browser$Dom$NotFound = function (a) {
    return { $: "NotFound", a: a };
  };
  var $elm$url$Url$Http = { $: "Http" };
  var $elm$url$Url$Https = { $: "Https" };
  var $elm$url$Url$Url = F6(function (protocol, host, port_, path, query, fragment) {
    return { fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query };
  });
  var $elm$core$String$contains = _String_contains;
  var $elm$core$String$length = _String_length;
  var $elm$core$String$slice = _String_slice;
  var $elm$core$String$dropLeft = F2(function (n, string) {
    return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
  });
  var $elm$core$String$indexes = _String_indexes;
  var $elm$core$String$isEmpty = function (string) {
    return string === "";
  };
  var $elm$core$String$left = F2(function (n, string) {
    return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
  });
  var $elm$core$String$toInt = _String_toInt;
  var $elm$url$Url$chompBeforePath = F5(function (protocol, path, params, frag, str) {
    if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, "@", str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, ":", str);
      if (!_v0.b) {
        return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
      } else {
        if (!_v0.b.b) {
          var i = _v0.a;
          var _v1 = $elm$core$String$toInt(A2($elm$core$String$dropLeft, i + 1, str));
          if (_v1.$ === "Nothing") {
            return $elm$core$Maybe$Nothing;
          } else {
            var port_ = _v1;
            return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, A2($elm$core$String$left, i, str), port_, path, params, frag));
          }
        } else {
          return $elm$core$Maybe$Nothing;
        }
      }
    }
  });
  var $elm$url$Url$chompBeforeQuery = F4(function (protocol, params, frag, str) {
    if ($elm$core$String$isEmpty(str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, "/", str);
      if (!_v0.b) {
        return A5($elm$url$Url$chompBeforePath, protocol, "/", params, frag, str);
      } else {
        var i = _v0.a;
        return A5($elm$url$Url$chompBeforePath, protocol, A2($elm$core$String$dropLeft, i, str), params, frag, A2($elm$core$String$left, i, str));
      }
    }
  });
  var $elm$url$Url$chompBeforeFragment = F3(function (protocol, frag, str) {
    if ($elm$core$String$isEmpty(str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, "?", str);
      if (!_v0.b) {
        return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
      } else {
        var i = _v0.a;
        return A4(
          $elm$url$Url$chompBeforeQuery,
          protocol,
          $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)),
          frag,
          A2($elm$core$String$left, i, str)
        );
      }
    }
  });
  var $elm$url$Url$chompAfterProtocol = F2(function (protocol, str) {
    if ($elm$core$String$isEmpty(str)) {
      return $elm$core$Maybe$Nothing;
    } else {
      var _v0 = A2($elm$core$String$indexes, "#", str);
      if (!_v0.b) {
        return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
      } else {
        var i = _v0.a;
        return A3(
          $elm$url$Url$chompBeforeFragment,
          protocol,
          $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)),
          A2($elm$core$String$left, i, str)
        );
      }
    }
  });
  var $elm$core$String$startsWith = _String_startsWith;
  var $elm$url$Url$fromString = function (str) {
    return A2($elm$core$String$startsWith, "http://", str)
      ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Http, A2($elm$core$String$dropLeft, 7, str))
      : A2($elm$core$String$startsWith, "https://", str)
        ? A2($elm$url$Url$chompAfterProtocol, $elm$url$Url$Https, A2($elm$core$String$dropLeft, 8, str))
        : $elm$core$Maybe$Nothing;
  };
  var $elm$core$Basics$never = function (_v0) {
    never: while (true) {
      var nvr = _v0.a;
      var $temp$_v0 = nvr;
      _v0 = $temp$_v0;
      continue never;
    }
  };
  var $elm$core$Task$Perform = function (a) {
    return { $: "Perform", a: a };
  };
  var $elm$core$Task$succeed = _Scheduler_succeed;
  var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
  var $elm$core$Task$andThen = _Scheduler_andThen;
  var $elm$core$Task$map = F2(function (func, taskA) {
    return A2(
      $elm$core$Task$andThen,
      function (a) {
        return $elm$core$Task$succeed(func(a));
      },
      taskA
    );
  });
  var $elm$core$Task$map2 = F3(function (func, taskA, taskB) {
    return A2(
      $elm$core$Task$andThen,
      function (a) {
        return A2(
          $elm$core$Task$andThen,
          function (b) {
            return $elm$core$Task$succeed(A2(func, a, b));
          },
          taskB
        );
      },
      taskA
    );
  });
  var $elm$core$Task$sequence = function (tasks) {
    return A3($elm$core$List$foldr, $elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
  };
  var $elm$core$Platform$sendToApp = _Platform_sendToApp;
  var $elm$core$Task$spawnCmd = F2(function (router, _v0) {
    var task = _v0.a;
    return _Scheduler_spawn(A2($elm$core$Task$andThen, $elm$core$Platform$sendToApp(router), task));
  });
  var $elm$core$Task$onEffects = F3(function (router, commands, state) {
    return A2(
      $elm$core$Task$map,
      function (_v0) {
        return _Utils_Tuple0;
      },
      $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Task$spawnCmd(router), commands))
    );
  });
  var $elm$core$Task$onSelfMsg = F3(function (_v0, _v1, _v2) {
    return $elm$core$Task$succeed(_Utils_Tuple0);
  });
  var $elm$core$Task$cmdMap = F2(function (tagger, _v0) {
    var task = _v0.a;
    return $elm$core$Task$Perform(A2($elm$core$Task$map, tagger, task));
  });
  _Platform_effectManagers["Task"] = _Platform_createManager(
    $elm$core$Task$init,
    $elm$core$Task$onEffects,
    $elm$core$Task$onSelfMsg,
    $elm$core$Task$cmdMap
  );
  var $elm$core$Task$command = _Platform_leaf("Task");
  var $elm$core$Task$perform = F2(function (toMessage, task) {
    return $elm$core$Task$command($elm$core$Task$Perform(A2($elm$core$Task$map, toMessage, task)));
  });
  var $elm$browser$Browser$element = _Browser_element;
  var $MartinSStewart$elm_audio$Audio$getUserModel = function (_v0) {
    var model = _v0.a;
    return model.userModel;
  };
  var $MartinSStewart$elm_audio$Audio$Model = function (a) {
    return { $: "Model", a: a };
  };
  var $elm$core$Platform$Cmd$batch = _Platform_batch;
  var $ianmackenzie$elm_units$Duration$inSeconds = function (_v0) {
    var numSeconds = _v0.a;
    return numSeconds;
  };
  var $ianmackenzie$elm_units$Duration$inMilliseconds = function (duration) {
    return $ianmackenzie$elm_units$Duration$inSeconds(duration) * 1000;
  };
  var $elm$time$Time$Posix = function (a) {
    return { $: "Posix", a: a };
  };
  var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
  var $elm$time$Time$posixToMillis = function (_v0) {
    var millis = _v0.a;
    return millis;
  };
  var $elm$core$Basics$round = _Basics_round;
  var $ianmackenzie$elm_units$Duration$addTo = F2(function (time, duration) {
    return $elm$time$Time$millisToPosix(
      $elm$time$Time$posixToMillis(time) + $elm$core$Basics$round($ianmackenzie$elm_units$Duration$inMilliseconds(duration))
    );
  });
  var $MartinSStewart$elm_audio$Audio$audioStartTime = function (audio_) {
    return A2($ianmackenzie$elm_units$Duration$addTo, audio_.startTime, audio_.offset);
  };
  var $elm$json$Json$Encode$int = _Json_wrap;
  var $MartinSStewart$elm_audio$Audio$encodeBufferId = function (_v0) {
    var bufferId = _v0.a;
    return $elm$json$Json$Encode$int(bufferId);
  };
  var $elm$json$Json$Encode$float = _Json_wrap;
  var $MartinSStewart$elm_audio$Audio$encodeDuration = A2(
    $elm$core$Basics$composeR,
    $ianmackenzie$elm_units$Duration$inMilliseconds,
    $elm$json$Json$Encode$float
  );
  var $elm$json$Json$Encode$null = _Json_encodeNull;
  var $elm$json$Json$Encode$object = function (pairs) {
    return _Json_wrap(
      A3(
        $elm$core$List$foldl,
        F2(function (_v0, obj) {
          var k = _v0.a;
          var v = _v0.b;
          return A3(_Json_addField, k, v, obj);
        }),
        _Json_emptyObject(_Utils_Tuple0),
        pairs
      )
    );
  };
  var $MartinSStewart$elm_audio$Audio$encodeLoopConfig = function (maybeLoop) {
    if (maybeLoop.$ === "Just") {
      var loop = maybeLoop.a;
      return $elm$json$Json$Encode$object(
        _List_fromArray([
          _Utils_Tuple2("loopStart", $MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopStart)),
          _Utils_Tuple2("loopEnd", $MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopEnd)),
        ])
      );
    } else {
      return $elm$json$Json$Encode$null;
    }
  };
  var $MartinSStewart$elm_audio$Audio$encodeTime = A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$json$Json$Encode$int);
  var $elm$json$Json$Encode$list = F2(function (func, entries) {
    return _Json_wrap(A3($elm$core$List$foldl, _Json_addEntry(func), _Json_emptyArray(_Utils_Tuple0), entries));
  });
  var $mgold$elm_nonempty_list$List$Nonempty$toList = function (_v0) {
    var x = _v0.a;
    var xs = _v0.b;
    return A2($elm$core$List$cons, x, xs);
  };
  var $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline = function (volumeTimeline) {
    return A2(
      $elm$json$Json$Encode$list,
      function (_v0) {
        var time = _v0.a;
        var volume = _v0.b;
        return $elm$json$Json$Encode$object(
          _List_fromArray([
            _Utils_Tuple2("time", $MartinSStewart$elm_audio$Audio$encodeTime(time)),
            _Utils_Tuple2("volume", $elm$json$Json$Encode$float(volume)),
          ])
        );
      },
      $mgold$elm_nonempty_list$List$Nonempty$toList(volumeTimeline)
    );
  };
  var $elm$json$Json$Encode$string = _Json_wrap;
  var $mgold$elm_nonempty_list$List$Nonempty$Nonempty = F2(function (a, b) {
    return { $: "Nonempty", a: a, b: b };
  });
  var $mgold$elm_nonempty_list$List$Nonempty$map = F2(function (f, _v0) {
    var x = _v0.a;
    var xs = _v0.b;
    return A2($mgold$elm_nonempty_list$List$Nonempty$Nonempty, f(x), A2($elm$core$List$map, f, xs));
  });
  var $elm$core$Tuple$mapFirst = F2(function (func, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Utils_Tuple2(func(x), y);
  });
  var $MartinSStewart$elm_audio$Audio$volumeTimelines = function (audio_) {
    return A2(
      $elm$core$List$map,
      $mgold$elm_nonempty_list$List$Nonempty$map(
        $elm$core$Tuple$mapFirst(function (a) {
          return A2($ianmackenzie$elm_units$Duration$addTo, a, audio_.offset);
        })
      ),
      audio_.volumeTimelines
    );
  };
  var $MartinSStewart$elm_audio$Audio$encodeStartSound = F2(function (nodeGroupId, audio_) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("action", $elm$json$Json$Encode$string("startSound")),
        _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
        _Utils_Tuple2("bufferId", $MartinSStewart$elm_audio$Audio$encodeBufferId($MartinSStewart$elm_audio$Audio$audioSourceBufferId(audio_.source))),
        _Utils_Tuple2("startTime", $MartinSStewart$elm_audio$Audio$encodeTime($MartinSStewart$elm_audio$Audio$audioStartTime(audio_))),
        _Utils_Tuple2("startAt", $MartinSStewart$elm_audio$Audio$encodeDuration(audio_.startAt)),
        _Utils_Tuple2("volume", $elm$json$Json$Encode$float(audio_.volume)),
        _Utils_Tuple2(
          "volumeTimelines",
          A2(
            $elm$json$Json$Encode$list,
            $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline,
            $MartinSStewart$elm_audio$Audio$volumeTimelines(audio_)
          )
        ),
        _Utils_Tuple2("loop", $MartinSStewart$elm_audio$Audio$encodeLoopConfig(audio_.loop)),
        _Utils_Tuple2("playbackRate", $elm$json$Json$Encode$float(audio_.playbackRate)),
      ])
    );
  });
  var $elm$core$List$append = F2(function (xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
    }
  });
  var $elm$core$List$concat = function (lists) {
    return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
  };
  var $ianmackenzie$elm_units$Quantity$plus = F2(function (_v0, _v1) {
    var y = _v0.a;
    var x = _v1.a;
    return $ianmackenzie$elm_units$Quantity$Quantity(x + y);
  });
  var $MartinSStewart$elm_audio$Audio$flattenAudio = function (audio_) {
    switch (audio_.$) {
      case "Group":
        var group_ = audio_.a;
        return $elm$core$List$concat(A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudio, group_));
      case "BasicAudio":
        var source = audio_.a.source;
        var startTime = audio_.a.startTime;
        var settings = audio_.a.settings;
        return _List_fromArray([
          {
            loop: settings.loop,
            offset: $ianmackenzie$elm_units$Quantity$zero,
            playbackRate: settings.playbackRate,
            source: source,
            startAt: settings.startAt,
            startTime: startTime,
            volume: 1,
            volumeTimelines: _List_Nil,
          },
        ]);
      default:
        var effect = audio_.a;
        var _v1 = effect.effectType;
        switch (_v1.$) {
          case "ScaleVolume":
            var scaleVolume_ = _v1.a;
            return A2(
              $elm$core$List$map,
              function (a) {
                return _Utils_update(a, { volume: scaleVolume_.scaleBy * a.volume });
              },
              $MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio)
            );
          case "ScaleVolumeAt":
            var volumeAt = _v1.a.volumeAt;
            return A2(
              $elm$core$List$map,
              function (a) {
                return _Utils_update(a, {
                  volumeTimelines: A2($elm$core$List$cons, volumeAt, a.volumeTimelines),
                });
              },
              $MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio)
            );
          default:
            var duration = _v1.a;
            return A2(
              $elm$core$List$map,
              function (a) {
                return _Utils_update(a, {
                  offset: A2($ianmackenzie$elm_units$Quantity$plus, duration, a.offset),
                });
              },
              $MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio)
            );
        }
    }
  };
  var $elm$core$Dict$Black = { $: "Black" };
  var $elm$core$Dict$RBNode_elm_builtin = F5(function (a, b, c, d, e) {
    return { $: "RBNode_elm_builtin", a: a, b: b, c: c, d: d, e: e };
  });
  var $elm$core$Dict$RBEmpty_elm_builtin = { $: "RBEmpty_elm_builtin" };
  var $elm$core$Dict$Red = { $: "Red" };
  var $elm$core$Dict$balance = F5(function (color, key, value, left, right) {
    if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
      var _v1 = right.a;
      var rK = right.b;
      var rV = right.c;
      var rLeft = right.d;
      var rRight = right.e;
      if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
        var _v3 = left.a;
        var lK = left.b;
        var lV = left.c;
        var lLeft = left.d;
        var lRight = left.e;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          $elm$core$Dict$Red,
          key,
          value,
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight)
        );
      } else {
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          color,
          rK,
          rV,
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
          rRight
        );
      }
    } else {
      if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red" && left.d.$ === "RBNode_elm_builtin" && left.d.a.$ === "Red") {
        var _v5 = left.a;
        var lK = left.b;
        var lV = left.c;
        var _v6 = left.d;
        var _v7 = _v6.a;
        var llK = _v6.b;
        var llV = _v6.c;
        var llLeft = _v6.d;
        var llRight = _v6.e;
        var lRight = left.e;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          $elm$core$Dict$Red,
          lK,
          lV,
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right)
        );
      } else {
        return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
      }
    }
  });
  var $elm$core$Dict$insertHelp = F3(function (key, value, dict) {
    if (dict.$ === "RBEmpty_elm_builtin") {
      return A5(
        $elm$core$Dict$RBNode_elm_builtin,
        $elm$core$Dict$Red,
        key,
        value,
        $elm$core$Dict$RBEmpty_elm_builtin,
        $elm$core$Dict$RBEmpty_elm_builtin
      );
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;
      var _v1 = A2($elm$core$Basics$compare, key, nKey);
      switch (_v1.$) {
        case "LT":
          return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
        case "EQ":
          return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
        default:
          return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
      }
    }
  });
  var $elm$core$Dict$insert = F3(function (key, value, dict) {
    var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
    if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  });
  var $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig = F2(function (nodeGroupId, loop) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
        _Utils_Tuple2("action", $elm$json$Json$Encode$string("setLoopConfig")),
        _Utils_Tuple2("loop", $MartinSStewart$elm_audio$Audio$encodeLoopConfig(loop)),
      ])
    );
  });
  var $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate = F2(function (nodeGroupId, playbackRate) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
        _Utils_Tuple2("action", $elm$json$Json$Encode$string("setPlaybackRate")),
        _Utils_Tuple2("playbackRate", $elm$json$Json$Encode$float(playbackRate)),
      ])
    );
  });
  var $MartinSStewart$elm_audio$Audio$encodeSetVolume = F2(function (nodeGroupId, volume) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
        _Utils_Tuple2("action", $elm$json$Json$Encode$string("setVolume")),
        _Utils_Tuple2("volume", $elm$json$Json$Encode$float(volume)),
      ])
    );
  });
  var $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt = F2(function (nodeGroupId, volumeTimelines_) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
        _Utils_Tuple2("action", $elm$json$Json$Encode$string("setVolumeAt")),
        _Utils_Tuple2("volumeAt", A2($elm$json$Json$Encode$list, $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline, volumeTimelines_)),
      ])
    );
  });
  var $MartinSStewart$elm_audio$Audio$encodeStopSound = function (nodeGroupId) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("action", $elm$json$Json$Encode$string("stopSound")),
        _Utils_Tuple2("nodeGroupId", $elm$json$Json$Encode$int(nodeGroupId)),
      ])
    );
  };
  var $elm$core$List$filter = F2(function (isGood, list) {
    return A3(
      $elm$core$List$foldr,
      F2(function (x, xs) {
        return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
      }),
      _List_Nil,
      list
    );
  });
  var $elm$core$List$maybeCons = F3(function (f, mx, xs) {
    var _v0 = f(mx);
    if (_v0.$ === "Just") {
      var x = _v0.a;
      return A2($elm$core$List$cons, x, xs);
    } else {
      return xs;
    }
  });
  var $elm$core$List$filterMap = F2(function (f, xs) {
    return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
  });
  var $MartinSStewart$elm_audio$Audio$find = F2(function (predicate, list) {
    find: while (true) {
      if (!list.b) {
        return $elm$core$Maybe$Nothing;
      } else {
        var first = list.a;
        var rest = list.b;
        if (predicate(first)) {
          return $elm$core$Maybe$Just(first);
        } else {
          var $temp$predicate = predicate,
            $temp$list = rest;
          predicate = $temp$predicate;
          list = $temp$list;
          continue find;
        }
      }
    }
  });
  var $elm$core$Tuple$pair = F2(function (a, b) {
    return _Utils_Tuple2(a, b);
  });
  var $elm$core$Dict$getMin = function (dict) {
    getMin: while (true) {
      if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
        var left = dict.d;
        var $temp$dict = left;
        dict = $temp$dict;
        continue getMin;
      } else {
        return dict;
      }
    }
  };
  var $elm$core$Dict$moveRedLeft = function (dict) {
    if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
      if (dict.e.d.$ === "RBNode_elm_builtin" && dict.e.d.a.$ === "Red") {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v1 = dict.d;
        var lClr = _v1.a;
        var lK = _v1.b;
        var lV = _v1.c;
        var lLeft = _v1.d;
        var lRight = _v1.e;
        var _v2 = dict.e;
        var rClr = _v2.a;
        var rK = _v2.b;
        var rV = _v2.c;
        var rLeft = _v2.d;
        var _v3 = rLeft.a;
        var rlK = rLeft.b;
        var rlV = rLeft.c;
        var rlL = rLeft.d;
        var rlR = rLeft.e;
        var rRight = _v2.e;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          $elm$core$Dict$Red,
          rlK,
          rlV,
          A5(
            $elm$core$Dict$RBNode_elm_builtin,
            $elm$core$Dict$Black,
            k,
            v,
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
            rlL
          ),
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight)
        );
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v4 = dict.d;
        var lClr = _v4.a;
        var lK = _v4.b;
        var lV = _v4.c;
        var lLeft = _v4.d;
        var lRight = _v4.e;
        var _v5 = dict.e;
        var rClr = _v5.a;
        var rK = _v5.b;
        var rV = _v5.c;
        var rLeft = _v5.d;
        var rRight = _v5.e;
        if (clr.$ === "Black") {
          return A5(
            $elm$core$Dict$RBNode_elm_builtin,
            $elm$core$Dict$Black,
            k,
            v,
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
          );
        } else {
          return A5(
            $elm$core$Dict$RBNode_elm_builtin,
            $elm$core$Dict$Black,
            k,
            v,
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
          );
        }
      }
    } else {
      return dict;
    }
  };
  var $elm$core$Dict$moveRedRight = function (dict) {
    if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
      if (dict.d.d.$ === "RBNode_elm_builtin" && dict.d.d.a.$ === "Red") {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v1 = dict.d;
        var lClr = _v1.a;
        var lK = _v1.b;
        var lV = _v1.c;
        var _v2 = _v1.d;
        var _v3 = _v2.a;
        var llK = _v2.b;
        var llV = _v2.c;
        var llLeft = _v2.d;
        var llRight = _v2.e;
        var lRight = _v1.e;
        var _v4 = dict.e;
        var rClr = _v4.a;
        var rK = _v4.b;
        var rV = _v4.c;
        var rLeft = _v4.d;
        var rRight = _v4.e;
        return A5(
          $elm$core$Dict$RBNode_elm_builtin,
          $elm$core$Dict$Red,
          lK,
          lV,
          A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
          A5(
            $elm$core$Dict$RBNode_elm_builtin,
            $elm$core$Dict$Black,
            k,
            v,
            lRight,
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
          )
        );
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _v5 = dict.d;
        var lClr = _v5.a;
        var lK = _v5.b;
        var lV = _v5.c;
        var lLeft = _v5.d;
        var lRight = _v5.e;
        var _v6 = dict.e;
        var rClr = _v6.a;
        var rK = _v6.b;
        var rV = _v6.c;
        var rLeft = _v6.d;
        var rRight = _v6.e;
        if (clr.$ === "Black") {
          return A5(
            $elm$core$Dict$RBNode_elm_builtin,
            $elm$core$Dict$Black,
            k,
            v,
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
          );
        } else {
          return A5(
            $elm$core$Dict$RBNode_elm_builtin,
            $elm$core$Dict$Black,
            k,
            v,
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
            A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
          );
        }
      }
    } else {
      return dict;
    }
  };
  var $elm$core$Dict$removeHelpPrepEQGT = F7(function (targetKey, dict, color, key, value, left, right) {
    if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
      var _v1 = left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return A5(
        $elm$core$Dict$RBNode_elm_builtin,
        color,
        lK,
        lV,
        lLeft,
        A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right)
      );
    } else {
      _v2$2: while (true) {
        if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Black") {
          if (right.d.$ === "RBNode_elm_builtin") {
            if (right.d.a.$ === "Black") {
              var _v3 = right.a;
              var _v4 = right.d;
              var _v5 = _v4.a;
              return $elm$core$Dict$moveRedRight(dict);
            } else {
              break _v2$2;
            }
          } else {
            var _v6 = right.a;
            var _v7 = right.d;
            return $elm$core$Dict$moveRedRight(dict);
          }
        } else {
          break _v2$2;
        }
      }
      return dict;
    }
  });
  var $elm$core$Dict$removeMin = function (dict) {
    if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var lColor = left.a;
      var lLeft = left.d;
      var right = dict.e;
      if (lColor.$ === "Black") {
        if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
          var _v3 = lLeft.a;
          return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
        } else {
          var _v4 = $elm$core$Dict$moveRedLeft(dict);
          if (_v4.$ === "RBNode_elm_builtin") {
            var nColor = _v4.a;
            var nKey = _v4.b;
            var nValue = _v4.c;
            var nLeft = _v4.d;
            var nRight = _v4.e;
            return A5($elm$core$Dict$balance, nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
          } else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
          }
        }
      } else {
        return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, $elm$core$Dict$removeMin(left), right);
      }
    } else {
      return $elm$core$Dict$RBEmpty_elm_builtin;
    }
  };
  var $elm$core$Dict$removeHelp = F2(function (targetKey, dict) {
    if (dict.$ === "RBEmpty_elm_builtin") {
      return $elm$core$Dict$RBEmpty_elm_builtin;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      if (_Utils_cmp(targetKey, key) < 0) {
        if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Black") {
          var _v4 = left.a;
          var lLeft = left.d;
          if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
            var _v6 = lLeft.a;
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
          } else {
            var _v7 = $elm$core$Dict$moveRedLeft(dict);
            if (_v7.$ === "RBNode_elm_builtin") {
              var nColor = _v7.a;
              var nKey = _v7.b;
              var nValue = _v7.c;
              var nLeft = _v7.d;
              var nRight = _v7.e;
              return A5($elm$core$Dict$balance, nColor, nKey, nValue, A2($elm$core$Dict$removeHelp, targetKey, nLeft), nRight);
            } else {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            }
          }
        } else {
          return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, A2($elm$core$Dict$removeHelp, targetKey, left), right);
        }
      } else {
        return A2($elm$core$Dict$removeHelpEQGT, targetKey, A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
      }
    }
  });
  var $elm$core$Dict$removeHelpEQGT = F2(function (targetKey, dict) {
    if (dict.$ === "RBNode_elm_builtin") {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      if (_Utils_eq(targetKey, key)) {
        var _v1 = $elm$core$Dict$getMin(right);
        if (_v1.$ === "RBNode_elm_builtin") {
          var minKey = _v1.b;
          var minValue = _v1.c;
          return A5($elm$core$Dict$balance, color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      } else {
        return A5($elm$core$Dict$balance, color, key, value, left, A2($elm$core$Dict$removeHelp, targetKey, right));
      }
    } else {
      return $elm$core$Dict$RBEmpty_elm_builtin;
    }
  });
  var $elm$core$Dict$remove = F2(function (key, dict) {
    var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
    if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
      var _v1 = _v0.a;
      var k = _v0.b;
      var v = _v0.c;
      var l = _v0.d;
      var r = _v0.e;
      return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
    } else {
      var x = _v0;
      return x;
    }
  });
  var $elm$core$List$drop = F2(function (n, list) {
    drop: while (true) {
      if (n <= 0) {
        return list;
      } else {
        if (!list.b) {
          return list;
        } else {
          var x = list.a;
          var xs = list.b;
          var $temp$n = n - 1,
            $temp$list = xs;
          n = $temp$n;
          list = $temp$list;
          continue drop;
        }
      }
    }
  });
  var $elm$core$List$tail = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return $elm$core$Maybe$Just(xs);
    } else {
      return $elm$core$Maybe$Nothing;
    }
  };
  var $elm$core$List$takeReverse = F3(function (n, list, kept) {
    takeReverse: while (true) {
      if (n <= 0) {
        return kept;
      } else {
        if (!list.b) {
          return kept;
        } else {
          var x = list.a;
          var xs = list.b;
          var $temp$n = n - 1,
            $temp$list = xs,
            $temp$kept = A2($elm$core$List$cons, x, kept);
          n = $temp$n;
          list = $temp$list;
          kept = $temp$kept;
          continue takeReverse;
        }
      }
    }
  });
  var $elm$core$List$takeTailRec = F2(function (n, list) {
    return $elm$core$List$reverse(A3($elm$core$List$takeReverse, n, list, _List_Nil));
  });
  var $elm$core$List$takeFast = F3(function (ctr, n, list) {
    if (n <= 0) {
      return _List_Nil;
    } else {
      var _v0 = _Utils_Tuple2(n, list);
      _v0$1: while (true) {
        _v0$5: while (true) {
          if (!_v0.b.b) {
            return list;
          } else {
            if (_v0.b.b.b) {
              switch (_v0.a) {
                case 1:
                  break _v0$1;
                case 2:
                  var _v2 = _v0.b;
                  var x = _v2.a;
                  var _v3 = _v2.b;
                  var y = _v3.a;
                  return _List_fromArray([x, y]);
                case 3:
                  if (_v0.b.b.b.b) {
                    var _v4 = _v0.b;
                    var x = _v4.a;
                    var _v5 = _v4.b;
                    var y = _v5.a;
                    var _v6 = _v5.b;
                    var z = _v6.a;
                    return _List_fromArray([x, y, z]);
                  } else {
                    break _v0$5;
                  }
                default:
                  if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                    var _v7 = _v0.b;
                    var x = _v7.a;
                    var _v8 = _v7.b;
                    var y = _v8.a;
                    var _v9 = _v8.b;
                    var z = _v9.a;
                    var _v10 = _v9.b;
                    var w = _v10.a;
                    var tl = _v10.b;
                    return ctr > 1000
                      ? A2(
                          $elm$core$List$cons,
                          x,
                          A2(
                            $elm$core$List$cons,
                            y,
                            A2($elm$core$List$cons, z, A2($elm$core$List$cons, w, A2($elm$core$List$takeTailRec, n - 4, tl)))
                          )
                        )
                      : A2(
                          $elm$core$List$cons,
                          x,
                          A2(
                            $elm$core$List$cons,
                            y,
                            A2($elm$core$List$cons, z, A2($elm$core$List$cons, w, A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))
                          )
                        );
                  } else {
                    break _v0$5;
                  }
              }
            } else {
              if (_v0.a === 1) {
                break _v0$1;
              } else {
                break _v0$5;
              }
            }
          }
        }
        return list;
      }
      var _v1 = _v0.b;
      var x = _v1.a;
      return _List_fromArray([x]);
    }
  });
  var $elm$core$List$take = F2(function (n, list) {
    return A3($elm$core$List$takeFast, 0, n, list);
  });
  var $MartinSStewart$elm_audio$Audio$removeAt = F2(function (index, l) {
    if (index < 0) {
      return l;
    } else {
      var tail = $elm$core$List$tail(A2($elm$core$List$drop, index, l));
      var head = A2($elm$core$List$take, index, l);
      if (tail.$ === "Nothing") {
        return l;
      } else {
        var t = tail.a;
        return A2($elm$core$List$append, head, t);
      }
    }
  });
  var $MartinSStewart$elm_audio$Audio$updateAudioState = F2(function (_v0, _v1) {
    var nodeGroupId = _v0.a;
    var audioGroup = _v0.b;
    var flattenedAudio = _v1.a;
    var audioState = _v1.b;
    var json = _v1.c;
    var validAudio = A2(
      $elm$core$List$filter,
      function (_v7) {
        var a = _v7.b;
        return (
          _Utils_eq(a.source, audioGroup.source) &&
          _Utils_eq($MartinSStewart$elm_audio$Audio$audioStartTime(a), $MartinSStewart$elm_audio$Audio$audioStartTime(audioGroup)) &&
          _Utils_eq(a.startAt, audioGroup.startAt)
        );
      },
      A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, flattenedAudio)
    );
    var _v2 = A2(
      $MartinSStewart$elm_audio$Audio$find,
      function (_v3) {
        var a = _v3.b;
        return _Utils_eq(a, audioGroup);
      },
      validAudio
    );
    if (_v2.$ === "Just") {
      var _v4 = _v2.a;
      var index = _v4.a;
      return _Utils_Tuple3(A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio), audioState, json);
    } else {
      if (validAudio.b) {
        var _v6 = validAudio.a;
        var index = _v6.a;
        var a = _v6.b;
        var encodeValue = F2(function (getter, encoder) {
          return _Utils_eq(getter(audioGroup), getter(a)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(A2(encoder, nodeGroupId, getter(a)));
        });
        var effects = A2(
          $elm$core$List$filterMap,
          $elm$core$Basics$identity,
          _List_fromArray([
            A2(
              encodeValue,
              function ($) {
                return $.volume;
              },
              $MartinSStewart$elm_audio$Audio$encodeSetVolume
            ),
            A2(
              encodeValue,
              function ($) {
                return $.loop;
              },
              $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig
            ),
            A2(
              encodeValue,
              function ($) {
                return $.playbackRate;
              },
              $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate
            ),
            A2(encodeValue, $MartinSStewart$elm_audio$Audio$volumeTimelines, $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt),
          ])
        );
        return _Utils_Tuple3(
          A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
          A3($elm$core$Dict$insert, nodeGroupId, a, audioState),
          _Utils_ap(effects, json)
        );
      } else {
        return _Utils_Tuple3(
          flattenedAudio,
          A2($elm$core$Dict$remove, nodeGroupId, audioState),
          A2($elm$core$List$cons, $MartinSStewart$elm_audio$Audio$encodeStopSound(nodeGroupId), json)
        );
      }
    }
  });
  var $MartinSStewart$elm_audio$Audio$diffAudioState = F3(function (nodeGroupIdCounter, audioState, newAudio) {
    var _v0 = A3(
      $elm$core$List$foldl,
      $MartinSStewart$elm_audio$Audio$updateAudioState,
      _Utils_Tuple3($MartinSStewart$elm_audio$Audio$flattenAudio(newAudio), audioState, _List_Nil),
      $elm$core$Dict$toList(audioState)
    );
    var newAudioLeft = _v0.a;
    var newAudioState = _v0.b;
    var json2 = _v0.c;
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (audioLeft, _v2) {
        var counter = _v2.a;
        var audioState_ = _v2.b;
        var json_ = _v2.c;
        return _Utils_Tuple3(
          counter + 1,
          A3($elm$core$Dict$insert, counter, audioLeft, audioState_),
          A2($elm$core$List$cons, A2($MartinSStewart$elm_audio$Audio$encodeStartSound, counter, audioLeft), json_)
        );
      }),
      _Utils_Tuple3(nodeGroupIdCounter, newAudioState, json2),
      newAudioLeft
    );
    var newNodeGroupIdCounter = _v1.a;
    var newAudioState2 = _v1.b;
    var json3 = _v1.c;
    return _Utils_Tuple3(newAudioState2, newNodeGroupIdCounter, json3);
  });
  var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
  var $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest = F2(function (index, audioLoad) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("audioUrl", $elm$json$Json$Encode$string(audioLoad.audioUrl)),
        _Utils_Tuple2("requestId", $elm$json$Json$Encode$int(index)),
      ])
    );
  });
  var $MartinSStewart$elm_audio$Audio$flattenAudioCmd = function (audioCmd) {
    if (audioCmd.$ === "AudioLoadRequest") {
      var data = audioCmd.a;
      return _List_fromArray([data]);
    } else {
      var list = audioCmd.a;
      return $elm$core$List$concat(A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudioCmd, list));
    }
  };
  var $elm$core$Dict$fromList = function (assocs) {
    return A3(
      $elm$core$List$foldl,
      F2(function (_v0, dict) {
        var key = _v0.a;
        var value = _v0.b;
        return A3($elm$core$Dict$insert, key, value, dict);
      }),
      $elm$core$Dict$empty,
      assocs
    );
  };
  var $elm$core$Dict$foldl = F3(function (func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === "RBEmpty_elm_builtin") {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;
        var $temp$func = func,
          $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldl, func, acc, left)),
          $temp$dict = right;
        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  });
  var $elm$core$Dict$union = F2(function (t1, t2) {
    return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
  });
  var $MartinSStewart$elm_audio$Audio$encodeAudioCmd = F2(function (_v0, audioCmd) {
    var model = _v0.a;
    var flattenedAudioCmd = $MartinSStewart$elm_audio$Audio$flattenAudioCmd(audioCmd);
    var newPendingRequests = A2(
      $elm$core$List$indexedMap,
      F2(function (index, request) {
        return _Utils_Tuple2(model.requestCount + index, request);
      }),
      flattenedAudioCmd
    );
    return _Utils_Tuple2(
      $MartinSStewart$elm_audio$Audio$Model(
        _Utils_update(model, {
          pendingRequests: A2($elm$core$Dict$union, model.pendingRequests, $elm$core$Dict$fromList(newPendingRequests)),
          requestCount: model.requestCount + $elm$core$List$length(flattenedAudioCmd),
        })
      ),
      A2(
        $elm$json$Json$Encode$list,
        $elm$core$Basics$identity,
        A2(
          $elm$core$List$map,
          function (_v1) {
            var index = _v1.a;
            var value = _v1.b;
            return A2($MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest, index, value);
          },
          newPendingRequests
        )
      )
    );
  });
  var $elm$core$Platform$Cmd$map = _Platform_map;
  var $MartinSStewart$elm_audio$Audio$initHelper = F3(function (audioPort, audioFunc, _v0) {
    var model = _v0.a;
    var cmds = _v0.b;
    var audioCmds = _v0.c;
    var _v1 = A3(
      $MartinSStewart$elm_audio$Audio$diffAudioState,
      0,
      $elm$core$Dict$empty,
      A2(audioFunc, $MartinSStewart$elm_audio$Audio$AudioData({ sourceData: $elm$core$Dict$empty }), model)
    );
    var audioState = _v1.a;
    var newNodeGroupIdCounter = _v1.b;
    var json = _v1.c;
    var initialModel = $MartinSStewart$elm_audio$Audio$Model({
      audioState: audioState,
      nodeGroupIdCounter: newNodeGroupIdCounter,
      pendingRequests: $elm$core$Dict$empty,
      requestCount: 0,
      samplesPerSecond: $elm$core$Maybe$Nothing,
      sourceData: $elm$core$Dict$empty,
      userModel: model,
    });
    var _v2 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, initialModel, audioCmds);
    var initialModel2 = _v2.a;
    var audioRequests = _v2.b;
    var portMessage = $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("audio", A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
        _Utils_Tuple2("audioCmds", audioRequests),
      ])
    );
    return _Utils_Tuple2(
      initialModel2,
      $elm$core$Platform$Cmd$batch(
        _List_fromArray([A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, cmds), audioPort(portMessage)])
      )
    );
  });
  var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
  var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
  var $elm$core$Platform$Sub$batch = _Platform_batch;
  var $MartinSStewart$elm_audio$Audio$FromJSMsg = function (a) {
    return { $: "FromJSMsg", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$JsonParseError = function (a) {
    return { $: "JsonParseError", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$AudioLoadFailed = function (a) {
    return { $: "AudioLoadFailed", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$AudioLoadSuccess = function (a) {
    return { $: "AudioLoadSuccess", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$InitAudioContext = function (a) {
    return { $: "InitAudioContext", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$BufferId = function (a) {
    return { $: "BufferId", a: a };
  };
  var $elm$json$Json$Decode$int = _Json_decodeInt;
  var $MartinSStewart$elm_audio$Audio$decodeBufferId = A2(
    $elm$json$Json$Decode$map,
    $MartinSStewart$elm_audio$Audio$BufferId,
    $elm$json$Json$Decode$int
  );
  var $MartinSStewart$elm_audio$Audio$FailedToDecode = { $: "FailedToDecode" };
  var $MartinSStewart$elm_audio$Audio$NetworkError = { $: "NetworkError" };
  var $MartinSStewart$elm_audio$Audio$UnknownError = { $: "UnknownError" };
  var $elm$json$Json$Decode$string = _Json_decodeString;
  var $MartinSStewart$elm_audio$Audio$decodeLoadError = A2(
    $elm$json$Json$Decode$andThen,
    function (value) {
      switch (value) {
        case "NetworkError":
          return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$NetworkError);
        case "MediaDecodeAudioDataUnknownContentType":
          return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
        case "DOMException: The buffer passed to decodeAudioData contains an unknown content type.":
          return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
        default:
          return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$UnknownError);
      }
    },
    $elm$json$Json$Decode$string
  );
  var $elm$json$Json$Decode$field = _Json_decodeField;
  var $elm$json$Json$Decode$float = _Json_decodeFloat;
  var $elm$json$Json$Decode$map3 = _Json_map3;
  var $MartinSStewart$elm_audio$Audio$decodeFromJSMsg = A2(
    $elm$json$Json$Decode$andThen,
    function (value) {
      switch (value) {
        case 0:
          return A3(
            $elm$json$Json$Decode$map2,
            F2(function (requestId, error) {
              return $MartinSStewart$elm_audio$Audio$AudioLoadFailed({ error: error, requestId: requestId });
            }),
            A2($elm$json$Json$Decode$field, "requestId", $elm$json$Json$Decode$int),
            A2($elm$json$Json$Decode$field, "error", $MartinSStewart$elm_audio$Audio$decodeLoadError)
          );
        case 1:
          return A4(
            $elm$json$Json$Decode$map3,
            F3(function (requestId, bufferId, duration) {
              return $MartinSStewart$elm_audio$Audio$AudioLoadSuccess({
                bufferId: bufferId,
                duration: $ianmackenzie$elm_units$Duration$seconds(duration),
                requestId: requestId,
              });
            }),
            A2($elm$json$Json$Decode$field, "requestId", $elm$json$Json$Decode$int),
            A2($elm$json$Json$Decode$field, "bufferId", $MartinSStewart$elm_audio$Audio$decodeBufferId),
            A2($elm$json$Json$Decode$field, "durationInSeconds", $elm$json$Json$Decode$float)
          );
        case 2:
          return A2(
            $elm$json$Json$Decode$map,
            function (samplesPerSecond) {
              return $MartinSStewart$elm_audio$Audio$InitAudioContext({ samplesPerSecond: samplesPerSecond });
            },
            A2($elm$json$Json$Decode$field, "samplesPerSecond", $elm$json$Json$Decode$int)
          );
        default:
          return $elm$json$Json$Decode$succeed(
            $MartinSStewart$elm_audio$Audio$JsonParseError({
              error: "Type " + ($elm$core$String$fromInt(value) + " not handled."),
            })
          );
      }
    },
    A2($elm$json$Json$Decode$field, "type", $elm$json$Json$Decode$int)
  );
  var $elm$json$Json$Decode$decodeValue = _Json_run;
  var $MartinSStewart$elm_audio$Audio$fromJSPortSub = function (json) {
    var _v0 = A2($elm$json$Json$Decode$decodeValue, $MartinSStewart$elm_audio$Audio$decodeFromJSMsg, json);
    if (_v0.$ === "Ok") {
      var value = _v0.a;
      return $MartinSStewart$elm_audio$Audio$FromJSMsg(value);
    } else {
      var error = _v0.a;
      return $MartinSStewart$elm_audio$Audio$FromJSMsg(
        $MartinSStewart$elm_audio$Audio$JsonParseError({
          error: $elm$json$Json$Decode$errorToString(error),
        })
      );
    }
  };
  var $elm$core$Platform$Sub$map = _Platform_map;
  var $MartinSStewart$elm_audio$Audio$subscriptions = F2(function (app, _v0) {
    var model = _v0.a;
    return $elm$core$Platform$Sub$batch(
      _List_fromArray([
        A2(
          $elm$core$Platform$Sub$map,
          $MartinSStewart$elm_audio$Audio$UserMsg,
          A2(app.subscriptions, $MartinSStewart$elm_audio$Audio$audioData($MartinSStewart$elm_audio$Audio$Model(model)), model.userModel)
        ),
        app.audioPort.fromJS($MartinSStewart$elm_audio$Audio$fromJSPortSub),
      ])
    );
  });
  var $MartinSStewart$elm_audio$Audio$File = function (a) {
    return { $: "File", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$flip = F3(function (func, a, b) {
    return A2(func, b, a);
  });
  var $mgold$elm_nonempty_list$List$Nonempty$head = function (_v0) {
    var x = _v0.a;
    var xs = _v0.b;
    return x;
  };
  var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
  var $elm$core$Tuple$second = function (_v0) {
    var y = _v0.b;
    return y;
  };
  var $MartinSStewart$elm_audio$Audio$updateHelper = F4(function (audioPort, audioFunc, userUpdate, _v0) {
    var model = _v0.a;
    var audioData_ = $MartinSStewart$elm_audio$Audio$audioData($MartinSStewart$elm_audio$Audio$Model(model));
    var _v1 = A2(userUpdate, audioData_, model.userModel);
    var newUserModel = _v1.a;
    var userCmd = _v1.b;
    var audioCmds = _v1.c;
    var _v2 = A3($MartinSStewart$elm_audio$Audio$diffAudioState, model.nodeGroupIdCounter, model.audioState, A2(audioFunc, audioData_, newUserModel));
    var audioState = _v2.a;
    var newNodeGroupIdCounter = _v2.b;
    var json = _v2.c;
    var newModel = $MartinSStewart$elm_audio$Audio$Model(
      _Utils_update(model, { audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, userModel: newUserModel })
    );
    var _v3 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, newModel, audioCmds);
    var newModel2 = _v3.a;
    var audioRequests = _v3.b;
    var portMessage = $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("audio", A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
        _Utils_Tuple2("audioCmds", audioRequests),
      ])
    );
    return _Utils_Tuple2(
      newModel2,
      $elm$core$Platform$Cmd$batch(
        _List_fromArray([A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, userCmd), audioPort(portMessage)])
      )
    );
  });
  var $MartinSStewart$elm_audio$Audio$update = F3(function (app, msg, _v0) {
    var model = _v0.a;
    if (msg.$ === "UserMsg") {
      var userMsg = msg.a;
      return A4(
        $MartinSStewart$elm_audio$Audio$updateHelper,
        app.audioPort.toJS,
        app.audio,
        A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
        $MartinSStewart$elm_audio$Audio$Model(model)
      );
    } else {
      var response = msg.a;
      switch (response.$) {
        case "AudioLoadSuccess":
          var requestId = response.a.requestId;
          var bufferId = response.a.bufferId;
          var duration = response.a.duration;
          var _v3 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
          if (_v3.$ === "Just") {
            var pendingRequest = _v3.a;
            var sourceData = A3(
              $elm$core$Dict$insert,
              $MartinSStewart$elm_audio$Audio$rawBufferId(bufferId),
              { duration: duration },
              model.sourceData
            );
            var source = $elm$core$Result$Ok($MartinSStewart$elm_audio$Audio$File({ bufferId: bufferId }));
            var maybeUserMsg = A2(
              $MartinSStewart$elm_audio$Audio$find,
              A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq(source)),
              $mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg)
            );
            if (maybeUserMsg.$ === "Just") {
              var _v5 = maybeUserMsg.a;
              var userMsg = _v5.b;
              return A4(
                $MartinSStewart$elm_audio$Audio$updateHelper,
                app.audioPort.toJS,
                app.audio,
                A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
                $MartinSStewart$elm_audio$Audio$Model(
                  _Utils_update(model, {
                    pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
                    sourceData: sourceData,
                  })
                )
              );
            } else {
              return A4(
                $MartinSStewart$elm_audio$Audio$updateHelper,
                app.audioPort.toJS,
                app.audio,
                A2($MartinSStewart$elm_audio$Audio$flip, app.update, $mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
                $MartinSStewart$elm_audio$Audio$Model(
                  _Utils_update(model, {
                    pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
                    sourceData: sourceData,
                  })
                )
              );
            }
          } else {
            return _Utils_Tuple2($MartinSStewart$elm_audio$Audio$Model(model), $elm$core$Platform$Cmd$none);
          }
        case "AudioLoadFailed":
          var requestId = response.a.requestId;
          var error = response.a.error;
          var _v6 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
          if (_v6.$ === "Just") {
            var pendingRequest = _v6.a;
            var a = $elm$core$Result$Err(error);
            var b = A2(
              $MartinSStewart$elm_audio$Audio$find,
              A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Basics$eq(a)),
              $mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg)
            );
            if (b.$ === "Just") {
              var _v8 = b.a;
              var userMsg = _v8.b;
              return A4(
                $MartinSStewart$elm_audio$Audio$updateHelper,
                app.audioPort.toJS,
                app.audio,
                A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
                $MartinSStewart$elm_audio$Audio$Model(
                  _Utils_update(model, {
                    pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
                  })
                )
              );
            } else {
              return A4(
                $MartinSStewart$elm_audio$Audio$updateHelper,
                app.audioPort.toJS,
                app.audio,
                A2($MartinSStewart$elm_audio$Audio$flip, app.update, $mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
                $MartinSStewart$elm_audio$Audio$Model(
                  _Utils_update(model, {
                    pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
                  })
                )
              );
            }
          } else {
            return _Utils_Tuple2($MartinSStewart$elm_audio$Audio$Model(model), $elm$core$Platform$Cmd$none);
          }
        case "InitAudioContext":
          var samplesPerSecond = response.a.samplesPerSecond;
          return _Utils_Tuple2(
            $MartinSStewart$elm_audio$Audio$Model(
              _Utils_update(model, {
                samplesPerSecond: $elm$core$Maybe$Just(samplesPerSecond),
              })
            ),
            $elm$core$Platform$Cmd$none
          );
        default:
          var error = response.a.error;
          return _Utils_Tuple2($MartinSStewart$elm_audio$Audio$Model(model), $elm$core$Platform$Cmd$none);
      }
    }
  });
  var $ianmackenzie$elm_units$Duration$milliseconds = function (numMilliseconds) {
    return $ianmackenzie$elm_units$Duration$seconds(0.001 * numMilliseconds);
  };
  var $MartinSStewart$elm_audio$Audio$Offset = function (a) {
    return { $: "Offset", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$offsetBy = F2(function (offset_, audio_) {
    return $MartinSStewart$elm_audio$Audio$Effect({
      audio: audio_,
      effectType: $MartinSStewart$elm_audio$Audio$Offset(offset_),
    });
  });
  var $MartinSStewart$elm_audio$Audio$withAudioOffset = function (app) {
    return _Utils_update(app, {
      audio: F2(function (audioData_, model) {
        return A2($MartinSStewart$elm_audio$Audio$offsetBy, $ianmackenzie$elm_units$Duration$milliseconds(50), A2(app.audio, audioData_, model));
      }),
    });
  };
  var $MartinSStewart$elm_audio$Audio$elementWithAudio = A2(
    $elm$core$Basics$composeR,
    $MartinSStewart$elm_audio$Audio$withAudioOffset,
    function (app) {
      return $elm$browser$Browser$element({
        init: A2($elm$core$Basics$composeR, app.init, A2($MartinSStewart$elm_audio$Audio$initHelper, app.audioPort.toJS, app.audio)),
        subscriptions: $MartinSStewart$elm_audio$Audio$subscriptions(app),
        update: $MartinSStewart$elm_audio$Audio$update(app),
        view: function (model) {
          return A2(
            $elm$html$Html$map,
            $MartinSStewart$elm_audio$Audio$UserMsg,
            A2(app.view, $MartinSStewart$elm_audio$Audio$audioData(model), $MartinSStewart$elm_audio$Audio$getUserModel(model))
          );
        },
      });
    }
  );
  var $author$project$Base$NullMsg = { $: "NullMsg" };
  var $MartinSStewart$elm_audio$Audio$AudioCmdGroup = function (a) {
    return { $: "AudioCmdGroup", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$cmdNone = $MartinSStewart$elm_audio$Audio$AudioCmdGroup(_List_Nil);
  var $author$project$Base$LSInfo = function (volume) {
    return { volume: volume };
  };
  var $elm$json$Json$Decode$at = F2(function (fields, decoder) {
    return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
  });
  var $elm$json$Json$Decode$decodeString = _Json_runOnString;
  var $elm$core$Result$withDefault = F2(function (def, result) {
    if (result.$ === "Ok") {
      var a = result.a;
      return a;
    } else {
      return def;
    }
  });
  var $author$project$Lib$LocalStorage$LocalStorage$decodeLSInfo = function (info) {
    var oldvol = A2(
      $elm$core$Result$withDefault,
      0.5,
      A2($elm$json$Json$Decode$decodeString, A2($elm$json$Json$Decode$at, _List_fromArray(["volume"]), $elm$json$Json$Decode$float), info)
    );
    return $author$project$Base$LSInfo(oldvol);
  };
  var $author$project$MainConfig$plHeight = 1080;
  var $author$project$MainConfig$plWidth = 1920;
  var $author$project$Lib$Coordinate$Coordinates$plScale = $author$project$MainConfig$plWidth / $author$project$MainConfig$plHeight;
  var $author$project$Lib$Coordinate$Coordinates$getStartPoint = function (_v0) {
    var w = _v0.a;
    var h = _v0.b;
    var fw = h * $author$project$Lib$Coordinate$Coordinates$plScale;
    var fh = w / $author$project$Lib$Coordinate$Coordinates$plScale;
    return _Utils_cmp(w / h, $author$project$Lib$Coordinate$Coordinates$plScale) > 0
      ? _Utils_Tuple2((w - fw) / 2, 0)
      : _Utils_Tuple2(0, (h - fh) / 2);
  };
  var $author$project$Scenes$SceneSettings$NullSceneData = { $: "NullSceneData" };
  var $author$project$Common$initGlobalData = {
    browserViewPort: _Utils_Tuple2(1280, 720),
    extraHTML: $elm$core$Maybe$Nothing,
    lastLocalStorage: $author$project$Lib$LocalStorage$LocalStorage$decodeLSInfo(""),
    localStorage: $author$project$Lib$LocalStorage$LocalStorage$decodeLSInfo(""),
    mousePos: _Utils_Tuple2(0, 0),
    realHeight: 720,
    realWidth: 1280,
    sceneStartTime: 0,
    sprites: $elm$core$Dict$empty,
    startLeft: 0,
    startTop: 0,
  };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableEmpty = { $: "DrawableEmpty" };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified = { $: "NotSpecified" };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable = function (a) {
    return { $: "Renderable", a: a };
  };
  var $linsyking$elm_canvas$Canvas$empty = $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable({
    commands: _List_Nil,
    drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
    drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableEmpty,
  });
  var $author$project$Scenes$SceneSettings$nullSceneT = {
    init: F2(function (_v0, _v1) {
      return $author$project$Scenes$SceneSettings$NullSceneData;
    }),
    update: F2(function (env, m) {
      return _Utils_Tuple3(m, _List_Nil, env);
    }),
    view: F2(function (_v2, _v3) {
      return $linsyking$elm_canvas$Canvas$empty;
    }),
  };
  var $author$project$Main$initModel = {
    audiorepo: _List_Nil,
    currentData: $author$project$Scenes$SceneSettings$NullSceneData,
    currentGlobalData: $author$project$Common$initGlobalData,
    currentScene: $author$project$Scenes$SceneSettings$nullSceneT,
    time: 0,
  };
  var $author$project$MainConfig$initScene = "Logo";
  var $author$project$Lib$Scene$Base$NullSceneInitData = { $: "NullSceneInitData" };
  var $author$project$MainConfig$initSceneSettings = $author$project$Lib$Scene$Base$NullSceneInitData;
  var $author$project$Lib$Env$Env$addCommonData = F2(function (commonData, env) {
    return { commonData: commonData, globalData: env.globalData, msg: env.msg, t: env.t };
  });
  var $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel = F4(function (name, data, update, view) {
    return { data: data, name: name, update: update, view: view };
  });
  var $author$project$Scenes$Home$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Home$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Home$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Home$Background$Common$nullModel = {};
  var $author$project$Scenes$Home$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Home$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Home$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Home$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Home$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Home$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Home$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Home$LayerSettings$UIData = function (a) {
    return { $: "UIData", a: a };
  };
  var $author$project$Scenes$Home$UI$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Home$LayerSettings$UIData(data);
  };
  var $author$project$Scenes$Home$UI$Common$Beginning = { $: "Beginning" };
  var $author$project$Scenes$Home$UI$Common$nullModel = {
    buttonHowToPlay: _Utils_Tuple2(0, 0),
    buttonNewGame: _Utils_Tuple2(0, 0),
    sceneState: $author$project$Scenes$Home$UI$Common$Beginning,
  };
  var $author$project$Scenes$Home$UI$Global$ldtToData = function (ldt) {
    if (ldt.$ === "UIData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Home$UI$Common$nullModel;
    }
  };
  var $author$project$Scenes$Home$UI$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Home$UI$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Home$UI$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Home$UI$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Home$UI$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Home$LayerBase$nullCommonData = {};
  var $author$project$Scenes$Home$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Home$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Home$Background$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$Home$Background$Common$nullModel;
  });
  var $author$project$Scenes$Home$Background$Model$updateModel = F3(function (env, _v0, model) {
    return _Utils_Tuple3(model, _List_Nil, env);
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableGroup = function (a) {
    return { $: "DrawableGroup", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$Fill = function (a) {
    return { $: "Fill", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke = F2(function (a, b) {
    return { $: "FillAndStroke", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$Stroke = function (a) {
    return { $: "Stroke", a: a };
  };
  var $linsyking$elm_canvas$Canvas$mergeDrawOp = F2(function (op1, op2) {
    var _v0 = _Utils_Tuple2(op1, op2);
    _v0$7: while (true) {
      switch (_v0.b.$) {
        case "FillAndStroke":
          var _v1 = _v0.b;
          var c = _v1.a;
          var sc = _v1.b;
          return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc);
        case "Fill":
          switch (_v0.a.$) {
            case "Fill":
              var c = _v0.b.a;
              return $linsyking$elm_canvas$Canvas$Internal$Canvas$Fill(c);
            case "Stroke":
              var c1 = _v0.a.a;
              var c2 = _v0.b.a;
              return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, c1);
            case "FillAndStroke":
              var _v2 = _v0.a;
              var sc = _v2.b;
              var c2 = _v0.b.a;
              return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, sc);
            default:
              break _v0$7;
          }
        case "Stroke":
          switch (_v0.a.$) {
            case "Stroke":
              var c = _v0.b.a;
              return $linsyking$elm_canvas$Canvas$Internal$Canvas$Stroke(c);
            case "Fill":
              var c1 = _v0.a.a;
              var c2 = _v0.b.a;
              return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c1, c2);
            case "FillAndStroke":
              var _v3 = _v0.a;
              var c = _v3.a;
              var sc2 = _v0.b.a;
              return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc2);
            default:
              break _v0$7;
          }
        default:
          if (_v0.a.$ === "NotSpecified") {
            break _v0$7;
          } else {
            var whatever = _v0.a;
            var _v5 = _v0.b;
            return whatever;
          }
      }
    }
    var _v4 = _v0.a;
    var whatever = _v0.b;
    return whatever;
  });
  var $linsyking$elm_canvas$Canvas$addSettingsToRenderable = F2(function (settings, renderable) {
    var addSetting = F2(function (setting, _v1) {
      var r = _v1.a;
      return $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
        (function () {
          switch (setting.$) {
            case "SettingCommand":
              var cmd = setting.a;
              return _Utils_update(r, {
                commands: A2($elm$core$List$cons, cmd, r.commands),
              });
            case "SettingCommands":
              var cmds = setting.a;
              return _Utils_update(r, {
                commands: A3($elm$core$List$foldl, $elm$core$List$cons, r.commands, cmds),
              });
            case "SettingUpdateDrawable":
              var f = setting.a;
              return _Utils_update(r, {
                drawable: f(r.drawable),
              });
            default:
              var op = setting.a;
              return _Utils_update(r, {
                drawOp: A2($linsyking$elm_canvas$Canvas$mergeDrawOp, r.drawOp, op),
              });
          }
        })()
      );
    });
    return A3($elm$core$List$foldl, addSetting, renderable, settings);
  });
  var $linsyking$elm_canvas$Canvas$group = F2(function (settings, entities) {
    return A2(
      $linsyking$elm_canvas$Canvas$addSettingsToRenderable,
      settings,
      $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable({
        commands: _List_Nil,
        drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
        drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableGroup(entities),
      })
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand = function (a) {
    return { $: "SettingCommand", a: a };
  };
  var $elm$json$Json$Encode$bool = _Json_wrap;
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field = F2(function (name, value) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("type", $elm$json$Json$Encode$string("field")),
        _Utils_Tuple2("name", $elm$json$Json$Encode$string(name)),
        _Utils_Tuple2("value", value),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalImageSmoothingEnabled = function (enabled) {
    return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field, "imageSmoothingEnabled", $elm$json$Json$Encode$bool(enabled));
  };
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing = function (enabled) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalImageSmoothingEnabled(enabled)
    );
  };
  var $linsyking$elm_canvas$Canvas$Texture$dimensions = function (texture) {
    if (texture.$ === "TImage") {
      var image = texture.a;
      return { height: image.height, width: image.width };
    } else {
      var data = texture.a;
      return { height: data.height, width: data.width };
    }
  };
  var $author$project$Lib$Resources$Base$igetSprite = F2(function (name, dst) {
    return A2($elm$core$Dict$get, name, dst);
  });
  var $author$project$Lib$Coordinate$Coordinates$lengthToReal = F2(function (gd, x) {
    var realWidth = gd.realWidth;
    return realWidth * (x / $author$project$MainConfig$plWidth);
  });
  var $author$project$Lib$Coordinate$Coordinates$posToReal = F2(function (gd, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    var realWidth = gd.realWidth;
    var realHeight = gd.realHeight;
    return _Utils_Tuple2(realWidth * (x / $author$project$MainConfig$plWidth), realHeight * (y / $author$project$MainConfig$plHeight));
  });
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$Scale = F2(function (a, b) {
    return { $: "Scale", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$scale = $linsyking$elm_canvas$Canvas$Settings$Advanced$Scale;
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableText = function (a) {
    return { $: "DrawableText", a: a };
  };
  var $linsyking$elm_canvas$Canvas$text = F3(function (settings, point, str) {
    return A2(
      $linsyking$elm_canvas$Canvas$addSettingsToRenderable,
      settings,
      $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable({
        commands: _List_Nil,
        drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
        drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableText({ maxWidth: $elm$core$Maybe$Nothing, point: point, text: str }),
      })
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableTexture = F2(function (a, b) {
    return { $: "DrawableTexture", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$texture = F3(function (settings, p, t) {
    return A2(
      $linsyking$elm_canvas$Canvas$addSettingsToRenderable,
      settings,
      $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable({
        commands: _List_Nil,
        drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
        drawable: A2($linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableTexture, p, t),
      })
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommands = function (a) {
    return { $: "SettingCommands", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn = F2(function (name, args) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("type", $elm$json$Json$Encode$string("function")),
        _Utils_Tuple2("name", $elm$json$Json$Encode$string(name)),
        _Utils_Tuple2("args", A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, args)),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate = function (angle) {
    return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, "rotate", _List_fromArray([$elm$json$Json$Encode$float(angle)]));
  };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale = F2(function (x, y) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "scale",
      _List_fromArray([$elm$json$Json$Encode$float(x), $elm$json$Json$Encode$float(y)])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform = F6(function (a, b, c, d, e, f) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "transform",
      _List_fromArray([
        $elm$json$Json$Encode$float(a),
        $elm$json$Json$Encode$float(b),
        $elm$json$Json$Encode$float(c),
        $elm$json$Json$Encode$float(d),
        $elm$json$Json$Encode$float(e),
        $elm$json$Json$Encode$float(f),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate = F2(function (x, y) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "translate",
      _List_fromArray([$elm$json$Json$Encode$float(x), $elm$json$Json$Encode$float(y)])
    );
  });
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$transform = function (transforms) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommands(
      A2(
        $elm$core$List$map,
        function (t) {
          switch (t.$) {
            case "Rotate":
              var angle = t.a;
              return $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate(angle);
            case "Scale":
              var x = t.a;
              var y = t.b;
              return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale, x, y);
            case "Translate":
              var x = t.a;
              var y = t.b;
              return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate, x, y);
            default:
              var m11 = t.a.m11;
              var m12 = t.a.m12;
              var m21 = t.a.m21;
              var m22 = t.a.m22;
              var dx = t.a.dx;
              var dy = t.a.dy;
              return A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform, m11, m12, m21, m22, dx, dy);
          }
        },
        transforms
      )
    );
  };
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$Translate = F2(function (a, b) {
    return { $: "Translate", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$translate = $linsyking$elm_canvas$Canvas$Settings$Advanced$Translate;
  var $author$project$Lib$Render$Sprite$renderSprite = F5(function (gd, ls, p, _v0, name) {
    var w = _v0.a;
    var h = _v0.b;
    var dst = gd.sprites;
    var _v1 = A2($author$project$Lib$Resources$Base$igetSprite, name, dst);
    if (_v1.$ === "Just") {
      var t = _v1.a;
      var text_dim = $linsyking$elm_canvas$Canvas$Texture$dimensions(t);
      var text_height = text_dim.height;
      var text_width = text_dim.width;
      var rw = A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, w);
      var width_s = rw / text_width;
      var rh = A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, h);
      var height_s = rh / text_height;
      var _v2 = A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, p);
      var newx = _v2.a;
      var newy = _v2.b;
      return w > 0 && h > 0
        ? A3(
            $linsyking$elm_canvas$Canvas$texture,
            A2(
              $elm$core$List$cons,
              $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
                _List_fromArray([
                  A2($linsyking$elm_canvas$Canvas$Settings$Advanced$translate, newx, newy),
                  A2($linsyking$elm_canvas$Canvas$Settings$Advanced$scale, width_s, height_s),
                ])
              ),
              ls
            ),
            _Utils_Tuple2(0, 0),
            t
          )
        : w > 0 && h <= 0
          ? A3(
              $linsyking$elm_canvas$Canvas$texture,
              A2(
                $elm$core$List$cons,
                $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
                  _List_fromArray([
                    A2($linsyking$elm_canvas$Canvas$Settings$Advanced$translate, newx, newy),
                    A2($linsyking$elm_canvas$Canvas$Settings$Advanced$scale, width_s, width_s),
                  ])
                ),
                ls
              ),
              _Utils_Tuple2(0, 0),
              t
            )
          : w <= 0 && h > 0
            ? A3(
                $linsyking$elm_canvas$Canvas$texture,
                A2(
                  $elm$core$List$cons,
                  $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
                    _List_fromArray([
                      A2($linsyking$elm_canvas$Canvas$Settings$Advanced$translate, newx, newy),
                      A2($linsyking$elm_canvas$Canvas$Settings$Advanced$scale, height_s, height_s),
                    ])
                  ),
                  ls
                ),
                _Utils_Tuple2(0, 0),
                t
              )
            : A3($linsyking$elm_canvas$Canvas$texture, ls, _Utils_Tuple2(newx, newy), t);
    } else {
      return A3($linsyking$elm_canvas$Canvas$text, _List_Nil, A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, p), "");
    }
  });
  var $author$project$Scenes$Home$Background$Model$viewModel = F2(function (env, _v0) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A5(
          $author$project$Lib$Render$Sprite$renderSprite,
          env.globalData,
          _List_Nil,
          _Utils_Tuple2(0, 0),
          _Utils_Tuple2(0, 1080),
          "starter_background"
        ),
      ])
    );
  });
  var $author$project$Scenes$Home$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Home$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Home$Background$Model$updateModel,
      view: $author$project$Scenes$Home$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Home$UI$Common$Model = F3(function (buttonNewGame, buttonHowToPlay, sceneState) {
    return { buttonHowToPlay: buttonHowToPlay, buttonNewGame: buttonNewGame, sceneState: sceneState };
  });
  var $author$project$Scenes$Home$UI$Model$initModel = F2(function (_v0, _v1) {
    return A3(
      $author$project$Scenes$Home$UI$Common$Model,
      _Utils_Tuple2(290, 610),
      _Utils_Tuple2(760, 610),
      $author$project$Scenes$Home$UI$Common$Beginning
    );
  });
  var $author$project$Lib$Audio$Base$ALoop = { $: "ALoop" };
  var $author$project$Lib$Layer$Base$LayerChangeSceneMsg = function (a) {
    return { $: "LayerChangeSceneMsg", a: a };
  };
  var $author$project$Lib$Layer$Base$LayerParentScene = { $: "LayerParentScene" };
  var $author$project$Lib$Layer$Base$LayerSoundMsg = F3(function (a, b, c) {
    return { $: "LayerSoundMsg", a: a, b: b, c: c };
  });
  var $author$project$Scenes$Home$UI$Common$NormalState = { $: "NormalState" };
  var $author$project$Lib$Resources$Base$getResourcePath = function (x) {
    return "assets/" + x;
  };
  var $author$project$Lib$Coordinate$Coordinates$judgeMouseRect = F3(function (_v0, _v1, _v2) {
    var mx = _v0.a;
    var my = _v0.b;
    var x = _v1.a;
    var y = _v1.b;
    var w = _v2.a;
    var h = _v2.b;
    return _Utils_cmp(x, mx) < 1 && _Utils_cmp(mx, x + w) < 1 && _Utils_cmp(y, my) < 1 && _Utils_cmp(my, y + h) < 1 ? true : false;
  });
  var $author$project$Scenes$Home$UI$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    if (_v1.$ === "MouseDown") {
      var button = _v1.a;
      var pos = _v1.b;
      return !button
        ? A3($author$project$Lib$Coordinate$Coordinates$judgeMouseRect, pos, _Utils_Tuple2(290, 610), _Utils_Tuple2(300, 90))
          ? _Utils_Tuple3(
              model,
              _List_fromArray([
                _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Story")),
              ]),
              env
            )
          : A3($author$project$Lib$Coordinate$Coordinates$judgeMouseRect, pos, _Utils_Tuple2(760, 610), _Utils_Tuple2(300, 90))
            ? _Utils_Tuple3(
                model,
                _List_fromArray([
                  _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Rules")),
                ]),
                env
              )
            : _Utils_Tuple3(model, _List_Nil, env)
        : _Utils_Tuple3(model, _List_Nil, env);
    } else {
      return _Utils_eq(model.sceneState, $author$project$Scenes$Home$UI$Common$Beginning)
        ? _Utils_Tuple3(
            _Utils_update(model, { sceneState: $author$project$Scenes$Home$UI$Common$NormalState }),
            _List_fromArray([
              _Utils_Tuple2(
                $author$project$Lib$Layer$Base$LayerParentScene,
                A3(
                  $author$project$Lib$Layer$Base$LayerSoundMsg,
                  "StoryBgm",
                  $author$project$Lib$Resources$Base$getResourcePath("audio/main.ogg"),
                  $author$project$Lib$Audio$Base$ALoop
                )
              ),
            ]),
            env
          )
        : _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Home$UI$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A5(
          $author$project$Lib$Render$Sprite$renderSprite,
          env.globalData,
          _List_Nil,
          model.buttonNewGame,
          _Utils_Tuple2(0, 90),
          "starter_newGameButton"
        ),
        A5(
          $author$project$Lib$Render$Sprite$renderSprite,
          env.globalData,
          _List_Nil,
          model.buttonHowToPlay,
          _Utils_Tuple2(0, 90),
          "starter_howToPlayButton"
        ),
      ])
    );
  });
  var $author$project$Scenes$Home$UI$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Home$UI$Model$initModel, env, i),
      name: "UI",
      update: $author$project$Scenes$Home$UI$Model$updateModel,
      view: $author$project$Scenes$Home$UI$Model$viewModel,
    };
  });
  var $author$project$Scenes$Home$SceneInit$nullHomeInit = {};
  var $author$project$Scenes$Home$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "HomeInitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Home$SceneInit$nullHomeInit;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Home$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Home$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Home$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Home$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Home$UI$Global$getLayerT(
          A2(
            $author$project$Scenes$Home$UI$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Home$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Lib$Scene$Base$SOMChangeScene = function (a) {
    return { $: "SOMChangeScene", a: a };
  };
  var $author$project$Lib$Scene$Base$SOMPlayAudio = F3(function (a, b, c) {
    return { $: "SOMPlayAudio", a: a, b: b, c: c };
  });
  var $author$project$Lib$Scene$Base$SOMStopAudio = function (a) {
    return { $: "SOMStopAudio", a: a };
  };
  var $author$project$Scenes$Home$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Lib$Env$Env$noCommonData = function (env) {
    return { globalData: env.globalData, msg: env.msg, t: env.t };
  };
  var $author$project$Lib$Layer$Base$NullLayerMsg = { $: "NullLayerMsg" };
  var $author$project$Lib$Env$Env$cleanEnvC = function (env) {
    return _Utils_update(env, { msg: $author$project$Base$NullMsg });
  };
  var $author$project$Lib$Layer$LayerHandler$match = F2(function (l, t) {
    if (t.$ === "LayerParentScene") {
      return false;
    } else {
      var n = t.a;
      return _Utils_eq(n, l.name);
    }
  });
  var $author$project$Lib$Layer$LayerHandler$super = function (t) {
    if (t.$ === "LayerParentScene") {
      return true;
    } else {
      return false;
    }
  };
  var $author$project$Lib$Layer$LayerHandler$update = F3(function (layer, env, lm) {
    var _v0 = A3(layer.update, env, lm, layer.data);
    var newData = _v0.a;
    var newMsgs = _v0.b;
    var newEnv = _v0.c;
    return _Utils_Tuple3(_Utils_update(layer, { data: newData }), newMsgs, newEnv);
  });
  var $author$project$Lib$Layer$LayerHandler$recBody = {
    clean: $author$project$Lib$Env$Env$cleanEnvC,
    match: $author$project$Lib$Layer$LayerHandler$match,
    _super: $author$project$Lib$Layer$LayerHandler$super,
    update: $author$project$Lib$Layer$LayerHandler$update,
  };
  var $elm$core$Basics$not = _Basics_not;
  var $cometia0$messenger_core$Messenger$RecursionList$updateOnce = F4(function (rec, env, msg, objs) {
    return A3(
      $elm$core$List$foldr,
      F2(function (ele, _v0) {
        var lastObjs = _v0.a;
        var _v1 = _v0.b;
        var lastMsgUnfinished = _v1.a;
        var lastMsgFinished = _v1.b;
        var lastEnv = _v0.c;
        var _v2 = A3(rec.update, ele, lastEnv, msg);
        var newObj = _v2.a;
        var newMsg = _v2.b;
        var newEnv = _v2.c;
        var finishedMsg = A2(
          $elm$core$List$filterMap,
          function (_v4) {
            var x = _v4.a;
            var y = _v4.b;
            return rec._super(x) ? $elm$core$Maybe$Just(y) : $elm$core$Maybe$Nothing;
          },
          newMsg
        );
        var unfinishedMsg = A2(
          $elm$core$List$filter,
          function (_v3) {
            var x = _v3.a;
            return !rec._super(x);
          },
          newMsg
        );
        return _Utils_Tuple3(
          A2($elm$core$List$cons, newObj, lastObjs),
          _Utils_Tuple2(_Utils_ap(lastMsgUnfinished, unfinishedMsg), _Utils_ap(lastMsgFinished, finishedMsg)),
          newEnv
        );
      }),
      _Utils_Tuple3(_List_Nil, _Utils_Tuple2(_List_Nil, _List_Nil), env),
      objs
    );
  });
  var $elm$core$List$isEmpty = function (xs) {
    if (!xs.b) {
      return true;
    } else {
      return false;
    }
  };
  var $cometia0$messenger_core$Messenger$RecursionList$updateRemain = F4(function (rec, env, _v0, objs) {
    updateRemain: while (true) {
      var unfinishedMsg = _v0.a;
      var finishedMsg = _v0.b;
      if ($elm$core$List$isEmpty(unfinishedMsg)) {
        return _Utils_Tuple3(objs, finishedMsg, env);
      } else {
        var _v1 = A3(
          $elm$core$List$foldr,
          F2(function (ele, _v3) {
            var lastObjs = _v3.a;
            var _v4 = _v3.b;
            var lastMsgUnfinished = _v4.a;
            var lastMsgFinished = _v4.b;
            var lastEnv = _v3.c;
            var msgMatched = A2(
              $elm$core$List$filterMap,
              function (_v12) {
                var tar = _v12.a;
                var msg = _v12.b;
                return A2(rec.match, ele, tar) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing;
              },
              unfinishedMsg
            );
            if ($elm$core$List$isEmpty(msgMatched)) {
              return _Utils_Tuple3(A2($elm$core$List$cons, ele, lastObjs), _Utils_Tuple2(lastMsgUnfinished, lastMsgFinished), lastEnv);
            } else {
              var _v5 = A3(
                $elm$core$List$foldl,
                F2(function (msg, _v7) {
                  var lastObj2 = _v7.a;
                  var _v8 = _v7.b;
                  var lastMsgUnfinished2 = _v8.a;
                  var lastMsgFinished2 = _v8.b;
                  var lastEnv2 = _v7.c;
                  var _v9 = A3(rec.update, lastObj2, lastEnv2, msg);
                  var newEle = _v9.a;
                  var newMsgs = _v9.b;
                  var newEnv3 = _v9.c;
                  var finishedMsgs = A2(
                    $elm$core$List$filterMap,
                    function (_v11) {
                      var x = _v11.a;
                      var y = _v11.b;
                      return rec._super(x) ? $elm$core$Maybe$Just(y) : $elm$core$Maybe$Nothing;
                    },
                    newMsgs
                  );
                  var unfinishedMsgs = A2(
                    $elm$core$List$filter,
                    function (_v10) {
                      var x = _v10.a;
                      return !rec._super(x);
                    },
                    newMsgs
                  );
                  return _Utils_Tuple3(
                    newEle,
                    _Utils_Tuple2(_Utils_ap(lastMsgUnfinished2, unfinishedMsgs), _Utils_ap(lastMsgFinished2, finishedMsgs)),
                    newEnv3
                  );
                }),
                _Utils_Tuple3(ele, _Utils_Tuple2(_List_Nil, _List_Nil), env),
                msgMatched
              );
              var newObj = _v5.a;
              var _v6 = _v5.b;
              var newMsgUnfinished = _v6.a;
              var newMsgFinished = _v6.b;
              var newEnv2 = _v5.c;
              return _Utils_Tuple3(
                A2($elm$core$List$cons, newObj, lastObjs),
                _Utils_Tuple2(_Utils_ap(lastMsgUnfinished, newMsgUnfinished), _Utils_ap(lastMsgFinished, newMsgFinished)),
                newEnv2
              );
            }
          }),
          _Utils_Tuple3(_List_Nil, _Utils_Tuple2(_List_Nil, _List_Nil), env),
          objs
        );
        var newObjs = _v1.a;
        var _v2 = _v1.b;
        var newUnfinishedMsg = _v2.a;
        var newFinishedMsg = _v2.b;
        var newEnv = _v1.c;
        var $temp$rec = rec,
          $temp$env = newEnv,
          $temp$_v0 = _Utils_Tuple2(newUnfinishedMsg, _Utils_ap(finishedMsg, newFinishedMsg)),
          $temp$objs = newObjs;
        rec = $temp$rec;
        env = $temp$env;
        _v0 = $temp$_v0;
        objs = $temp$objs;
        continue updateRemain;
      }
    }
  });
  var $cometia0$messenger_core$Messenger$RecursionList$updateObjects = F4(function (rec, env, msg, objs) {
    var _v0 = A4($cometia0$messenger_core$Messenger$RecursionList$updateOnce, rec, env, msg, objs);
    var newObjs = _v0.a;
    var _v1 = _v0.b;
    var newMsgUnfinished = _v1.a;
    var newMsgFinished = _v1.b;
    var newEnv = _v0.c;
    return A4(
      $cometia0$messenger_core$Messenger$RecursionList$updateRemain,
      rec,
      rec.clean(newEnv),
      _Utils_Tuple2(newMsgUnfinished, newMsgFinished),
      newObjs
    );
  });
  var $author$project$Lib$Layer$LayerHandler$updateLayer = function (env) {
    return A3(
      $cometia0$messenger_core$Messenger$RecursionList$updateObjects,
      $author$project$Lib$Layer$LayerHandler$recBody,
      env,
      $author$project$Lib$Layer$Base$NullLayerMsg
    );
  };
  var $author$project$Scenes$Home$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Home$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $cometia0$messenger_core$Messenger$GeneralModel$viewModelList = F2(function (env, models) {
    return A2(
      $elm$core$List$map,
      function (model) {
        return A2(model.view, env, model.data);
      },
      models
    );
  });
  var $author$project$Lib$Layer$LayerHandler$viewLayer = F2(function (env, models) {
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, A2($cometia0$messenger_core$Messenger$GeneralModel$viewModelList, env, models));
  });
  var $author$project$Scenes$Home$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Home$Export$scene = {
    init: $author$project$Scenes$Home$Common$initModel,
    update: $author$project$Scenes$Home$Model$updateModel,
    view: $author$project$Scenes$Home$Model$viewModel,
  };
  var $author$project$Scenes$Level1$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Level1$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Level1$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Level1$Background$Common$nullModel = {};
  var $author$project$Scenes$Level1$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Level1$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level1$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Level1$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Level1$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level1$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Level1$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Level1$LayerSettings$GameStuffData = function (a) {
    return { $: "GameStuffData", a: a };
  };
  var $author$project$Scenes$Level1$GameStuff$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Level1$LayerSettings$GameStuffData(data);
  };
  var $author$project$Scenes$Level1$GameStuff$Common$Beginning = { $: "Beginning" };
  var $author$project$Scenes$Level1$LayerBase$Big = { $: "Big" };
  var $author$project$Scenes$Level1$LayerBase$Normal = { $: "Normal" };
  var $author$project$Scenes$Level1$LayerBase$Passive = { $: "Passive" };
  var $elm$core$List$concatMap = F2(function (f, list) {
    return $elm$core$List$concat(A2($elm$core$List$map, f, list));
  });
  var $elm$core$Basics$negate = function (n) {
    return -n;
  };
  var $author$project$Scenes$Level1$LayerBase$nullCommonData = (function () {
    var paddleRadius = 160;
    var brickWidth = 196;
    var brickRowNum = 3;
    var brickHeight = 98;
    var brickColNum = 6;
    var blockWidth = 1920 / brickColNum;
    var blockHeight = 140;
    return {
      blockHeight: blockHeight,
      blockWidth: blockWidth,
      brickColNum: brickColNum,
      brickHeight: brickHeight,
      brickRowNum: brickRowNum,
      brickWidth: brickWidth,
      paddleRadius: paddleRadius,
    };
  })();
  var $elm$core$Array$repeat = F2(function (n, e) {
    return A2($elm$core$Array$initialize, n, function (_v0) {
      return e;
    });
  });
  var $author$project$MainConfig$timeInterval = 16;
  var $author$project$Scenes$Level1$GameStuff$Common$nullModel = (function () {
    var commonData = $author$project$Scenes$Level1$LayerBase$nullCommonData;
    return {
      alive: true,
      alpha: 1,
      balls: _List_fromArray([
        {
          r: 48,
          vx: (2 / 16) * $author$project$MainConfig$timeInterval,
          vy: (-13 / 16) * $author$project$MainConfig$timeInterval,
          x: 1920 / 2,
          y: 1080 - 50 - 160,
        },
      ]),
      bricks: (function () {
        var yList = A2($elm$core$List$range, 0, commonData.brickRowNum - 1);
        var xList = A2($elm$core$List$range, 0, commonData.brickColNum - 1);
        return A2(
          $elm$core$List$concatMap,
          function (y) {
            return A2(
              $elm$core$List$map,
              function (x) {
                return {
                  animIndex: 0,
                  state: $author$project$Scenes$Level1$LayerBase$Normal,
                  x: x * commonData.blockWidth + (commonData.blockWidth - commonData.brickWidth) / 2,
                  y: y * commonData.blockHeight + (commonData.blockHeight - commonData.brickHeight) / 2,
                };
              },
              xList
            );
          },
          yList
        );
      })(),
      fading: $author$project$Scenes$Level1$GameStuff$Common$Beginning,
      feature: { featType: $author$project$Scenes$Level1$LayerBase$Big, startTime: 0, state: $author$project$Scenes$Level1$LayerBase$Passive },
      keyList: A2($elm$core$Array$repeat, 256, false),
      keyListPre: A2($elm$core$Array$repeat, 256, false),
      paddle: { r: commonData.paddleRadius, x: 1920 / 2, y: 1080 },
      pause: false,
      win: false,
    };
  })();
  var $author$project$Scenes$Level1$GameStuff$Global$ldtToData = function (ldt) {
    if (ldt.$ === "GameStuffData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Level1$GameStuff$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Level1$GameStuff$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Level1$GameStuff$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level1$GameStuff$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Level1$GameStuff$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Level1$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level1$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Level1$Background$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level1$Background$Common$nullModel;
  });
  var $author$project$Scenes$Level1$Background$Model$updateModel = F3(function (env, _v0, model) {
    return _Utils_Tuple3(model, _List_Nil, env);
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$Color = function (a) {
    return { $: "Color", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp = function (a) {
    return { $: "SettingDrawOp", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Settings$fill = function (color) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
      $linsyking$elm_canvas$Canvas$Internal$Canvas$Fill($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$Color(color))
    );
  };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$Rect = F3(function (a, b, c) {
    return { $: "Rect", a: a, b: b, c: c };
  });
  var $linsyking$elm_canvas$Canvas$rect = F3(function (pos, width, height) {
    return A3($linsyking$elm_canvas$Canvas$Internal$Canvas$Rect, pos, width, height);
  });
  var $author$project$Lib$Render$Shape$rect = F3(function (gd, pos, _v0) {
    var w = _v0.a;
    var h = _v0.b;
    return A3(
      $linsyking$elm_canvas$Canvas$rect,
      A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, pos),
      A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, w),
      A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, h)
    );
  });
  var $avh4$elm_color$Color$RgbaSpace = F4(function (a, b, c, d) {
    return { $: "RgbaSpace", a: a, b: b, c: c, d: d };
  });
  var $avh4$elm_color$Color$rgba = F4(function (r, g, b, a) {
    return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, a);
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableShapes = function (a) {
    return { $: "DrawableShapes", a: a };
  };
  var $linsyking$elm_canvas$Canvas$shapes = F2(function (settings, ss) {
    return A2(
      $linsyking$elm_canvas$Canvas$addSettingsToRenderable,
      settings,
      $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable({
        commands: _List_Nil,
        drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
        drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableShapes(ss),
      })
    );
  });
  var $author$project$Scenes$Level1$Background$Model$viewModel = F2(function (env, _v0) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080), "background"),
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.5))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
      ])
    );
  });
  var $author$project$Scenes$Level1$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Level1$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Level1$Background$Model$updateModel,
      view: $author$project$Scenes$Level1$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Level1$GameStuff$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level1$GameStuff$Common$nullModel;
  });
  var $author$project$Scenes$Level1$GameStuff$Common$FadingIn = { $: "FadingIn" };
  var $author$project$Scenes$Level1$GameStuff$Common$FadingOut = { $: "FadingOut" };
  var $author$project$Scenes$Level1$GameStuff$Common$FadingOutEnd = { $: "FadingOutEnd" };
  var $author$project$Lib$Layer$Base$LayerStopSoundMsg = function (a) {
    return { $: "LayerStopSoundMsg", a: a };
  };
  var $author$project$Scenes$Level1$GameStuff$Model$aliveBricksCount = function (model) {
    var aliveList = A2(
      $elm$core$List$filter,
      function (x) {
        return _Utils_eq(x.state, $author$project$Scenes$Level1$LayerBase$Normal);
      },
      model.bricks
    );
    return $elm$core$List$length(aliveList);
  };
  var $author$project$Scenes$Level1$GameStuff$Model$ifDead = function (model) {
    var nballs = A2(
      $elm$core$List$filter,
      function (_v0) {
        var y = _v0.y;
        return y <= 1080;
      },
      model.balls
    );
    return !$elm$core$List$length(nballs) ? _Utils_update(model, { alive: false, balls: nballs }) : _Utils_update(model, { balls: nballs });
  };
  var $author$project$Scenes$Level1$GameStuff$Model$ifWin = function (model) {
    return !$author$project$Scenes$Level1$GameStuff$Model$aliveBricksCount(model)
      ? _Utils_update(model, { alive: false, fading: $author$project$Scenes$Level1$GameStuff$Common$FadingOut, win: true })
      : model;
  };
  var $author$project$Scenes$Level1$GameStuff$Common$NoFading = { $: "NoFading" };
  var $author$project$Scenes$Level1$GameStuff$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, fading: $author$project$Scenes$Level1$GameStuff$Common$NoFading }))
      : _Utils_Tuple2(env, model);
  };
  var $elm$core$Basics$ge = _Utils_ge;
  var $author$project$Scenes$Level1$GameStuff$Model$isFinishedFadeOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha >= 1
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 1, fading: $author$project$Scenes$Level1$GameStuff$Common$FadingOutEnd }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Level1$GameStuff$Model$moveBall = function (model) {
    return _Utils_update(model, {
      balls: A2(
        $elm$core$List$map,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var vx = _v0.vx;
          var vy = _v0.vy;
          var r = _v0.r;
          return { r: r, vx: vx, vy: vy, x: x + vx, y: y + vy };
        },
        model.balls
      ),
    });
  };
  var $elm$core$Bitwise$and = _Bitwise_and;
  var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
  var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
  var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
  var $elm$core$Array$getHelp = F3(function (shift, index, tree) {
    getHelp: while (true) {
      var pos = $elm$core$Array$bitMask & (index >>> shift);
      var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
      if (_v0.$ === "SubTree") {
        var subTree = _v0.a;
        var $temp$shift = shift - $elm$core$Array$shiftStep,
          $temp$index = index,
          $temp$tree = subTree;
        shift = $temp$shift;
        index = $temp$index;
        tree = $temp$tree;
        continue getHelp;
      } else {
        var values = _v0.a;
        return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
      }
    }
  });
  var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
  var $elm$core$Array$tailIndex = function (len) {
    return (len >>> 5) << 5;
  };
  var $elm$core$Array$get = F2(function (index, _v0) {
    var len = _v0.a;
    var startShift = _v0.b;
    var tree = _v0.c;
    var tail = _v0.d;
    return index < 0 || _Utils_cmp(index, len) > -1
      ? $elm$core$Maybe$Nothing
      : _Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1
        ? $elm$core$Maybe$Just(A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail))
        : $elm$core$Maybe$Just(A3($elm$core$Array$getHelp, startShift, index, tree));
  });
  var $elm$core$Basics$min = F2(function (x, y) {
    return _Utils_cmp(x, y) < 0 ? x : y;
  });
  var $author$project$Scenes$Level1$GameStuff$Model$movePaddle = function (model) {
    var opaddle = model.paddle;
    var npaddle = (function () {
      var v = (20 / 16) * $author$project$MainConfig$timeInterval;
      var right =
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 39, model.keyList)) ||
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 68, model.keyList));
      var left =
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 37, model.keyList)) ||
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 65, model.keyList));
      return left
        ? _Utils_update(opaddle, {
            x: A2($elm$core$Basics$max, opaddle.x - v, 0),
          })
        : right
          ? _Utils_update(opaddle, {
              x: A2($elm$core$Basics$min, opaddle.x + v, 1920),
            })
          : opaddle;
    })();
    return _Utils_update(model, { paddle: npaddle });
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallBorder = function (ball) {
    var y = ball.y;
    var x = ball.x;
    var r = ball.r;
    return (x - r <= 0 && ball.vx < 0) || (x + r >= 1920 && ball.vx > 0)
      ? _Utils_update(ball, { vx: -ball.vx })
      : y - r <= 0 && ball.vy < 0
        ? _Utils_update(ball, { vy: -ball.vy })
        : ball;
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallsBorder = function (balls) {
    return A2($elm$core$List$map, $author$project$Scenes$Level1$GameStuff$Model$reflectBallBorder, balls);
  };
  var $elm$core$Basics$pow = _Basics_pow;
  var $elm$core$Basics$sqrt = _Basics_sqrt;
  var $author$project$Scenes$Level1$GameStuff$Model$dist = F4(function (x1, y1, x2, y2) {
    return $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, x1 - x2, 2) + A2($elm$core$Basics$pow, y1 - y2, 2));
  });
  var $author$project$Scenes$Level1$LayerBase$Attacked = { $: "Attacked" };
  var $author$project$Scenes$Level1$LayerBase$Disappeared = { $: "Disappeared" };
  var $author$project$Scenes$Level1$GameStuff$Model$updateBrick = function (brick) {
    return _Utils_eq(brick.state, $author$project$Scenes$Level1$LayerBase$Attacked)
      ? brick.animIndex < 4
        ? _Utils_update(brick, { animIndex: brick.animIndex + 1 })
        : _Utils_update(brick, { animIndex: 0, state: $author$project$Scenes$Level1$LayerBase$Disappeared })
      : brick;
  };
  var $elm$core$Basics$neq = _Utils_notEqual;
  var $author$project$Scenes$Level1$GameStuff$Model$updateBrickAttacked = function (brick) {
    return !_Utils_eq(brick.state, $author$project$Scenes$Level1$LayerBase$Disappeared)
      ? _Utils_eq(brick.state, $author$project$Scenes$Level1$LayerBase$Normal)
        ? _Utils_update(brick, { state: $author$project$Scenes$Level1$LayerBase$Attacked })
        : brick.animIndex < 16
          ? _Utils_update(brick, { animIndex: brick.animIndex + 1 })
          : _Utils_update(brick, { animIndex: 0, state: $author$project$Scenes$Level1$LayerBase$Disappeared })
      : brick;
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallBrick = function (_v0) {
    var ball = _v0.a;
    var brick = _v0.b;
    if (_Utils_eq(brick.state, $author$project$Scenes$Level1$LayerBase$Normal)) {
      var y1 = brick.y;
      var y = ball.y;
      var x1 = brick.x;
      var x = ball.x;
      var r = ball.r;
      var commonData = $author$project$Scenes$Level1$LayerBase$nullCommonData;
      var x2 = brick.x + commonData.brickWidth;
      var y2 = brick.y + commonData.brickHeight;
      return _Utils_cmp(x, x1) > -1 && _Utils_cmp(x, x2) < 1
        ? (_Utils_cmp(y - r, y1) < 1 && _Utils_cmp(y + r, y1) > -1) || (_Utils_cmp(y + r, y2) > -1 && _Utils_cmp(y - r, y2) < 1)
          ? _Utils_Tuple2(_Utils_update(ball, { vy: -ball.vy }), $author$project$Scenes$Level1$GameStuff$Model$updateBrickAttacked(brick))
          : _Utils_cmp(y + r, y1) > -1 && _Utils_cmp(y - r, y2) < 1
            ? _Utils_Tuple2(ball, $author$project$Scenes$Level1$GameStuff$Model$updateBrick(brick))
            : _Utils_Tuple2(ball, $author$project$Scenes$Level1$GameStuff$Model$updateBrick(brick))
        : _Utils_cmp(y, y1) > -1 && _Utils_cmp(y, y2) < 1
          ? (_Utils_cmp(x - r, x1) < 1 && _Utils_cmp(x + r, x1) > -1) || (_Utils_cmp(x + r, x2) > -1 && _Utils_cmp(x - r, x2) < 1)
            ? _Utils_Tuple2(_Utils_update(ball, { vx: -ball.vx }), $author$project$Scenes$Level1$GameStuff$Model$updateBrickAttacked(brick))
            : _Utils_cmp(x + r, x1) > -1 && _Utils_cmp(x - r, x2) < 1
              ? _Utils_Tuple2(ball, $author$project$Scenes$Level1$GameStuff$Model$updateBrick(brick))
              : _Utils_Tuple2(ball, $author$project$Scenes$Level1$GameStuff$Model$updateBrick(brick))
          : _Utils_cmp(A4($author$project$Scenes$Level1$GameStuff$Model$dist, x, y, x1, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level1$GameStuff$Model$dist, x, y, x1, y2), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level1$GameStuff$Model$dist, x, y, x2, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level1$GameStuff$Model$dist, x, y, x2, y2), r) < 1
            ? _Utils_Tuple2(
                _Utils_update(ball, { vx: -ball.vx, vy: -ball.vy }),
                $author$project$Scenes$Level1$GameStuff$Model$updateBrickAttacked(brick)
              )
            : _Utils_Tuple2(ball, $author$project$Scenes$Level1$GameStuff$Model$updateBrick(brick));
    } else {
      return _Utils_Tuple2(ball, $author$project$Scenes$Level1$GameStuff$Model$updateBrick(brick));
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallBricks = function (_v0) {
    var ball = _v0.a;
    var bricks = _v0.b;
    if (!bricks.b) {
      return _Utils_Tuple2(ball, bricks);
    } else {
      var r = bricks.a;
      var rs = bricks.b;
      var _v2 = $author$project$Scenes$Level1$GameStuff$Model$reflectBallBrick(_Utils_Tuple2(ball, r));
      var nball = _v2.a;
      var nbrick = _v2.b;
      var _v3 = $author$project$Scenes$Level1$GameStuff$Model$reflectBallBricks(_Utils_Tuple2(nball, rs));
      var nball2 = _v3.a;
      var nbricks = _v3.b;
      return _Utils_Tuple2(nball2, A2($elm$core$List$cons, nbrick, nbricks));
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallsBricks = function (_v0) {
    var balls = _v0.a;
    var bricks = _v0.b;
    if (!balls.b) {
      return _Utils_Tuple2(balls, bricks);
    } else {
      var b = balls.a;
      var bs = balls.b;
      var _v2 = $author$project$Scenes$Level1$GameStuff$Model$reflectBallBricks(_Utils_Tuple2(b, bricks));
      var nball = _v2.a;
      var nbricks = _v2.b;
      var _v3 = $author$project$Scenes$Level1$GameStuff$Model$reflectBallsBricks(_Utils_Tuple2(bs, nbricks));
      var nballs = _v3.a;
      var nbricks2 = _v3.b;
      return _Utils_Tuple2(A2($elm$core$List$cons, nball, nballs), nbricks2);
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallPaddle = function (_v0) {
    var b = _v0.a;
    var c = _v0.b;
    if (_Utils_cmp(A2($elm$core$Basics$pow, b.x - c.x, 2) + A2($elm$core$Basics$pow, b.y - c.y, 2), A2($elm$core$Basics$pow, b.r + c.r, 2)) < 1) {
      var _v1 = _Utils_Tuple2(b.x - c.x, b.y - c.y);
      var vx1 = _v1.a;
      var vy1 = _v1.b;
      var _v2 = _Utils_Tuple2(
        vx1 / $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, vx1, 2) + A2($elm$core$Basics$pow, vy1, 2)),
        vy1 / $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, vx1, 2) + A2($elm$core$Basics$pow, vy1, 2))
      );
      var vx2 = _v2.a;
      var vy2 = _v2.b;
      var _v3 = _Utils_Tuple2(
        vx2 * $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, b.vx, 2) + A2($elm$core$Basics$pow, b.vy, 2)),
        vy2 * $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, b.vx, 2) + A2($elm$core$Basics$pow, b.vy, 2))
      );
      var vx3 = _v3.a;
      var vy3 = _v3.b;
      return _Utils_update(b, { vx: vx3, vy: vy3 });
    } else {
      return b;
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflectBallsPaddle = function (_v0) {
    var balls = _v0.a;
    var paddle = _v0.b;
    return A2(
      $elm$core$List$map,
      function (ball) {
        return $author$project$Scenes$Level1$GameStuff$Model$reflectBallPaddle(_Utils_Tuple2(ball, paddle));
      },
      balls
    );
  };
  var $author$project$Scenes$Level1$GameStuff$Model$removeIntersectBallPaddle = function (_v0) {
    removeIntersectBallPaddle: while (true) {
      var b = _v0.a;
      var c = _v0.b;
      if (_Utils_cmp(A2($elm$core$Basics$pow, b.x - c.x, 2) + A2($elm$core$Basics$pow, b.y - c.y, 2), A2($elm$core$Basics$pow, b.r + c.r, 2)) < 1) {
        var $temp$_v0 = _Utils_Tuple2(_Utils_update(b, { x: b.x + b.vx, y: b.y + b.vy }), c);
        _v0 = $temp$_v0;
        continue removeIntersectBallPaddle;
      } else {
        return b;
      }
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Model$removeIntersectBallsPaddle = function (_v0) {
    var balls = _v0.a;
    var paddle = _v0.b;
    if (!balls.b) {
      return balls;
    } else {
      var b = balls.a;
      var bs = balls.b;
      var nballs = $author$project$Scenes$Level1$GameStuff$Model$removeIntersectBallsPaddle(_Utils_Tuple2(bs, paddle));
      var nball = $author$project$Scenes$Level1$GameStuff$Model$removeIntersectBallPaddle(_Utils_Tuple2(b, paddle));
      return A2($elm$core$List$cons, nball, nballs);
    }
  };
  var $author$project$Scenes$Level1$GameStuff$Model$reflect = function (model) {
    var _v0 = $author$project$Scenes$Level1$GameStuff$Model$reflectBallsBricks(_Utils_Tuple2(model.balls, model.bricks));
    var fballs = _v0.a;
    var fbricks = _v0.b;
    var nballs = $author$project$Scenes$Level1$GameStuff$Model$reflectBallsBorder(fballs);
    var mballs = $author$project$Scenes$Level1$GameStuff$Model$reflectBallsPaddle(_Utils_Tuple2(nballs, model.paddle));
    var sballs = $author$project$Scenes$Level1$GameStuff$Model$removeIntersectBallsPaddle(_Utils_Tuple2(mballs, model.paddle));
    return _Utils_update(model, { balls: sballs, bricks: fbricks });
  };
  var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
  var $elm$core$Array$setHelp = F4(function (shift, index, value, tree) {
    var pos = $elm$core$Array$bitMask & (index >>> shift);
    var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
    if (_v0.$ === "SubTree") {
      var subTree = _v0.a;
      var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
      return A3($elm$core$Elm$JsArray$unsafeSet, pos, $elm$core$Array$SubTree(newSub), tree);
    } else {
      var values = _v0.a;
      var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
      return A3($elm$core$Elm$JsArray$unsafeSet, pos, $elm$core$Array$Leaf(newLeaf), tree);
    }
  });
  var $elm$core$Array$set = F3(function (index, value, array) {
    var len = array.a;
    var startShift = array.b;
    var tree = array.c;
    var tail = array.d;
    return index < 0 || _Utils_cmp(index, len) > -1
      ? array
      : _Utils_cmp(index, $elm$core$Array$tailIndex(len)) > -1
        ? A4(
            $elm$core$Array$Array_elm_builtin,
            len,
            startShift,
            tree,
            A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)
          )
        : A4($elm$core$Array$Array_elm_builtin, len, startShift, A4($elm$core$Array$setHelp, startShift, index, value, tree), tail);
  });
  var $author$project$Scenes$Level1$GameStuff$Model$updKeyUp = function (omodel) {
    var model = _Utils_update(omodel, { keyListPre: omodel.keyList });
    var keyUp = function (key) {
      return (
        _Utils_eq(A2($elm$core$Array$get, key, omodel.keyListPre), $elm$core$Maybe$Just(true)) &&
        _Utils_eq(A2($elm$core$Array$get, key, omodel.keyList), $elm$core$Maybe$Just(false))
      );
    };
    return keyUp(82) ? $author$project$Scenes$Level1$GameStuff$Common$nullModel : keyUp(27) ? _Utils_update(model, { pause: !model.pause }) : model;
  };
  var $author$project$Scenes$Level1$GameStuff$Model$updateBlackIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Level1$GameStuff$Model$updateBlackOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha + 0.005 }));
  };
  var $author$project$Scenes$Level1$LayerBase$Active = { $: "Active" };
  var $author$project$Scenes$Level1$LayerBase$Small = { $: "Small" };
  var $elm$random$Random$Generator = function (a) {
    return { $: "Generator", a: a };
  };
  var $elm$random$Random$Seed = F2(function (a, b) {
    return { $: "Seed", a: a, b: b };
  });
  var $elm$random$Random$next = function (_v0) {
    var state0 = _v0.a;
    var incr = _v0.b;
    return A2($elm$random$Random$Seed, (state0 * 1664525 + incr) >>> 0, incr);
  };
  var $elm$core$Bitwise$xor = _Bitwise_xor;
  var $elm$random$Random$peel = function (_v0) {
    var state = _v0.a;
    var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
    return ((word >>> 22) ^ word) >>> 0;
  };
  var $elm$random$Random$int = F2(function (a, b) {
    return $elm$random$Random$Generator(function (seed0) {
      var _v0 = _Utils_cmp(a, b) < 0 ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
      var lo = _v0.a;
      var hi = _v0.b;
      var range = hi - lo + 1;
      if (!((range - 1) & range)) {
        return _Utils_Tuple2((((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo, $elm$random$Random$next(seed0));
      } else {
        var threshhold = (-range >>> 0) % range >>> 0;
        var accountForBias = function (seed) {
          accountForBias: while (true) {
            var x = $elm$random$Random$peel(seed);
            var seedN = $elm$random$Random$next(seed);
            if (_Utils_cmp(x, threshhold) < 0) {
              var $temp$seed = seedN;
              seed = $temp$seed;
              continue accountForBias;
            } else {
              return _Utils_Tuple2((x % range) + lo, seedN);
            }
          }
        };
        return accountForBias(seed0);
      }
    });
  });
  var $author$project$Lib$Tools$RNG$genInt = function (_v0) {
    var a = _v0.a;
    var b = _v0.b;
    return A2($elm$random$Random$int, a, b);
  };
  var $elm$random$Random$initialSeed = function (x) {
    var _v0 = $elm$random$Random$next(A2($elm$random$Random$Seed, 0, 1013904223));
    var state1 = _v0.a;
    var incr = _v0.b;
    var state2 = (state1 + x) >>> 0;
    return $elm$random$Random$next(A2($elm$random$Random$Seed, state2, incr));
  };
  var $author$project$Lib$Tools$RNG$seed = function (t) {
    return $elm$random$Random$initialSeed(t);
  };
  var $elm$random$Random$step = F2(function (_v0, seed) {
    var generator = _v0.a;
    return generator(seed);
  });
  var $author$project$Lib$Tools$RNG$genRandomInt = F2(function (t, _v0) {
    var a = _v0.a;
    var b = _v0.b;
    return A2($elm$random$Random$step, $author$project$Lib$Tools$RNG$genInt(_Utils_Tuple2(a, b)), $author$project$Lib$Tools$RNG$seed(t)).a;
  });
  var $author$project$Scenes$Level1$GameStuff$Model$genFeature = function (env) {
    var startTime = env.t;
    var newType =
      A2($author$project$Lib$Tools$RNG$genRandomInt, env.t, _Utils_Tuple2(1, 2)) > 1
        ? $author$project$Scenes$Level1$LayerBase$Big
        : $author$project$Scenes$Level1$LayerBase$Small;
    var newState =
      A2($author$project$Lib$Tools$RNG$genRandomInt, env.t, _Utils_Tuple2(0, 100)) > 10
        ? $author$project$Scenes$Level1$LayerBase$Active
        : $author$project$Scenes$Level1$LayerBase$Passive;
    return { featType: newType, startTime: startTime, state: newState };
  };
  var $author$project$Scenes$Level1$GameStuff$Model$updateFeature = F2(function (env, feat) {
    var newFeat = env.t - feat.startTime < 1000 ? feat : $author$project$Scenes$Level1$GameStuff$Model$genFeature(env);
    return newFeat;
  });
  var $author$project$Scenes$Level1$GameStuff$Model$updatePaddle = F3(function (paddle, env, feat) {
    var _v0 = feat.state;
    if (_v0.$ === "Active") {
      if (_Utils_eq(env.t, feat.startTime)) {
        var _v1 = feat.featType;
        if (_v1.$ === "Big") {
          return _Utils_update(paddle, { r: paddle.r * 1.5 });
        } else {
          return _Utils_update(paddle, { r: paddle.r / 1.5 });
        }
      } else {
        if (env.t - feat.startTime < 1000) {
          return paddle;
        } else {
          return _Utils_update(paddle, { r: $author$project$Scenes$Level1$LayerBase$nullCommonData.paddleRadius });
        }
      }
    } else {
      return _Utils_update(paddle, { r: $author$project$Scenes$Level1$LayerBase$nullCommonData.paddleRadius });
    }
  });
  var $author$project$Scenes$Level1$GameStuff$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "Tick":
        if (_Utils_eq(model.fading, $author$project$Scenes$Level1$GameStuff$Common$Beginning)) {
          return _Utils_Tuple3(
            _Utils_update(model, { fading: $author$project$Scenes$Level1$GameStuff$Common$FadingIn }),
            _List_fromArray([
              _Utils_Tuple2(
                $author$project$Lib$Layer$Base$LayerParentScene,
                A3(
                  $author$project$Lib$Layer$Base$LayerSoundMsg,
                  "Level1Bgm",
                  $author$project$Lib$Resources$Base$getResourcePath("audio/level.ogg"),
                  $author$project$Lib$Audio$Base$ALoop
                )
              ),
            ]),
            env
          );
        } else {
          if (_Utils_eq(model.fading, $author$project$Scenes$Level1$GameStuff$Common$FadingIn)) {
            var _v2 = $author$project$Scenes$Level1$GameStuff$Model$isFinishedFadeIn(
              $author$project$Scenes$Level1$GameStuff$Model$updateBlackIn(_Utils_Tuple2(env, model))
            );
            var nenv = _v2.a;
            var nmodel = _v2.b;
            return _Utils_Tuple3(nmodel, _List_Nil, nenv);
          } else {
            if (_Utils_eq(model.fading, $author$project$Scenes$Level1$GameStuff$Common$FadingOut)) {
              var _v3 = $author$project$Scenes$Level1$GameStuff$Model$isFinishedFadeOut(
                $author$project$Scenes$Level1$GameStuff$Model$updateBlackOut(_Utils_Tuple2(env, model))
              );
              var nenv = _v3.a;
              var nmodel = _v3.b;
              return _Utils_Tuple3(
                nmodel,
                _List_fromArray([
                  _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerStopSoundMsg("Level1Bgm")),
                ]),
                nenv
              );
            } else {
              if (model.win) {
                return _Utils_eq(model.fading, $author$project$Scenes$Level1$GameStuff$Common$FadingOutEnd)
                  ? _Utils_Tuple3(
                      model,
                      _List_fromArray([
                        _Utils_Tuple2(
                          $author$project$Lib$Layer$Base$LayerParentScene,
                          $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Transition1")
                        ),
                      ]),
                      env
                    )
                  : _Utils_Tuple3(model, _List_Nil, env);
              } else {
                if (model.pause) {
                  return _Utils_Tuple3($author$project$Scenes$Level1$GameStuff$Model$updKeyUp(model), _List_Nil, env);
                } else {
                  var newmodel = $author$project$Scenes$Level1$GameStuff$Model$updKeyUp(
                    $author$project$Scenes$Level1$GameStuff$Model$ifWin(
                      $author$project$Scenes$Level1$GameStuff$Model$ifDead(
                        $author$project$Scenes$Level1$GameStuff$Model$movePaddle(
                          $author$project$Scenes$Level1$GameStuff$Model$reflect($author$project$Scenes$Level1$GameStuff$Model$moveBall(model))
                        )
                      )
                    )
                  );
                  var newmodel2 = (function () {
                    if (
                      _Utils_cmp(
                        $author$project$Scenes$Level1$GameStuff$Model$aliveBricksCount(newmodel),
                        $author$project$Scenes$Level1$GameStuff$Model$aliveBricksCount(model)
                      ) < 0
                    ) {
                      var newFeat = A2($author$project$Scenes$Level1$GameStuff$Model$updateFeature, env, model.feature);
                      return _Utils_update(newmodel, {
                        feature: newFeat,
                        paddle: A3($author$project$Scenes$Level1$GameStuff$Model$updatePaddle, newmodel.paddle, env, newFeat),
                      });
                    } else {
                      return _Utils_update(newmodel, {
                        paddle: A3($author$project$Scenes$Level1$GameStuff$Model$updatePaddle, newmodel.paddle, env, model.feature),
                      });
                    }
                  })();
                  return _Utils_Tuple3(newmodel2, _List_Nil, env);
                }
              }
            }
          }
        }
      case "KeyDown":
        var key = _v1.a;
        var newmodel = $author$project$Scenes$Level1$GameStuff$Model$updKeyUp(model);
        var newmodel2 = (function () {
          if (
            _Utils_cmp(
              $author$project$Scenes$Level1$GameStuff$Model$aliveBricksCount(newmodel),
              $author$project$Scenes$Level1$GameStuff$Model$aliveBricksCount(model)
            ) < 0
          ) {
            var newFeat = A2($author$project$Scenes$Level1$GameStuff$Model$updateFeature, env, model.feature);
            return _Utils_update(newmodel, {
              feature: newFeat,
              paddle: A3($author$project$Scenes$Level1$GameStuff$Model$updatePaddle, newmodel.paddle, env, newFeat),
            });
          } else {
            return _Utils_update(newmodel, {
              paddle: A3($author$project$Scenes$Level1$GameStuff$Model$updatePaddle, newmodel.paddle, env, model.feature),
            });
          }
        })();
        var cur = model.keyList;
        return _Utils_Tuple3(
          _Utils_update(newmodel2, {
            keyList: A3($elm$core$Array$set, key, true, cur),
            keyListPre: cur,
          }),
          _List_Nil,
          env
        );
      case "KeyUp":
        var key = _v1.a;
        var cur = model.keyList;
        return _Utils_Tuple3(
          _Utils_update(model, {
            keyList: A3($elm$core$Array$set, key, false, cur),
            keyListPre: cur,
            paddle: A3($author$project$Scenes$Level1$GameStuff$Model$updatePaddle, model.paddle, env, model.feature),
          }),
          _List_Nil,
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Level1$GameStuff$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $linsyking$elm_canvas$Canvas$Settings$Text$Center = { $: "Center" };
  var $linsyking$elm_canvas$Canvas$Settings$Text$Middle = { $: "Middle" };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign = function (align) {
    return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field, "textAlign", $elm$json$Json$Encode$string(align));
  };
  var $linsyking$elm_canvas$Canvas$Settings$Text$textAlignToString = function (alignment) {
    switch (alignment.$) {
      case "Left":
        return "left";
      case "Right":
        return "right";
      case "Center":
        return "center";
      case "Start":
        return "start";
      default:
        return "end";
    }
  };
  var $linsyking$elm_canvas$Canvas$Settings$Text$align = function (alignment) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign($linsyking$elm_canvas$Canvas$Settings$Text$textAlignToString(alignment))
    );
  };
  var $linsyking$elm_canvas$Canvas$Settings$Text$textBaseLineToString = function (baseLineSetting) {
    switch (baseLineSetting.$) {
      case "Top":
        return "top";
      case "Hanging":
        return "hanging";
      case "Middle":
        return "middle";
      case "Alphabetic":
        return "alphabetic";
      case "Ideographic":
        return "ideographic";
      default:
        return "bottom";
    }
  };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textBaseline = function (baseline) {
    return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field, "textBaseline", $elm$json$Json$Encode$string(baseline));
  };
  var $linsyking$elm_canvas$Canvas$Settings$Text$baseLine = function (textBaseLine) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textBaseline(
        $linsyking$elm_canvas$Canvas$Settings$Text$textBaseLineToString(textBaseLine)
      )
    );
  };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$font = function (f) {
    return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field, "font", $elm$json$Json$Encode$string(f));
  };
  var $linsyking$elm_canvas$Canvas$Settings$Text$font = function (_v0) {
    var size = _v0.size;
    var family = _v0.family;
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$font($elm$core$String$fromInt(size) + ("px " + family))
    );
  };
  var $author$project$Lib$Render$Text$renderTextWithColorCenter = F6(function (gd, size, s, ft, col, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    var rx = A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, size);
    var _v1 = A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, _Utils_Tuple2(x, y));
    var dsx = _v1.a;
    var dsy = _v1.b;
    return A3(
      $linsyking$elm_canvas$Canvas$text,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Text$font({
          family: ft,
          size: $elm$core$Basics$floor(rx),
        }),
        $linsyking$elm_canvas$Canvas$Settings$Text$align($linsyking$elm_canvas$Canvas$Settings$Text$Center),
        $linsyking$elm_canvas$Canvas$Settings$fill(col),
        $linsyking$elm_canvas$Canvas$Settings$Text$baseLine($linsyking$elm_canvas$Canvas$Settings$Text$Middle),
      ]),
      _Utils_Tuple2(dsx, dsy),
      s
    );
  });
  var $avh4$elm_color$Color$scaleFrom255 = function (c) {
    return c / 255;
  };
  var $avh4$elm_color$Color$rgb255 = F3(function (r, g, b) {
    return A4(
      $avh4$elm_color$Color$RgbaSpace,
      $avh4$elm_color$Color$scaleFrom255(r),
      $avh4$elm_color$Color$scaleFrom255(g),
      $avh4$elm_color$Color$scaleFrom255(b),
      1.0
    );
  });
  var $author$project$Scenes$Level1$GameStuff$Model$renderDie = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "YOU FAILED",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 500)
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          80,
          "PRESS       TO RESTART",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 650)
        ),
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(833, 600), _Utils_Tuple2(96, 96), "key_r"),
      ])
    );
  });
  var $author$project$Scenes$Level1$GameStuff$Model$renderPause = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "PAUSED",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 255, 255, 255),
          _Utils_Tuple2(960, 540)
        ),
      ])
    );
  });
  var $author$project$Scenes$Level1$GameStuff$Model$renderWin = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "YOU WIN !!!",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 540)
        ),
      ])
    );
  });
  var $author$project$Scenes$Level1$GameStuff$Model$viewModel = F2(function (env, model) {
    var commonData = $author$project$Scenes$Level1$LayerBase$nullCommonData;
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _Utils_ap(
        _List_fromArray([
          (function () {
            if (model.win) {
              return A2($author$project$Scenes$Level1$GameStuff$Model$renderWin, env, model);
            } else {
              if (!model.alive) {
                return A2($author$project$Scenes$Level1$GameStuff$Model$renderDie, env, model);
              } else {
                var gameStuff = A2(
                  $elm$core$List$cons,
                  (function () {
                    var y = model.paddle.y;
                    var x = model.paddle.x;
                    var r = model.paddle.r;
                    return A5(
                      $author$project$Lib$Render$Sprite$renderSprite,
                      env.globalData,
                      _List_Nil,
                      _Utils_Tuple2($elm$core$Basics$round(x - r), $elm$core$Basics$round(y - r)),
                      _Utils_Tuple2($elm$core$Basics$round(2 * r), $elm$core$Basics$round(2 * r)),
                      "paddle"
                    );
                  })(),
                  _Utils_ap(
                    A2(
                      $elm$core$List$map,
                      function (_v0) {
                        var x = _v0.x;
                        var y = _v0.y;
                        var r = _v0.r;
                        return A5(
                          $author$project$Lib$Render$Sprite$renderSprite,
                          env.globalData,
                          _List_Nil,
                          _Utils_Tuple2($elm$core$Basics$round(x - r), $elm$core$Basics$round(y - r)),
                          _Utils_Tuple2($elm$core$Basics$round(2 * r), $elm$core$Basics$round(2 * r)),
                          "ball"
                        );
                      },
                      model.balls
                    ),
                    A2(
                      $elm$core$List$map,
                      function (_v1) {
                        var x = _v1.x;
                        var y = _v1.y;
                        var state = _v1.state;
                        switch (state.$) {
                          case "Normal":
                            return A5(
                              $author$project$Lib$Render$Sprite$renderSprite,
                              env.globalData,
                              _List_Nil,
                              _Utils_Tuple2($elm$core$Basics$round(x), $elm$core$Basics$round(y)),
                              _Utils_Tuple2($elm$core$Basics$round(commonData.brickWidth), $elm$core$Basics$round(commonData.brickHeight)),
                              "brick"
                            );
                          case "Attacked":
                            return A5(
                              $author$project$Lib$Render$Sprite$renderSprite,
                              env.globalData,
                              _List_Nil,
                              _Utils_Tuple2($elm$core$Basics$round(x), $elm$core$Basics$round(y)),
                              _Utils_Tuple2($elm$core$Basics$round(commonData.brickWidth), $elm$core$Basics$round(commonData.brickHeight)),
                              "brick_attacked"
                            );
                          default:
                            return $linsyking$elm_canvas$Canvas$empty;
                        }
                      },
                      model.bricks
                    )
                  )
                );
                return !model.pause
                  ? A2(
                      $linsyking$elm_canvas$Canvas$group,
                      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
                      gameStuff
                    )
                  : A2(
                      $linsyking$elm_canvas$Canvas$group,
                      _List_Nil,
                      _Utils_ap(gameStuff, _List_fromArray([A2($author$project$Scenes$Level1$GameStuff$Model$renderPause, env, model)]))
                    );
              }
            }
          })(),
        ]),
        _List_fromArray([A2($author$project$Scenes$Level1$GameStuff$Model$renderBlack, env, model)])
      )
    );
  });
  var $author$project$Scenes$Level1$GameStuff$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Level1$GameStuff$Model$initModel, env, i),
      name: "GameStuff",
      update: $author$project$Scenes$Level1$GameStuff$Model$updateModel,
      view: $author$project$Scenes$Level1$GameStuff$Model$viewModel,
    };
  });
  var $author$project$Scenes$Level1$SceneInit$nullLevel1Init = {};
  var $author$project$Scenes$Level1$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "Level1InitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Level1$SceneInit$nullLevel1Init;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Level1$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Level1$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Level1$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Level1$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Level1$GameStuff$Global$getLayerT(
          A2(
            $author$project$Scenes$Level1$GameStuff$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Level1$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Level1$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Level1$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Level1$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Level1$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Level1$Export$scene = {
    init: $author$project$Scenes$Level1$Common$initModel,
    update: $author$project$Scenes$Level1$Model$updateModel,
    view: $author$project$Scenes$Level1$Model$viewModel,
  };
  var $author$project$Scenes$Level2$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Level2$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Level2$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Level2$Background$Common$nullModel = {};
  var $author$project$Scenes$Level2$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Level2$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level2$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Level2$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Level2$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level2$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Level2$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Level2$LayerSettings$GameStuffData = function (a) {
    return { $: "GameStuffData", a: a };
  };
  var $author$project$Scenes$Level2$GameStuff$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Level2$LayerSettings$GameStuffData(data);
  };
  var $author$project$Scenes$Level2$GameStuff$Common$Beginning = { $: "Beginning" };
  var $author$project$Scenes$Level2$LayerBase$NormalState = { $: "NormalState" };
  var $author$project$Scenes$Level2$LayerBase$NormalType = { $: "NormalType" };
  var $author$project$Scenes$Level2$LayerBase$nullCommonData = (function () {
    var paddleRadius = 130;
    var brickWidth = 196;
    var brickRowNum = 4;
    var brickHeight = 98;
    var brickColNum = 6;
    var blockWidth = 1920 / brickColNum;
    var blockHeight = 140;
    return {
      blockHeight: blockHeight,
      blockWidth: blockWidth,
      brickColNum: brickColNum,
      brickHeight: brickHeight,
      brickRowNum: brickRowNum,
      brickWidth: brickWidth,
      paddleRadius: paddleRadius,
    };
  })();
  var $author$project$Scenes$Level2$LayerBase$Bonus = { $: "Bonus" };
  var $author$project$Scenes$Level2$LayerBase$Danger = { $: "Danger" };
  var $author$project$Scenes$Level2$GameStuff$Common$randPM1 = function (seed) {
    return A2($elm$random$Random$step, A2($elm$random$Random$int, 1, 24), seed);
  };
  var $author$project$Scenes$Level2$GameStuff$Common$randomlizeBricksType = F2(function (seed, bricks) {
    if (!bricks.b) {
      return _List_Nil;
    } else {
      var x = bricks.a;
      var xs = bricks.b;
      var _v1 = $author$project$Scenes$Level2$GameStuff$Common$randPM1(seed);
      var ec = _v1.a;
      var nSeed = _v1.b;
      var rec =
        ec <= 3
          ? $author$project$Scenes$Level2$LayerBase$Danger
          : ec <= 6
            ? $author$project$Scenes$Level2$LayerBase$Bonus
            : $author$project$Scenes$Level2$LayerBase$NormalType;
      return A2(
        $elm$core$List$cons,
        _Utils_update(x, { bricktype: rec }),
        A2($author$project$Scenes$Level2$GameStuff$Common$randomlizeBricksType, nSeed, xs)
      );
    }
  });
  var $author$project$Scenes$Level2$GameStuff$Common$nullModel = function (env) {
    var seed = $elm$random$Random$initialSeed(env.t);
    var globalData = env.globalData;
    var commonData = $author$project$Scenes$Level2$LayerBase$nullCommonData;
    return {
      alpha: 1,
      balls: _List_fromArray([
        {
          alphaRatio: 1,
          electricCharge: 0,
          r: 48,
          track: _List_Nil,
          vx: (2 / 16) * $author$project$MainConfig$timeInterval,
          vy: (-13 / 16) * $author$project$MainConfig$timeInterval,
          x: 1920 / 2,
          y: 1080 + 20 - 50 - commonData.paddleRadius,
        },
      ]),
      bricks: (function () {
        var yList = A2($elm$core$List$range, 0, commonData.brickRowNum - 1);
        var xList = A2($elm$core$List$range, 0, commonData.brickColNum - 1);
        return A2(
          $author$project$Scenes$Level2$GameStuff$Common$randomlizeBricksType,
          seed,
          A2(
            $elm$core$List$concatMap,
            function (y) {
              return A2(
                $elm$core$List$map,
                function (x) {
                  return {
                    animIndex: 0,
                    bricktype: $author$project$Scenes$Level2$LayerBase$NormalType,
                    electricCharge: 0,
                    state: $author$project$Scenes$Level2$LayerBase$NormalState,
                    x: x * commonData.blockWidth + (commonData.blockWidth - commonData.brickWidth) / 2,
                    y: y * commonData.blockHeight + (commonData.blockHeight - commonData.brickHeight) / 2,
                  };
                },
                xList
              );
            },
            yList
          )
        );
      })(),
      keyList: A2($elm$core$Array$repeat, 256, false),
      keyListPre: A2($elm$core$Array$repeat, 256, false),
      paddle: { electricCharge: 0, r: commonData.paddleRadius, x: 1920 / 2, y: 1080 + 20 },
      sceneState: $author$project$Scenes$Level2$GameStuff$Common$Beginning,
    };
  };
  var $author$project$Scenes$Level2$GameStuff$Global$ldtToData = F2(function (env, ldt) {
    if (ldt.$ === "GameStuffData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Level2$GameStuff$Common$nullModel(env);
    }
  });
  var $author$project$Scenes$Level2$GameStuff$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, A2($author$project$Scenes$Level2$GameStuff$Global$ldtToData, env, ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, A2($author$project$Scenes$Level2$GameStuff$Global$ldtToData, env, ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level2$GameStuff$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Level2$GameStuff$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Level2$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level2$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Level2$Background$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level2$Background$Common$nullModel;
  });
  var $author$project$Scenes$Level2$Background$Model$updateModel = F3(function (env, _v0, model) {
    return _Utils_Tuple3(model, _List_Nil, env);
  });
  var $author$project$Scenes$Level2$Background$Model$viewModel = F2(function (env, _v0) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080), "background"),
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.5))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
      ])
    );
  });
  var $author$project$Scenes$Level2$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Level2$Background$Model$initModel, env, i),
      name: "Backgroud",
      update: $author$project$Scenes$Level2$Background$Model$updateModel,
      view: $author$project$Scenes$Level2$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Level2$GameStuff$Model$initModel = F2(function (env, _v0) {
    return $author$project$Scenes$Level2$GameStuff$Common$nullModel(env);
  });
  var $author$project$Scenes$Level2$GameStuff$Common$End = { $: "End" };
  var $author$project$Scenes$Level2$GameStuff$Common$FadeIn = { $: "FadeIn" };
  var $author$project$Scenes$Level2$GameStuff$Common$Win = { $: "Win" };
  var $author$project$Scenes$Level2$GameStuff$Model$isFinishedFadeOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha >= 1
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 1, sceneState: $author$project$Scenes$Level2$GameStuff$Common$End }))
      : _Utils_Tuple2(env, model);
  };
  var $elm$core$Basics$atan2 = _Basics_atan2;
  var $elm$core$Basics$cos = _Basics_cos;
  var $elm$core$Basics$sin = _Basics_sin;
  var $author$project$Scenes$Level2$GameStuff$Model$moveBall = function (model) {
    return _Utils_update(model, {
      balls: A2(
        $elm$core$List$map,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var vx = _v0.vx;
          var vy = _v0.vy;
          var r = _v0.r;
          var electricCharge = _v0.electricCharge;
          var track = _v0.track;
          var alphaRatio = _v0.alphaRatio;
          var v = $elm$core$Basics$sqrt(vx * vx + vy * vy);
          var theta = A2($elm$core$Basics$atan2, vx, vy);
          var ntrack = A2($elm$core$List$append, track, _List_fromArray([_Utils_Tuple2(x, y)]));
          var new_alpha = alphaRatio < 0.001 ? A2($elm$core$Basics$min, 1, alphaRatio + 0.00001) : A2($elm$core$Basics$min, 1, alphaRatio + 0.002);
          var mtrack = $elm$core$List$length(ntrack) > 30 ? A2($elm$core$List$drop, 1, ntrack) : ntrack;
          var dTheta = ((electricCharge * 0.005) / 4) * $author$project$MainConfig$timeInterval;
          var nTheta = theta + dTheta;
          var nvx = v * $elm$core$Basics$sin(nTheta);
          var nvy = v * $elm$core$Basics$cos(nTheta);
          return { alphaRatio: new_alpha, electricCharge: electricCharge * 0.999, r: r, track: mtrack, vx: nvx, vy: nvy, x: x + vx, y: y + vy };
        },
        model.balls
      ),
    });
  };
  var $author$project$Scenes$Level2$GameStuff$Model$movePaddle = function (model) {
    var opaddle = model.paddle;
    var npaddle = (function () {
      var v = (20 / 16) * $author$project$MainConfig$timeInterval;
      var right =
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 39, model.keyList)) ||
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 68, model.keyList));
      var left =
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 37, model.keyList)) ||
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 65, model.keyList));
      return left
        ? _Utils_update(opaddle, {
            x: A2($elm$core$Basics$max, opaddle.x - v, 0),
          })
        : right
          ? _Utils_update(opaddle, {
              x: A2($elm$core$Basics$min, opaddle.x + v, 1920),
            })
          : opaddle;
    })();
    return _Utils_update(model, {
      paddle: _Utils_update(npaddle, { electricCharge: npaddle.electricCharge * 0.999 }),
    });
  };
  var $author$project$Scenes$Level2$GameStuff$Model$dist = F4(function (x1, y1, x2, y2) {
    return $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, x1 - x2, 2) + A2($elm$core$Basics$pow, y1 - y2, 2));
  });
  var $author$project$Scenes$Level2$GameStuff$Model$addBallBrick = function (_v0) {
    var ball = _v0.a;
    var brick = _v0.b;
    if (_Utils_eq(brick.state, $author$project$Scenes$Level2$LayerBase$NormalState)) {
      var y1 = brick.y;
      var y = ball.y;
      var x1 = brick.x;
      var x = ball.x;
      var r = ball.r;
      var commonData = $author$project$Scenes$Level2$LayerBase$nullCommonData;
      var x2 = brick.x + commonData.brickWidth;
      var y2 = brick.y + commonData.brickHeight;
      return _Utils_cmp(x, x1) > -1 && _Utils_cmp(x, x2) < 1
        ? (_Utils_cmp(y - r, y1) < 1 && _Utils_cmp(y + r, y1) > -1) || (_Utils_cmp(y + r, y2) > -1 && _Utils_cmp(y - r, y2) < 1)
          ? _Utils_eq(brick.bricktype, $author$project$Scenes$Level2$LayerBase$Bonus)
            ? true
            : false
          : _Utils_cmp(y + r, y1) > -1 && _Utils_cmp(y - r, y2) < 1
            ? false
            : false
        : _Utils_cmp(y, y1) > -1 && _Utils_cmp(y, y2) < 1
          ? (_Utils_cmp(x - r, x1) < 1 && _Utils_cmp(x + r, x1) > -1) || (_Utils_cmp(x + r, x2) > -1 && _Utils_cmp(x - r, x2) < 1)
            ? _Utils_eq(brick.bricktype, $author$project$Scenes$Level2$LayerBase$Bonus)
              ? true
              : false
            : _Utils_cmp(x + r, x1) > -1 && _Utils_cmp(x - r, x2) < 1
              ? false
              : false
          : _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x1, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x1, y2), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x2, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x2, y2), r) < 1
            ? _Utils_eq(brick.bricktype, $author$project$Scenes$Level2$LayerBase$Bonus)
              ? true
              : false
            : false;
    } else {
      return false;
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$addBallBricks = function (_v0) {
    var ball = _v0.a;
    var bricks = _v0.b;
    if (!bricks.b) {
      return false;
    } else {
      var r = bricks.a;
      var rs = bricks.b;
      var ifnballs = $author$project$Scenes$Level2$GameStuff$Model$addBallBricks(_Utils_Tuple2(ball, rs));
      var ifnball = $author$project$Scenes$Level2$GameStuff$Model$addBallBrick(_Utils_Tuple2(ball, r));
      return ifnball || ifnballs;
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$addBallsBricks = function (_v0) {
    var balls = _v0.a;
    var bricks = _v0.b;
    if (!balls.b) {
      return _Utils_Tuple2(balls, bricks);
    } else {
      var b = balls.a;
      var bs = balls.b;
      var nball = $author$project$Scenes$Level2$GameStuff$Model$addBallBricks(_Utils_Tuple2(b, bricks))
        ? _List_fromArray([b, b])
        : _List_fromArray([b]);
      var _v2 = $author$project$Scenes$Level2$GameStuff$Model$addBallsBricks(_Utils_Tuple2(bs, bricks));
      var nballs = _v2.a;
      return _Utils_Tuple2(_Utils_ap(nball, nballs), bricks);
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallBorder = function (ball) {
    var y = ball.y;
    var x = ball.x;
    var r = ball.r;
    return (x - r <= 0 && ball.vx < 0) || (x + r >= 1920 && ball.vx > 0)
      ? _Utils_update(ball, { vx: -ball.vx })
      : y - r <= 0 && ball.vy < 0
        ? _Utils_update(ball, { vy: -ball.vy })
        : ball;
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallsBorder = function (balls) {
    return A2($elm$core$List$map, $author$project$Scenes$Level2$GameStuff$Model$reflectBallBorder, balls);
  };
  var $author$project$Scenes$Level2$LayerBase$Attacked = { $: "Attacked" };
  var $author$project$Scenes$Level2$LayerBase$Disappeared = { $: "Disappeared" };
  var $author$project$Scenes$Level2$GameStuff$Model$updateBrick = function (brick) {
    return _Utils_eq(brick.state, $author$project$Scenes$Level2$LayerBase$Attacked)
      ? brick.animIndex < 4
        ? _Utils_update(brick, { animIndex: brick.animIndex + 1 })
        : _Utils_update(brick, { animIndex: 0, state: $author$project$Scenes$Level2$LayerBase$Disappeared })
      : brick;
  };
  var $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked = function (brick) {
    return !_Utils_eq(brick.state, $author$project$Scenes$Level2$LayerBase$Disappeared)
      ? _Utils_eq(brick.state, $author$project$Scenes$Level2$LayerBase$NormalState)
        ? _Utils_update(brick, { state: $author$project$Scenes$Level2$LayerBase$Attacked })
        : brick.animIndex < 4
          ? _Utils_update(brick, { animIndex: brick.animIndex + 1 })
          : _Utils_update(brick, { animIndex: 0, state: $author$project$Scenes$Level2$LayerBase$Disappeared })
      : brick;
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallBrick = function (_v0) {
    var ball = _v0.a;
    var brick = _v0.b;
    if (_Utils_eq(brick.state, $author$project$Scenes$Level2$LayerBase$NormalState)) {
      var y1 = brick.y;
      var y = ball.y;
      var x1 = brick.x;
      var x = ball.x;
      var r = ball.r;
      var commonData = $author$project$Scenes$Level2$LayerBase$nullCommonData;
      var x2 = brick.x + commonData.brickWidth;
      var y2 = brick.y + commonData.brickHeight;
      return _Utils_cmp(x, x1) > -1 && _Utils_cmp(x, x2) < 1
        ? (_Utils_cmp(y - r, y1) < 1 && _Utils_cmp(y + r, y1) > -1) || (_Utils_cmp(y + r, y2) > -1 && _Utils_cmp(y - r, y2) < 1)
          ? _Utils_eq(brick.bricktype, $author$project$Scenes$Level2$LayerBase$Danger)
            ? _Utils_Tuple2(
                _Utils_update(ball, { alphaRatio: 0, electricCharge: ball.electricCharge + brick.electricCharge, vy: -ball.vy }),
                $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked(brick)
              )
            : _Utils_Tuple2(
                _Utils_update(ball, { electricCharge: ball.electricCharge + brick.electricCharge, vy: -ball.vy }),
                $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked(brick)
              )
          : _Utils_cmp(y + r, y1) > -1 && _Utils_cmp(y - r, y2) < 1
            ? _Utils_Tuple2(ball, $author$project$Scenes$Level2$GameStuff$Model$updateBrick(brick))
            : _Utils_Tuple2(ball, $author$project$Scenes$Level2$GameStuff$Model$updateBrick(brick))
        : _Utils_cmp(y, y1) > -1 && _Utils_cmp(y, y2) < 1
          ? (_Utils_cmp(x - r, x1) < 1 && _Utils_cmp(x + r, x1) > -1) || (_Utils_cmp(x + r, x2) > -1 && _Utils_cmp(x - r, x2) < 1)
            ? _Utils_eq(brick.bricktype, $author$project$Scenes$Level2$LayerBase$Danger)
              ? _Utils_Tuple2(
                  _Utils_update(ball, { alphaRatio: 0, electricCharge: ball.electricCharge + brick.electricCharge, vx: -ball.vx }),
                  $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked(brick)
                )
              : _Utils_Tuple2(
                  _Utils_update(ball, { electricCharge: ball.electricCharge + brick.electricCharge, vx: -ball.vx }),
                  $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked(brick)
                )
            : _Utils_cmp(x + r, x1) > -1 && _Utils_cmp(x - r, x2) < 1
              ? _Utils_Tuple2(ball, $author$project$Scenes$Level2$GameStuff$Model$updateBrick(brick))
              : _Utils_Tuple2(ball, $author$project$Scenes$Level2$GameStuff$Model$updateBrick(brick))
          : _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x1, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x1, y2), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x2, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level2$GameStuff$Model$dist, x, y, x2, y2), r) < 1
            ? _Utils_eq(brick.bricktype, $author$project$Scenes$Level2$LayerBase$Danger)
              ? _Utils_Tuple2(
                  _Utils_update(ball, { alphaRatio: 0, electricCharge: ball.electricCharge + brick.electricCharge, vx: -ball.vx, vy: -ball.vy }),
                  $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked(brick)
                )
              : _Utils_Tuple2(
                  _Utils_update(ball, { electricCharge: ball.electricCharge + brick.electricCharge, vx: -ball.vx, vy: -ball.vy }),
                  $author$project$Scenes$Level2$GameStuff$Model$updateBrickAttacked(brick)
                )
            : _Utils_Tuple2(ball, $author$project$Scenes$Level2$GameStuff$Model$updateBrick(brick));
    } else {
      return _Utils_Tuple2(ball, $author$project$Scenes$Level2$GameStuff$Model$updateBrick(brick));
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallBricks = function (_v0) {
    var ball = _v0.a;
    var bricks = _v0.b;
    if (!bricks.b) {
      return _Utils_Tuple2(ball, bricks);
    } else {
      var r = bricks.a;
      var rs = bricks.b;
      var _v2 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallBrick(_Utils_Tuple2(ball, r));
      var nball = _v2.a;
      var nbrick = _v2.b;
      var _v3 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallBricks(_Utils_Tuple2(nball, rs));
      var nball2 = _v3.a;
      var nbricks = _v3.b;
      return _Utils_Tuple2(nball2, A2($elm$core$List$cons, nbrick, nbricks));
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallsBricks = function (_v0) {
    var balls = _v0.a;
    var bricks = _v0.b;
    if (!balls.b) {
      return _Utils_Tuple2(balls, bricks);
    } else {
      var b = balls.a;
      var bs = balls.b;
      var _v2 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallBricks(_Utils_Tuple2(b, bricks));
      var nball = _v2.a;
      var nbricks = _v2.b;
      var _v3 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallsBricks(_Utils_Tuple2(bs, nbricks));
      var nballs = _v3.a;
      var nbricks2 = _v3.b;
      return _Utils_Tuple2(A2($elm$core$List$cons, nball, nballs), nbricks2);
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallPaddle = function (_v0) {
    var b = _v0.a;
    var c = _v0.b;
    if (_Utils_cmp(A2($elm$core$Basics$pow, b.x - c.x, 2) + A2($elm$core$Basics$pow, b.y - c.y, 2), A2($elm$core$Basics$pow, b.r + c.r, 2)) < 1) {
      var c_ec = ((b.electricCharge + c.electricCharge) * 1) / 2;
      var b_ec = ((b.electricCharge + c.electricCharge) * 1) / 2;
      var _v1 = _Utils_Tuple2(b.x - c.x, b.y - c.y);
      var vx1 = _v1.a;
      var vy1 = _v1.b;
      var _v2 = _Utils_Tuple2(
        vx1 / $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, vx1, 2) + A2($elm$core$Basics$pow, vy1, 2)),
        vy1 / $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, vx1, 2) + A2($elm$core$Basics$pow, vy1, 2))
      );
      var vx2 = _v2.a;
      var vy2 = _v2.b;
      var _v3 = _Utils_Tuple2(
        vx2 * $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, b.vx, 2) + A2($elm$core$Basics$pow, b.vy, 2)),
        vy2 * $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, b.vx, 2) + A2($elm$core$Basics$pow, b.vy, 2))
      );
      var vx3 = _v3.a;
      var vy3 = _v3.b;
      return _Utils_Tuple2(_Utils_update(b, { electricCharge: b_ec, vx: vx3, vy: vy3 }), _Utils_update(c, { electricCharge: c_ec }));
    } else {
      return _Utils_Tuple2(b, c);
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallsPaddle = function (_v0) {
    var balls = _v0.a;
    var paddle = _v0.b;
    if (!balls.b) {
      return _Utils_Tuple2(_List_Nil, paddle);
    } else {
      var ball = balls.a;
      var rest = balls.b;
      var _v2 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallPaddle(_Utils_Tuple2(ball, paddle));
      var nball = _v2.a;
      var npaddle = _v2.b;
      var _v3 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallsPaddle(_Utils_Tuple2(rest, npaddle));
      var nballs = _v3.a;
      var npaddle2 = _v3.b;
      return _Utils_Tuple2(A2($elm$core$List$cons, nball, nballs), npaddle2);
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$removeIntersectBallPaddle = function (_v0) {
    removeIntersectBallPaddle: while (true) {
      var b = _v0.a;
      var c = _v0.b;
      if (_Utils_cmp(A2($elm$core$Basics$pow, b.x - c.x, 2) + A2($elm$core$Basics$pow, b.y - c.y, 2), A2($elm$core$Basics$pow, b.r + c.r, 2)) < 1) {
        var $temp$_v0 = _Utils_Tuple2(_Utils_update(b, { x: b.x + b.vx, y: b.y + b.vy }), c);
        _v0 = $temp$_v0;
        continue removeIntersectBallPaddle;
      } else {
        return b;
      }
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$removeIntersectBallsPaddle = function (_v0) {
    var balls = _v0.a;
    var paddle = _v0.b;
    if (!balls.b) {
      return balls;
    } else {
      var b = balls.a;
      var bs = balls.b;
      var nballs = $author$project$Scenes$Level2$GameStuff$Model$removeIntersectBallsPaddle(_Utils_Tuple2(bs, paddle));
      var nball = $author$project$Scenes$Level2$GameStuff$Model$removeIntersectBallPaddle(_Utils_Tuple2(b, paddle));
      return A2($elm$core$List$cons, nball, nballs);
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflect = function (model) {
    var _v0 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallsBricks(
      $author$project$Scenes$Level2$GameStuff$Model$addBallsBricks(_Utils_Tuple2(model.balls, model.bricks))
    );
    var fballs = _v0.a;
    var fbricks = _v0.b;
    var nballs = $author$project$Scenes$Level2$GameStuff$Model$reflectBallsBorder(fballs);
    var _v1 = $author$project$Scenes$Level2$GameStuff$Model$reflectBallsPaddle(_Utils_Tuple2(nballs, model.paddle));
    var mballs = _v1.a;
    var mpaddle = _v1.b;
    var sballs = $author$project$Scenes$Level2$GameStuff$Model$removeIntersectBallsPaddle(_Utils_Tuple2(mballs, mpaddle));
    return _Utils_update(model, { balls: sballs, bricks: fbricks, paddle: mpaddle });
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectBallDeadBorder = function (ball) {
    return ball.y + ball.r >= 1080 && ball.vy > 0 ? _Utils_update(ball, { vy: -ball.vy }) : ball;
  };
  var $author$project$Scenes$Level2$GameStuff$Model$reflectDeadBorder = function (model) {
    var nballs = A2($elm$core$List$map, $author$project$Scenes$Level2$GameStuff$Model$reflectBallDeadBorder, model.balls);
    return _Utils_update(model, { balls: nballs });
  };
  var $author$project$Scenes$Level2$GameStuff$Common$Die = { $: "Die" };
  var $author$project$Scenes$Level2$GameStuff$Model$ifDead = function (model) {
    var nballs = A2(
      $elm$core$List$filter,
      function (_v0) {
        var y = _v0.y;
        return y <= 1080;
      },
      model.balls
    );
    return !$elm$core$List$length(nballs)
      ? _Utils_update(model, { balls: nballs, sceneState: $author$project$Scenes$Level2$GameStuff$Common$Die })
      : _Utils_update(model, { balls: nballs });
  };
  var $author$project$Scenes$Level2$GameStuff$Model$ifWin = function (model) {
    return A3(
      $elm$core$List$foldl,
      function (_v0) {
        var state = _v0.state;
        return $elm$core$Basics$and(_Utils_eq(state, $author$project$Scenes$Level2$LayerBase$Disappeared));
      },
      true,
      model.bricks
    )
      ? _Utils_update(model, { sceneState: $author$project$Scenes$Level2$GameStuff$Common$Win })
      : model;
  };
  var $author$project$Scenes$Level2$GameStuff$Common$Start = { $: "Start" };
  var $author$project$Scenes$Level2$GameStuff$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, sceneState: $author$project$Scenes$Level2$GameStuff$Common$Start }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Level2$GameStuff$Common$Pause = { $: "Pause" };
  var $author$project$Scenes$Level2$GameStuff$Model$updKeyUp = F2(function (env, omodel) {
    var model = _Utils_update(omodel, { keyListPre: omodel.keyList });
    var keyUp = function (key) {
      return (
        _Utils_eq(A2($elm$core$Array$get, key, omodel.keyListPre), $elm$core$Maybe$Just(true)) &&
        _Utils_eq(A2($elm$core$Array$get, key, omodel.keyList), $elm$core$Maybe$Just(false))
      );
    };
    return keyUp(82)
      ? $author$project$Scenes$Level2$GameStuff$Common$nullModel(env)
      : keyUp(27)
        ? _Utils_update(model, {
            sceneState: _Utils_eq(model.sceneState, $author$project$Scenes$Level2$GameStuff$Common$Pause)
              ? $author$project$Scenes$Level2$GameStuff$Common$Start
              : _Utils_eq(model.sceneState, $author$project$Scenes$Level2$GameStuff$Common$Start)
                ? $author$project$Scenes$Level2$GameStuff$Common$Pause
                : model.sceneState,
          })
        : model;
  });
  var $author$project$Scenes$Level2$GameStuff$Model$updateBlack = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Level2$GameStuff$Model$update = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "Start":
        return _Utils_Tuple2(
          env,
          A2(
            $author$project$Scenes$Level2$GameStuff$Model$updKeyUp,
            env,
            $author$project$Scenes$Level2$GameStuff$Model$ifWin(
              $author$project$Scenes$Level2$GameStuff$Model$ifDead(
                $author$project$Scenes$Level2$GameStuff$Model$movePaddle(
                  $author$project$Scenes$Level2$GameStuff$Model$reflect($author$project$Scenes$Level2$GameStuff$Model$moveBall(model))
                )
              )
            )
          )
        );
      case "FadeIn":
        return $author$project$Scenes$Level2$GameStuff$Model$isFinishedFadeIn(
          $author$project$Scenes$Level2$GameStuff$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      default:
        return _Utils_Tuple2(env, A2($author$project$Scenes$Level2$GameStuff$Model$updKeyUp, env, model));
    }
  });
  var $author$project$Scenes$Level2$GameStuff$Model$updateBlackOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha + 0.005 }));
  };
  var $author$project$Scenes$Level2$GameStuff$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "Tick":
        if (_Utils_eq(model.sceneState, $author$project$Scenes$Level2$GameStuff$Common$Beginning)) {
          return _Utils_Tuple3(
            _Utils_update(model, { sceneState: $author$project$Scenes$Level2$GameStuff$Common$FadeIn }),
            _List_fromArray([
              _Utils_Tuple2(
                $author$project$Lib$Layer$Base$LayerParentScene,
                A3(
                  $author$project$Lib$Layer$Base$LayerSoundMsg,
                  "Level2Bgm",
                  $author$project$Lib$Resources$Base$getResourcePath("audio/level.ogg"),
                  $author$project$Lib$Audio$Base$ALoop
                )
              ),
            ]),
            env
          );
        } else {
          if (_Utils_eq(model.sceneState, $author$project$Scenes$Level2$GameStuff$Common$End)) {
            return _Utils_Tuple3(
              model,
              _List_fromArray([
                _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Transition2")),
              ]),
              env
            );
          } else {
            if (_Utils_eq(model.sceneState, $author$project$Scenes$Level2$GameStuff$Common$Win)) {
              var _v2 = $author$project$Scenes$Level2$GameStuff$Model$isFinishedFadeOut(
                $author$project$Scenes$Level2$GameStuff$Model$updateBlackOut(
                  _Utils_Tuple2(
                    env,
                    $author$project$Scenes$Level2$GameStuff$Model$reflectDeadBorder(
                      $author$project$Scenes$Level2$GameStuff$Model$movePaddle(
                        $author$project$Scenes$Level2$GameStuff$Model$reflect($author$project$Scenes$Level2$GameStuff$Model$moveBall(model))
                      )
                    )
                  )
                )
              );
              var newEnv = _v2.a;
              var newModel = _v2.b;
              return _Utils_Tuple3(
                newModel,
                _List_fromArray([
                  _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerStopSoundMsg("Level2Bgm")),
                ]),
                newEnv
              );
            } else {
              var _v3 = A2($author$project$Scenes$Level2$GameStuff$Model$update, env, model);
              var newEnv = _v3.a;
              var newModel = _v3.b;
              return _Utils_Tuple3(newModel, _List_Nil, newEnv);
            }
          }
        }
      case "KeyDown":
        var key = _v1.a;
        var cur = model.keyList;
        return _Utils_Tuple3(
          _Utils_update(model, {
            keyList: A3($elm$core$Array$set, key, true, cur),
            keyListPre: cur,
          }),
          _List_Nil,
          env
        );
      case "KeyUp":
        var key = _v1.a;
        var cur = model.keyList;
        return _Utils_Tuple3(
          _Utils_update(model, {
            keyList: A3($elm$core$Array$set, key, false, cur),
            keyListPre: cur,
          }),
          _List_Nil,
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderDie = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "YOU FAILED",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 500)
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          80,
          "PRESS       TO RESTART",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 650)
        ),
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(833, 600), _Utils_Tuple2(96, 96), "key_r"),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalAlpha = function (alpha) {
    return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field, "globalAlpha", $elm$json$Json$Encode$float(alpha));
  };
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$alpha = function (a) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalAlpha(a));
  };
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$Circle = F2(function (a, b) {
    return { $: "Circle", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$circle = F2(function (pos, radius) {
    return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$Circle, pos, radius);
  });
  var $author$project$Lib$Render$Shape$circleFloat = F3(function (gd, _v0, r) {
    var posx = _v0.a;
    var posy = _v0.b;
    return A2(
      $linsyking$elm_canvas$Canvas$circle,
      A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, _Utils_Tuple2($elm$core$Basics$round(posx), $elm$core$Basics$round(posy))),
      A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, $elm$core$Basics$round(r))
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$tweens = function (l) {
    if (!l.b) {
      return _List_Nil;
    } else {
      if (!l.b.b) {
        var z = l.a;
        return _List_fromArray([z]);
      } else {
        var _v1 = l.a;
        var x1 = _v1.a;
        var y1 = _v1.b;
        var _v2 = l.b;
        var _v3 = _v2.a;
        var x2 = _v3.a;
        var y2 = _v3.b;
        var xs = _v2.b;
        return _Utils_ap(
          _List_fromArray([
            _Utils_Tuple2(x1, y1),
            _Utils_Tuple2((x1 * 2 + x2) / 3, (y1 * 2 + y2) / 3),
            _Utils_Tuple2((x1 + x2 * 2) / 3, (y1 + y2 * 2) / 3),
          ]),
          $author$project$Scenes$Level2$GameStuff$Render$tweens(A2($elm$core$List$cons, _Utils_Tuple2(x2, y2), xs))
        );
      }
    }
  };
  var $author$project$Scenes$Level2$GameStuff$Render$renderBalls = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      A2(
        $elm$core$List$concatMap,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var r = _v0.r;
          var track = _v0.track;
          var alphaRatio = _v0.alphaRatio;
          return _Utils_ap(
            A2(
              $elm$core$List$indexedMap,
              F2(function (i, _v1) {
                var tx = _v1.a;
                var ty = _v1.b;
                return A2(
                  $linsyking$elm_canvas$Canvas$shapes,
                  _List_fromArray([
                    $linsyking$elm_canvas$Canvas$Settings$fill(
                      A4(
                        $avh4$elm_color$Color$rgba,
                        0.73725 * A2($elm$core$Basics$pow, 0.97, 90 - i),
                        0.14901 * A2($elm$core$Basics$pow, 0.97, 90 - i),
                        0.2549 * A2($elm$core$Basics$pow, 0.97, 90 - i),
                        (A2($elm$core$Basics$max, 0.05, alphaRatio) * i) / 150
                      )
                    ),
                  ]),
                  _List_fromArray([
                    A3(
                      $author$project$Lib$Render$Shape$circleFloat,
                      env.globalData,
                      _Utils_Tuple2(tx, ty),
                      r * A2($elm$core$Basics$pow, 0.96, 90 - i)
                    ),
                  ])
                );
              }),
              $author$project$Scenes$Level2$GameStuff$Render$tweens(track)
            ),
            _List_fromArray([
              A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$alpha(alphaRatio)]),
                _Utils_Tuple2($elm$core$Basics$round(x - r), $elm$core$Basics$round(y - r)),
                _Utils_Tuple2($elm$core$Basics$round(2 * r), $elm$core$Basics$round(2 * r)),
                "ball"
              ),
            ])
          );
        },
        model.balls
      )
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderBricks = F2(function (env, model) {
    var commonData = env.commonData;
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      A2(
        $elm$core$List$map,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var state = _v0.state;
          var electricCharge = _v0.electricCharge;
          var bricktype = _v0.bricktype;
          switch (state.$) {
            case "NormalState":
              return A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2($elm$core$Basics$round(x), $elm$core$Basics$round(y)),
                _Utils_Tuple2($elm$core$Basics$round(commonData.brickWidth), $elm$core$Basics$round(commonData.brickHeight)),
                _Utils_eq(bricktype, $author$project$Scenes$Level2$LayerBase$NormalType)
                  ? "brick_neutral"
                  : _Utils_eq(bricktype, $author$project$Scenes$Level2$LayerBase$Bonus)
                    ? "brick_bonus"
                    : "brick_danger"
              );
            case "Attacked":
              return A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2($elm$core$Basics$round(x), $elm$core$Basics$round(y)),
                _Utils_Tuple2($elm$core$Basics$round(commonData.brickWidth), $elm$core$Basics$round(commonData.brickHeight)),
                "brick_attacked"
              );
            default:
              return $linsyking$elm_canvas$Canvas$empty;
          }
        },
        model.bricks
      )
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderPaddle = F2(function (env, model) {
    var y = model.paddle.y;
    var x = model.paddle.x;
    var r = model.paddle.r;
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2($elm$core$Basics$round(x - r), $elm$core$Basics$round(y - r)),
      _Utils_Tuple2($elm$core$Basics$round(2 * r), $elm$core$Basics$round(2 * r)),
      "paddle"
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderGameStuff = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2($author$project$Scenes$Level2$GameStuff$Render$renderPaddle, env, model),
        A2($author$project$Scenes$Level2$GameStuff$Render$renderBalls, env, model),
        A2($author$project$Scenes$Level2$GameStuff$Render$renderBricks, env, model),
      ])
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderPause = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "PAUSED",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 255, 255, 255),
          _Utils_Tuple2(960, 540)
        ),
      ])
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Render$renderWin = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "YOU WIN !!!",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 540)
        ),
      ])
    );
  });
  var $author$project$Scenes$Level2$GameStuff$Model$viewModel = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "Die":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level2$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level2$GameStuff$Render$renderDie, env, model),
          ])
        );
      case "Start":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([A2($author$project$Scenes$Level2$GameStuff$Render$renderGameStuff, env, model)])
        );
      case "Pause":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level2$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level2$GameStuff$Render$renderPause, env, model),
          ])
        );
      case "FadeIn":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level2$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level2$GameStuff$Render$renderBlack, env, model),
          ])
        );
      default:
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level2$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level2$GameStuff$Render$renderWin, env, model),
            A2($author$project$Scenes$Level2$GameStuff$Render$renderBlack, env, model),
          ])
        );
    }
  });
  var $author$project$Scenes$Level2$GameStuff$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Level2$GameStuff$Model$initModel, env, i),
      name: "GameStuff",
      update: $author$project$Scenes$Level2$GameStuff$Model$updateModel,
      view: $author$project$Scenes$Level2$GameStuff$Model$viewModel,
    };
  });
  var $author$project$Scenes$Level2$SceneInit$nullLevel2Init = {};
  var $author$project$Scenes$Level2$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "Level2InitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Level2$SceneInit$nullLevel2Init;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Level2$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Level2$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Level2$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Level2$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Level2$GameStuff$Global$getLayerT(
          A2(
            $author$project$Scenes$Level2$GameStuff$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Level2$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Level2$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Level2$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Level2$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Level2$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Level2$Export$scene = {
    init: $author$project$Scenes$Level2$Common$initModel,
    update: $author$project$Scenes$Level2$Model$updateModel,
    view: $author$project$Scenes$Level2$Model$viewModel,
  };
  var $author$project$Scenes$Level3$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Level3$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Level3$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Level3$Background$Common$nullModel = {};
  var $author$project$Scenes$Level3$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Level3$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level3$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Level3$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Level3$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level3$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Level3$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Level3$LayerSettings$GameStuffData = function (a) {
    return { $: "GameStuffData", a: a };
  };
  var $author$project$Scenes$Level3$GameStuff$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Level3$LayerSettings$GameStuffData(data);
  };
  var $author$project$Scenes$Level3$GameStuff$Common$Beginning = { $: "Beginning" };
  var $author$project$Scenes$Level3$LayerBase$Normal = { $: "Normal" };
  var $author$project$Scenes$Level3$LayerBase$nullCommonData = (function () {
    var paddleRadius = 130;
    var brickWidth = 196;
    var brickRowNum = 4;
    var brickHeight = 98;
    var brickColNum = 6;
    var blockWidth = 1920 / brickColNum;
    var blockHeight = 140;
    return {
      blockHeight: blockHeight,
      blockWidth: blockWidth,
      brickColNum: brickColNum,
      brickHeight: brickHeight,
      brickRowNum: brickRowNum,
      brickWidth: brickWidth,
      paddleRadius: paddleRadius,
    };
  })();
  var $author$project$Scenes$Level3$GameStuff$Common$randPM1 = function (seed) {
    return A2($elm$random$Random$step, A2($elm$random$Random$int, 1, 24), seed);
  };
  var $author$project$Scenes$Level3$GameStuff$Common$randomlizeElectricChargeBricks = F2(function (seed, bricks) {
    if (!bricks.b) {
      return _List_Nil;
    } else {
      var x = bricks.a;
      var xs = bricks.b;
      var _v1 = $author$project$Scenes$Level3$GameStuff$Common$randPM1(seed);
      var ec = _v1.a;
      var nSeed = _v1.b;
      var rec = ec <= 4 ? 1 : ec <= 8 ? -1 : 0;
      return A2(
        $elm$core$List$cons,
        _Utils_update(x, { electricCharge: rec }),
        A2($author$project$Scenes$Level3$GameStuff$Common$randomlizeElectricChargeBricks, nSeed, xs)
      );
    }
  });
  var $author$project$Scenes$Level3$GameStuff$Common$nullModel = function (env) {
    var seed = $elm$random$Random$initialSeed(env.t);
    var globalData = env.globalData;
    var commonData = $author$project$Scenes$Level3$LayerBase$nullCommonData;
    return {
      alpha: 1,
      balls: _List_fromArray([
        {
          electricCharge: 0,
          r: 48,
          track: _List_Nil,
          vx: (2 / 16) * $author$project$MainConfig$timeInterval,
          vy: (-13 / 16) * $author$project$MainConfig$timeInterval,
          x: 1920 / 2,
          y: 1080 + 20 - 50 - commonData.paddleRadius,
        },
      ]),
      bricks: (function () {
        var yList = A2($elm$core$List$range, 0, commonData.brickRowNum - 1);
        var xList = A2($elm$core$List$range, 0, commonData.brickColNum - 1);
        return A2(
          $author$project$Scenes$Level3$GameStuff$Common$randomlizeElectricChargeBricks,
          seed,
          A2(
            $elm$core$List$concatMap,
            function (y) {
              return A2(
                $elm$core$List$map,
                function (x) {
                  return {
                    animIndex: 0,
                    electricCharge: 0,
                    state: $author$project$Scenes$Level3$LayerBase$Normal,
                    x: x * commonData.blockWidth + (commonData.blockWidth - commonData.brickWidth) / 2,
                    y: y * commonData.blockHeight + (commonData.blockHeight - commonData.brickHeight) / 2,
                  };
                },
                xList
              );
            },
            yList
          )
        );
      })(),
      keyList: A2($elm$core$Array$repeat, 256, false),
      keyListPre: A2($elm$core$Array$repeat, 256, false),
      paddle: { electricCharge: 0, r: commonData.paddleRadius, x: 1920 / 2, y: 1080 + 20 },
      sceneState: $author$project$Scenes$Level3$GameStuff$Common$Beginning,
    };
  };
  var $author$project$Scenes$Level3$GameStuff$Global$ldtToData = F2(function (env, ldt) {
    if (ldt.$ === "GameStuffData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Level3$GameStuff$Common$nullModel(env);
    }
  });
  var $author$project$Scenes$Level3$GameStuff$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, A2($author$project$Scenes$Level3$GameStuff$Global$ldtToData, env, ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, A2($author$project$Scenes$Level3$GameStuff$Global$ldtToData, env, ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level3$GameStuff$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Level3$GameStuff$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Level3$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level3$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Level3$Background$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$Level3$Background$Common$nullModel;
  });
  var $author$project$Scenes$Level3$Background$Model$updateModel = F3(function (env, _v0, model) {
    return _Utils_Tuple3(model, _List_Nil, env);
  });
  var $author$project$Scenes$Level3$Background$Model$viewModel = F2(function (env, _v0) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080), "background"),
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.5))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
      ])
    );
  });
  var $author$project$Scenes$Level3$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Level3$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Level3$Background$Model$updateModel,
      view: $author$project$Scenes$Level3$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Level3$GameStuff$Model$initModel = F2(function (env, _v0) {
    return $author$project$Scenes$Level3$GameStuff$Common$nullModel(env);
  });
  var $author$project$Scenes$Level3$GameStuff$Common$End = { $: "End" };
  var $author$project$Scenes$Level3$GameStuff$Common$FadeIn = { $: "FadeIn" };
  var $author$project$Scenes$Level3$GameStuff$Common$Win = { $: "Win" };
  var $author$project$Scenes$Level3$GameStuff$Model$isFinishedFadeOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha >= 1
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 1, sceneState: $author$project$Scenes$Level3$GameStuff$Common$End }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Level3$GameStuff$Model$moveBall = function (model) {
    return _Utils_update(model, {
      balls: A2(
        $elm$core$List$map,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var vx = _v0.vx;
          var vy = _v0.vy;
          var r = _v0.r;
          var electricCharge = _v0.electricCharge;
          var track = _v0.track;
          var v = $elm$core$Basics$sqrt(vx * vx + vy * vy);
          var theta = A2($elm$core$Basics$atan2, vx, vy);
          var ntrack = A2($elm$core$List$append, track, _List_fromArray([_Utils_Tuple2(x, y)]));
          var mtrack = $elm$core$List$length(ntrack) > 30 ? A2($elm$core$List$drop, 1, ntrack) : ntrack;
          var dTheta = ((electricCharge * 0.005) / 4) * $author$project$MainConfig$timeInterval;
          var nTheta = theta + dTheta;
          var nvx = v * $elm$core$Basics$sin(nTheta);
          var nvy = v * $elm$core$Basics$cos(nTheta);
          return { electricCharge: electricCharge * 0.999, r: r, track: mtrack, vx: nvx, vy: nvy, x: x + vx, y: y + vy };
        },
        model.balls
      ),
    });
  };
  var $author$project$Scenes$Level3$GameStuff$Model$movePaddle = function (model) {
    var opaddle = model.paddle;
    var npaddle = (function () {
      var v = (20 / 16) * $author$project$MainConfig$timeInterval;
      var right =
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 39, model.keyList)) ||
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 68, model.keyList));
      var left =
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 37, model.keyList)) ||
        A2($elm$core$Maybe$withDefault, false, A2($elm$core$Array$get, 65, model.keyList));
      return left
        ? _Utils_update(opaddle, {
            x: A2($elm$core$Basics$max, opaddle.x - v, 0),
          })
        : right
          ? _Utils_update(opaddle, {
              x: A2($elm$core$Basics$min, opaddle.x + v, 1920),
            })
          : opaddle;
    })();
    return _Utils_update(model, {
      paddle: _Utils_update(npaddle, { electricCharge: npaddle.electricCharge * 0.999 }),
    });
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallBorder = function (ball) {
    var y = ball.y;
    var x = ball.x;
    var r = ball.r;
    return (x - r <= 0 && ball.vx < 0) || (x + r >= 1920 && ball.vx > 0)
      ? _Utils_update(ball, { vx: -ball.vx })
      : y - r <= 0 && ball.vy < 0
        ? _Utils_update(ball, { vy: -ball.vy })
        : ball;
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallsBorder = function (balls) {
    return A2($elm$core$List$map, $author$project$Scenes$Level3$GameStuff$Model$reflectBallBorder, balls);
  };
  var $author$project$Scenes$Level3$GameStuff$Model$dist = F4(function (x1, y1, x2, y2) {
    return $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, x1 - x2, 2) + A2($elm$core$Basics$pow, y1 - y2, 2));
  });
  var $author$project$Scenes$Level3$LayerBase$Attacked = { $: "Attacked" };
  var $author$project$Scenes$Level3$LayerBase$Disappeared = { $: "Disappeared" };
  var $author$project$Scenes$Level3$GameStuff$Model$updateBrick = function (brick) {
    return _Utils_eq(brick.state, $author$project$Scenes$Level3$LayerBase$Attacked)
      ? brick.animIndex < 4
        ? _Utils_update(brick, { animIndex: brick.animIndex + 1 })
        : _Utils_update(brick, { animIndex: 0, state: $author$project$Scenes$Level3$LayerBase$Disappeared })
      : brick;
  };
  var $author$project$Scenes$Level3$GameStuff$Model$updateBrickAttacked = function (brick) {
    return !_Utils_eq(brick.state, $author$project$Scenes$Level3$LayerBase$Disappeared)
      ? _Utils_eq(brick.state, $author$project$Scenes$Level3$LayerBase$Normal)
        ? _Utils_update(brick, { state: $author$project$Scenes$Level3$LayerBase$Attacked })
        : brick.animIndex < 4
          ? _Utils_update(brick, { animIndex: brick.animIndex + 1 })
          : _Utils_update(brick, { animIndex: 0, state: $author$project$Scenes$Level3$LayerBase$Disappeared })
      : brick;
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallBrick = function (_v0) {
    var ball = _v0.a;
    var brick = _v0.b;
    if (_Utils_eq(brick.state, $author$project$Scenes$Level3$LayerBase$Normal)) {
      var y1 = brick.y;
      var y = ball.y;
      var x1 = brick.x;
      var x = ball.x;
      var r = ball.r;
      var commonData = $author$project$Scenes$Level3$LayerBase$nullCommonData;
      var x2 = brick.x + commonData.brickWidth;
      var y2 = brick.y + commonData.brickHeight;
      return _Utils_cmp(x, x1) > -1 && _Utils_cmp(x, x2) < 1
        ? (_Utils_cmp(y - r, y1) < 1 && _Utils_cmp(y + r, y1) > -1) || (_Utils_cmp(y + r, y2) > -1 && _Utils_cmp(y - r, y2) < 1)
          ? _Utils_Tuple2(
              _Utils_update(ball, { electricCharge: ball.electricCharge + brick.electricCharge, vy: -ball.vy }),
              $author$project$Scenes$Level3$GameStuff$Model$updateBrickAttacked(brick)
            )
          : _Utils_cmp(y + r, y1) > -1 && _Utils_cmp(y - r, y2) < 1
            ? _Utils_Tuple2(ball, $author$project$Scenes$Level3$GameStuff$Model$updateBrick(brick))
            : _Utils_Tuple2(ball, $author$project$Scenes$Level3$GameStuff$Model$updateBrick(brick))
        : _Utils_cmp(y, y1) > -1 && _Utils_cmp(y, y2) < 1
          ? (_Utils_cmp(x - r, x1) < 1 && _Utils_cmp(x + r, x1) > -1) || (_Utils_cmp(x + r, x2) > -1 && _Utils_cmp(x - r, x2) < 1)
            ? _Utils_Tuple2(
                _Utils_update(ball, { electricCharge: ball.electricCharge + brick.electricCharge, vx: -ball.vx }),
                $author$project$Scenes$Level3$GameStuff$Model$updateBrickAttacked(brick)
              )
            : _Utils_cmp(x + r, x1) > -1 && _Utils_cmp(x - r, x2) < 1
              ? _Utils_Tuple2(ball, $author$project$Scenes$Level3$GameStuff$Model$updateBrick(brick))
              : _Utils_Tuple2(ball, $author$project$Scenes$Level3$GameStuff$Model$updateBrick(brick))
          : _Utils_cmp(A4($author$project$Scenes$Level3$GameStuff$Model$dist, x, y, x1, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level3$GameStuff$Model$dist, x, y, x1, y2), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level3$GameStuff$Model$dist, x, y, x2, y1), r) < 1 ||
              _Utils_cmp(A4($author$project$Scenes$Level3$GameStuff$Model$dist, x, y, x2, y2), r) < 1
            ? _Utils_Tuple2(
                _Utils_update(ball, { electricCharge: ball.electricCharge + brick.electricCharge, vx: -ball.vx, vy: -ball.vy }),
                $author$project$Scenes$Level3$GameStuff$Model$updateBrickAttacked(brick)
              )
            : _Utils_Tuple2(ball, $author$project$Scenes$Level3$GameStuff$Model$updateBrick(brick));
    } else {
      return _Utils_Tuple2(ball, $author$project$Scenes$Level3$GameStuff$Model$updateBrick(brick));
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallBricks = function (_v0) {
    var ball = _v0.a;
    var bricks = _v0.b;
    if (!bricks.b) {
      return _Utils_Tuple2(ball, bricks);
    } else {
      var r = bricks.a;
      var rs = bricks.b;
      var _v2 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallBrick(_Utils_Tuple2(ball, r));
      var nball = _v2.a;
      var nbrick = _v2.b;
      var _v3 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallBricks(_Utils_Tuple2(nball, rs));
      var nball2 = _v3.a;
      var nbricks = _v3.b;
      return _Utils_Tuple2(nball2, A2($elm$core$List$cons, nbrick, nbricks));
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallsBricks = function (_v0) {
    var balls = _v0.a;
    var bricks = _v0.b;
    if (!balls.b) {
      return _Utils_Tuple2(balls, bricks);
    } else {
      var b = balls.a;
      var bs = balls.b;
      var _v2 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallBricks(_Utils_Tuple2(b, bricks));
      var nball = _v2.a;
      var nbricks = _v2.b;
      var _v3 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallsBricks(_Utils_Tuple2(bs, nbricks));
      var nballs = _v3.a;
      var nbricks2 = _v3.b;
      return _Utils_Tuple2(A2($elm$core$List$cons, nball, nballs), nbricks2);
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallPaddle = function (_v0) {
    var b = _v0.a;
    var c = _v0.b;
    if (_Utils_cmp(A2($elm$core$Basics$pow, b.x - c.x, 2) + A2($elm$core$Basics$pow, b.y - c.y, 2), A2($elm$core$Basics$pow, b.r + c.r, 2)) < 1) {
      var c_ec = ((b.electricCharge + c.electricCharge) * 1) / 2;
      var b_ec = ((b.electricCharge + c.electricCharge) * 1) / 2;
      var _v1 = _Utils_Tuple2(b.x - c.x, b.y - c.y);
      var vx1 = _v1.a;
      var vy1 = _v1.b;
      var _v2 = _Utils_Tuple2(
        vx1 / $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, vx1, 2) + A2($elm$core$Basics$pow, vy1, 2)),
        vy1 / $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, vx1, 2) + A2($elm$core$Basics$pow, vy1, 2))
      );
      var vx2 = _v2.a;
      var vy2 = _v2.b;
      var _v3 = _Utils_Tuple2(
        vx2 * $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, b.vx, 2) + A2($elm$core$Basics$pow, b.vy, 2)),
        vy2 * $elm$core$Basics$sqrt(A2($elm$core$Basics$pow, b.vx, 2) + A2($elm$core$Basics$pow, b.vy, 2))
      );
      var vx3 = _v3.a;
      var vy3 = _v3.b;
      return _Utils_Tuple2(_Utils_update(b, { electricCharge: b_ec, vx: vx3, vy: vy3 }), _Utils_update(c, { electricCharge: c_ec }));
    } else {
      return _Utils_Tuple2(b, c);
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallsPaddle = function (_v0) {
    var balls = _v0.a;
    var paddle = _v0.b;
    if (!balls.b) {
      return _Utils_Tuple2(_List_Nil, paddle);
    } else {
      var ball = balls.a;
      var rest = balls.b;
      var _v2 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallPaddle(_Utils_Tuple2(ball, paddle));
      var nball = _v2.a;
      var npaddle = _v2.b;
      var _v3 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallsPaddle(_Utils_Tuple2(rest, npaddle));
      var nballs = _v3.a;
      var npaddle2 = _v3.b;
      return _Utils_Tuple2(A2($elm$core$List$cons, nball, nballs), npaddle2);
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$removeIntersectBallPaddle = function (_v0) {
    removeIntersectBallPaddle: while (true) {
      var b = _v0.a;
      var c = _v0.b;
      if (_Utils_cmp(A2($elm$core$Basics$pow, b.x - c.x, 2) + A2($elm$core$Basics$pow, b.y - c.y, 2), A2($elm$core$Basics$pow, b.r + c.r, 2)) < 1) {
        var $temp$_v0 = _Utils_Tuple2(_Utils_update(b, { x: b.x + b.vx, y: b.y + b.vy }), c);
        _v0 = $temp$_v0;
        continue removeIntersectBallPaddle;
      } else {
        return b;
      }
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$removeIntersectBallsPaddle = function (_v0) {
    var balls = _v0.a;
    var paddle = _v0.b;
    if (!balls.b) {
      return balls;
    } else {
      var b = balls.a;
      var bs = balls.b;
      var nballs = $author$project$Scenes$Level3$GameStuff$Model$removeIntersectBallsPaddle(_Utils_Tuple2(bs, paddle));
      var nball = $author$project$Scenes$Level3$GameStuff$Model$removeIntersectBallPaddle(_Utils_Tuple2(b, paddle));
      return A2($elm$core$List$cons, nball, nballs);
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflect = function (model) {
    var _v0 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallsBricks(_Utils_Tuple2(model.balls, model.bricks));
    var fballs = _v0.a;
    var fbricks = _v0.b;
    var nballs = $author$project$Scenes$Level3$GameStuff$Model$reflectBallsBorder(fballs);
    var _v1 = $author$project$Scenes$Level3$GameStuff$Model$reflectBallsPaddle(_Utils_Tuple2(nballs, model.paddle));
    var mballs = _v1.a;
    var mpaddle = _v1.b;
    var sballs = $author$project$Scenes$Level3$GameStuff$Model$removeIntersectBallsPaddle(_Utils_Tuple2(mballs, mpaddle));
    return _Utils_update(model, { balls: sballs, bricks: fbricks, paddle: mpaddle });
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectBallDeadBorder = function (ball) {
    return ball.y + ball.r >= 1080 && ball.vy > 0 ? _Utils_update(ball, { vy: -ball.vy }) : ball;
  };
  var $author$project$Scenes$Level3$GameStuff$Model$reflectDeadBorder = function (model) {
    var nballs = A2($elm$core$List$map, $author$project$Scenes$Level3$GameStuff$Model$reflectBallDeadBorder, model.balls);
    return _Utils_update(model, { balls: nballs });
  };
  var $author$project$Scenes$Level3$GameStuff$Common$Die = { $: "Die" };
  var $author$project$Scenes$Level3$GameStuff$Model$ifDead = function (model) {
    var nballs = A2(
      $elm$core$List$filter,
      function (_v0) {
        var y = _v0.y;
        return y <= 1080;
      },
      model.balls
    );
    return !$elm$core$List$length(nballs)
      ? _Utils_update(model, { balls: nballs, sceneState: $author$project$Scenes$Level3$GameStuff$Common$Die })
      : _Utils_update(model, { balls: nballs });
  };
  var $author$project$Scenes$Level3$GameStuff$Model$ifWin = function (model) {
    return A3(
      $elm$core$List$foldl,
      function (_v0) {
        var state = _v0.state;
        return $elm$core$Basics$and(_Utils_eq(state, $author$project$Scenes$Level3$LayerBase$Disappeared));
      },
      true,
      model.bricks
    )
      ? _Utils_update(model, { sceneState: $author$project$Scenes$Level3$GameStuff$Common$Win })
      : model;
  };
  var $author$project$Scenes$Level3$GameStuff$Common$Start = { $: "Start" };
  var $author$project$Scenes$Level3$GameStuff$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, sceneState: $author$project$Scenes$Level3$GameStuff$Common$Start }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Level3$GameStuff$Common$Pause = { $: "Pause" };
  var $author$project$Scenes$Level3$GameStuff$Model$updKeyUp = F2(function (env, omodel) {
    var model = _Utils_update(omodel, { keyListPre: omodel.keyList });
    var keyUp = function (key) {
      return (
        _Utils_eq(A2($elm$core$Array$get, key, omodel.keyListPre), $elm$core$Maybe$Just(true)) &&
        _Utils_eq(A2($elm$core$Array$get, key, omodel.keyList), $elm$core$Maybe$Just(false))
      );
    };
    return keyUp(82)
      ? $author$project$Scenes$Level3$GameStuff$Common$nullModel(env)
      : keyUp(27)
        ? _Utils_update(model, {
            sceneState: _Utils_eq(model.sceneState, $author$project$Scenes$Level3$GameStuff$Common$Pause)
              ? $author$project$Scenes$Level3$GameStuff$Common$Start
              : _Utils_eq(model.sceneState, $author$project$Scenes$Level3$GameStuff$Common$Start)
                ? $author$project$Scenes$Level3$GameStuff$Common$Pause
                : model.sceneState,
          })
        : model;
  });
  var $author$project$Scenes$Level3$GameStuff$Model$updateBlack = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Level3$GameStuff$Model$update = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "Start":
        return _Utils_Tuple2(
          env,
          A2(
            $author$project$Scenes$Level3$GameStuff$Model$updKeyUp,
            env,
            $author$project$Scenes$Level3$GameStuff$Model$ifWin(
              $author$project$Scenes$Level3$GameStuff$Model$ifDead(
                $author$project$Scenes$Level3$GameStuff$Model$movePaddle(
                  $author$project$Scenes$Level3$GameStuff$Model$reflect($author$project$Scenes$Level3$GameStuff$Model$moveBall(model))
                )
              )
            )
          )
        );
      case "FadeIn":
        return $author$project$Scenes$Level3$GameStuff$Model$isFinishedFadeIn(
          $author$project$Scenes$Level3$GameStuff$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      default:
        return _Utils_Tuple2(env, A2($author$project$Scenes$Level3$GameStuff$Model$updKeyUp, env, model));
    }
  });
  var $author$project$Scenes$Level3$GameStuff$Model$updateBlackOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha + 0.005 }));
  };
  var $author$project$Scenes$Level3$GameStuff$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "Tick":
        if (_Utils_eq(model.sceneState, $author$project$Scenes$Level3$GameStuff$Common$End)) {
          return _Utils_Tuple3(
            model,
            _List_fromArray([
              _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Transition3")),
            ]),
            env
          );
        } else {
          if (_Utils_eq(model.sceneState, $author$project$Scenes$Level3$GameStuff$Common$Beginning)) {
            return _Utils_Tuple3(
              _Utils_update(model, { sceneState: $author$project$Scenes$Level3$GameStuff$Common$FadeIn }),
              _List_fromArray([
                _Utils_Tuple2(
                  $author$project$Lib$Layer$Base$LayerParentScene,
                  A3(
                    $author$project$Lib$Layer$Base$LayerSoundMsg,
                    "Level3Bgm",
                    $author$project$Lib$Resources$Base$getResourcePath("audio/level.ogg"),
                    $author$project$Lib$Audio$Base$ALoop
                  )
                ),
              ]),
              env
            );
          } else {
            if (_Utils_eq(model.sceneState, $author$project$Scenes$Level3$GameStuff$Common$Win)) {
              var _v2 = $author$project$Scenes$Level3$GameStuff$Model$isFinishedFadeOut(
                $author$project$Scenes$Level3$GameStuff$Model$updateBlackOut(
                  _Utils_Tuple2(
                    env,
                    $author$project$Scenes$Level3$GameStuff$Model$reflectDeadBorder(
                      $author$project$Scenes$Level3$GameStuff$Model$movePaddle(
                        $author$project$Scenes$Level3$GameStuff$Model$reflect($author$project$Scenes$Level3$GameStuff$Model$moveBall(model))
                      )
                    )
                  )
                )
              );
              var newEnv = _v2.a;
              var newModel = _v2.b;
              return _Utils_Tuple3(
                newModel,
                _List_fromArray([
                  _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerStopSoundMsg("Level3Bgm")),
                ]),
                newEnv
              );
            } else {
              var _v3 = A2($author$project$Scenes$Level3$GameStuff$Model$update, env, model);
              var newEnv = _v3.a;
              var newModel = _v3.b;
              return _Utils_Tuple3(newModel, _List_Nil, newEnv);
            }
          }
        }
      case "KeyDown":
        var key = _v1.a;
        var cur = model.keyList;
        return _Utils_Tuple3(
          _Utils_update(model, {
            keyList: A3($elm$core$Array$set, key, true, cur),
            keyListPre: cur,
          }),
          _List_Nil,
          env
        );
      case "KeyUp":
        var key = _v1.a;
        var cur = model.keyList;
        return _Utils_Tuple3(
          _Utils_update(model, {
            keyList: A3($elm$core$Array$set, key, false, cur),
            keyListPre: cur,
          }),
          _List_Nil,
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderDie = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "YOU FAILED",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 500)
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          80,
          "PRESS       TO RESTART",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 650)
        ),
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(833, 600), _Utils_Tuple2(96, 96), "key_r"),
      ])
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$tweens = function (l) {
    if (!l.b) {
      return _List_Nil;
    } else {
      if (!l.b.b) {
        var z = l.a;
        return _List_fromArray([z]);
      } else {
        var _v1 = l.a;
        var x1 = _v1.a;
        var y1 = _v1.b;
        var _v2 = l.b;
        var _v3 = _v2.a;
        var x2 = _v3.a;
        var y2 = _v3.b;
        var xs = _v2.b;
        return _Utils_ap(
          _List_fromArray([
            _Utils_Tuple2(x1, y1),
            _Utils_Tuple2((x1 * 2 + x2) / 3, (y1 * 2 + y2) / 3),
            _Utils_Tuple2((x1 + x2 * 2) / 3, (y1 + y2 * 2) / 3),
          ]),
          $author$project$Scenes$Level3$GameStuff$Render$tweens(A2($elm$core$List$cons, _Utils_Tuple2(x2, y2), xs))
        );
      }
    }
  };
  var $author$project$Scenes$Level3$GameStuff$Render$renderBalls = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      A2(
        $elm$core$List$concatMap,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var r = _v0.r;
          var track = _v0.track;
          return _Utils_ap(
            A2(
              $elm$core$List$indexedMap,
              F2(function (i, _v1) {
                var tx = _v1.a;
                var ty = _v1.b;
                return A2(
                  $linsyking$elm_canvas$Canvas$shapes,
                  _List_fromArray([
                    $linsyking$elm_canvas$Canvas$Settings$fill(
                      A4(
                        $avh4$elm_color$Color$rgba,
                        0.73725 * A2($elm$core$Basics$pow, 0.97, 90 - i),
                        0.14901 * A2($elm$core$Basics$pow, 0.97, 90 - i),
                        0.2549 * A2($elm$core$Basics$pow, 0.97, 90 - i),
                        i / 150
                      )
                    ),
                  ]),
                  _List_fromArray([
                    A3(
                      $author$project$Lib$Render$Shape$circleFloat,
                      env.globalData,
                      _Utils_Tuple2(tx, ty),
                      r * A2($elm$core$Basics$pow, 0.96, 90 - i)
                    ),
                  ])
                );
              }),
              $author$project$Scenes$Level3$GameStuff$Render$tweens(track)
            ),
            _List_fromArray([
              A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2($elm$core$Basics$round(x - r), $elm$core$Basics$round(y - r)),
                _Utils_Tuple2($elm$core$Basics$round(2 * r), $elm$core$Basics$round(2 * r)),
                "ball"
              ),
            ])
          );
        },
        model.balls
      )
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderBricks = F2(function (env, model) {
    var commonData = env.commonData;
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      A2(
        $elm$core$List$map,
        function (_v0) {
          var x = _v0.x;
          var y = _v0.y;
          var state = _v0.state;
          var electricCharge = _v0.electricCharge;
          switch (state.$) {
            case "Normal":
              return A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2($elm$core$Basics$round(x), $elm$core$Basics$round(y)),
                _Utils_Tuple2($elm$core$Basics$round(commonData.brickWidth), $elm$core$Basics$round(commonData.brickHeight)),
                electricCharge > 0 ? "brick_positive" : !electricCharge ? "brick_neutral" : "brick_negative"
              );
            case "Attacked":
              return A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2($elm$core$Basics$round(x), $elm$core$Basics$round(y)),
                _Utils_Tuple2($elm$core$Basics$round(commonData.brickWidth), $elm$core$Basics$round(commonData.brickHeight)),
                "brick_attacked"
              );
            default:
              return $linsyking$elm_canvas$Canvas$empty;
          }
        },
        model.bricks
      )
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderPaddle = F2(function (env, model) {
    var y = model.paddle.y;
    var x = model.paddle.x;
    var r = model.paddle.r;
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2($elm$core$Basics$round(x - r), $elm$core$Basics$round(y - r)),
      _Utils_Tuple2($elm$core$Basics$round(2 * r), $elm$core$Basics$round(2 * r)),
      "paddle"
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderGameStuff = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2($author$project$Scenes$Level3$GameStuff$Render$renderPaddle, env, model),
        A2($author$project$Scenes$Level3$GameStuff$Render$renderBalls, env, model),
        A2($author$project$Scenes$Level3$GameStuff$Render$renderBricks, env, model),
      ])
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderPause = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "PAUSED",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 255, 255, 255),
          _Utils_Tuple2(960, 540)
        ),
      ])
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Render$renderWin = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        A2(
          $linsyking$elm_canvas$Canvas$shapes,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, 0.75))]),
          _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
        ),
        A6(
          $author$project$Lib$Render$Text$renderTextWithColorCenter,
          env.globalData,
          160,
          "YOU WIN !!!",
          "disposabledroid_bbregular",
          A3($avh4$elm_color$Color$rgb255, 250, 107, 107),
          _Utils_Tuple2(960, 540)
        ),
      ])
    );
  });
  var $author$project$Scenes$Level3$GameStuff$Model$viewModel = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "Die":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level3$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level3$GameStuff$Render$renderDie, env, model),
          ])
        );
      case "Start":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([A2($author$project$Scenes$Level3$GameStuff$Render$renderGameStuff, env, model)])
        );
      case "Pause":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level3$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level3$GameStuff$Render$renderPause, env, model),
          ])
        );
      case "FadeIn":
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level3$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level3$GameStuff$Render$renderBlack, env, model),
          ])
        );
      default:
        return A2(
          $linsyking$elm_canvas$Canvas$group,
          _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
          _List_fromArray([
            A2($author$project$Scenes$Level3$GameStuff$Render$renderGameStuff, env, model),
            A2($author$project$Scenes$Level3$GameStuff$Render$renderWin, env, model),
            A2($author$project$Scenes$Level3$GameStuff$Render$renderBlack, env, model),
          ])
        );
    }
  });
  var $author$project$Scenes$Level3$GameStuff$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Level3$GameStuff$Model$initModel, env, i),
      name: "GameStuff",
      update: $author$project$Scenes$Level3$GameStuff$Model$updateModel,
      view: $author$project$Scenes$Level3$GameStuff$Model$viewModel,
    };
  });
  var $author$project$Scenes$Level3$SceneInit$nullLevel3Init = {};
  var $author$project$Scenes$Level3$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "Level3InitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Level3$SceneInit$nullLevel3Init;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Level3$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Level3$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Level3$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Level3$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Level3$GameStuff$Global$getLayerT(
          A2(
            $author$project$Scenes$Level3$GameStuff$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Level3$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Level3$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Level3$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Level3$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Level3$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Level3$Export$scene = {
    init: $author$project$Scenes$Level3$Common$initModel,
    update: $author$project$Scenes$Level3$Model$updateModel,
    view: $author$project$Scenes$Level3$Model$viewModel,
  };
  var $author$project$Scenes$Logo$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Logo$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Logo$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Logo$Background$Common$nullModel = { alpha: 1, animIndex: 0 };
  var $author$project$Scenes$Logo$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Logo$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Logo$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Logo$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Logo$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Logo$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Logo$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Logo$LayerBase$nullCommonData = {};
  var $author$project$Scenes$Logo$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Logo$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Logo$Background$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$Logo$Background$Common$nullModel;
  });
  var $author$project$Scenes$Logo$Background$Model$updateBlack = function (_v0) {
    var model = _v0.a;
    var env = _v0.c;
    return model.animIndex === 240 && model.alpha >= 1
      ? _Utils_Tuple3(
          model,
          _List_fromArray([
            _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Home")),
          ]),
          env
        )
      : !model.animIndex && model.alpha > 0.01
        ? _Utils_Tuple3(_Utils_update(model, { alpha: model.alpha - 0.01 }), _List_Nil, env)
        : model.animIndex >= 240
          ? _Utils_Tuple3(_Utils_update(model, { alpha: model.alpha + 0.01, animIndex: 240 }), _List_Nil, env)
          : model.alpha <= 0.01
            ? _Utils_Tuple3(_Utils_update(model, { alpha: 0, animIndex: model.animIndex + 1 }), _List_Nil, env)
            : _Utils_Tuple3(model, _List_Nil, env);
  };
  var $author$project$Scenes$Logo$Background$Model$updateModel = F3(function (env, _v0, model) {
    return $author$project$Scenes$Logo$Background$Model$updateBlack(_Utils_Tuple3(model, _List_Nil, env));
  });
  var $author$project$Scenes$Logo$Background$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$Logo$Background$Model$renderLogo = F2(function (env, model) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _Utils_Tuple2(0, 0),
      _Utils_Tuple2(1920, 1080),
      "logo"
    );
  });
  var $author$project$Scenes$Logo$Background$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Logo$Background$Model$renderLogo, env, model),
        A2($author$project$Scenes$Logo$Background$Model$renderBlack, env, model),
      ])
    );
  });
  var $author$project$Scenes$Logo$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Logo$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Logo$Background$Model$updateModel,
      view: $author$project$Scenes$Logo$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Logo$SceneInit$nullLogoInit = {};
  var $author$project$Scenes$Logo$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "LogoInitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Logo$SceneInit$nullLogoInit;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Logo$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Logo$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Logo$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Logo$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Logo$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Logo$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Logo$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Logo$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Logo$Export$scene = {
    init: $author$project$Scenes$Logo$Common$initModel,
    update: $author$project$Scenes$Logo$Model$updateModel,
    view: $author$project$Scenes$Logo$Model$viewModel,
  };
  var $author$project$Scenes$LogoEnd$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$LogoEnd$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$LogoEnd$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$LogoEnd$Background$Common$nullModel = { alpha: 1, animIndex: 0 };
  var $author$project$Scenes$LogoEnd$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$LogoEnd$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$LogoEnd$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$LogoEnd$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$LogoEnd$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$LogoEnd$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$LogoEnd$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$LogoEnd$LayerBase$nullCommonData = {};
  var $author$project$Scenes$LogoEnd$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$LogoEnd$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$LogoEnd$Background$Model$initModel = F2(function (_v0, _v1) {
    return $author$project$Scenes$LogoEnd$Background$Common$nullModel;
  });
  var $author$project$Scenes$LogoEnd$Background$Model$updateBlack = function (_v0) {
    var model = _v0.a;
    var env = _v0.c;
    return model.animIndex === 240 && model.alpha >= 1
      ? _Utils_Tuple3(
          model,
          _List_fromArray([
            _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Home")),
          ]),
          env
        )
      : !model.animIndex && model.alpha > 0.01
        ? _Utils_Tuple3(_Utils_update(model, { alpha: model.alpha - 0.01 }), _List_Nil, env)
        : model.animIndex >= 240
          ? _Utils_Tuple3(_Utils_update(model, { alpha: model.alpha + 0.01, animIndex: 240 }), _List_Nil, env)
          : model.alpha <= 0.01
            ? _Utils_Tuple3(_Utils_update(model, { alpha: 0, animIndex: model.animIndex + 1 }), _List_Nil, env)
            : _Utils_Tuple3(model, _List_Nil, env);
  };
  var $author$project$Scenes$LogoEnd$Background$Model$updateModel = F3(function (env, _v0, model) {
    return $author$project$Scenes$LogoEnd$Background$Model$updateBlack(_Utils_Tuple3(model, _List_Nil, env));
  });
  var $author$project$Scenes$LogoEnd$Background$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$LogoEnd$Background$Model$renderLogoEnd = F2(function (env, model) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _Utils_Tuple2(0, 0),
      _Utils_Tuple2(1920, 1080),
      "logo"
    );
  });
  var $author$project$Scenes$LogoEnd$Background$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$LogoEnd$Background$Model$renderLogoEnd, env, model),
        A2($author$project$Scenes$LogoEnd$Background$Model$renderBlack, env, model),
      ])
    );
  });
  var $author$project$Scenes$LogoEnd$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$LogoEnd$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$LogoEnd$Background$Model$updateModel,
      view: $author$project$Scenes$LogoEnd$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$LogoEnd$SceneInit$nullLogoEndInit = {};
  var $author$project$Scenes$LogoEnd$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "LogoEndInitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$LogoEnd$SceneInit$nullLogoEndInit;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$LogoEnd$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$LogoEnd$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$LogoEnd$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$LogoEnd$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$LogoEnd$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$LogoEnd$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$LogoEnd$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$LogoEnd$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$LogoEnd$Export$scene = {
    init: $author$project$Scenes$LogoEnd$Common$initModel,
    update: $author$project$Scenes$LogoEnd$Model$updateModel,
    view: $author$project$Scenes$LogoEnd$Model$viewModel,
  };
  var $author$project$Scenes$Rules$LayerSettings$RulespageData = function (a) {
    return { $: "RulespageData", a: a };
  };
  var $author$project$Scenes$Rules$Rulespage$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Rules$LayerSettings$RulespageData(data);
  };
  var $author$project$Scenes$Rules$Rulespage$Common$nullModel = {
    buttonBack: _Utils_Tuple2(0, 0),
  };
  var $author$project$Scenes$Rules$Rulespage$Global$ldtToData = function (ldt) {
    if (ldt.$ === "RulespageData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Rules$Rulespage$Common$nullModel;
    }
  };
  var $author$project$Scenes$Rules$Rulespage$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Rules$Rulespage$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Rules$Rulespage$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Rules$Rulespage$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Rules$Rulespage$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Rules$LayerBase$nullCommonData = {};
  var $author$project$Scenes$Rules$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Rules$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Rules$Rulespage$Model$initModel = F2(function (_v0, _v1) {
    return {
      buttonBack: _Utils_Tuple2(100, 50),
    };
  });
  var $author$project$Scenes$Rules$Rulespage$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    if (_v1.$ === "MouseDown") {
      var button = _v1.a;
      var pos = _v1.b;
      return !button
        ? A3($author$project$Lib$Coordinate$Coordinates$judgeMouseRect, pos, _Utils_Tuple2(100, 50), _Utils_Tuple2(180, 90))
          ? _Utils_Tuple3(
              model,
              _List_fromArray([
                _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Home")),
              ]),
              env
            )
          : _Utils_Tuple3(model, _List_Nil, env)
        : _Utils_Tuple3(model, _List_Nil, env);
    } else {
      return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Rules$Rulespage$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(0, 1080), "rules_rules"),
        A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, model.buttonBack, _Utils_Tuple2(0, 90), "back"),
      ])
    );
  });
  var $author$project$Scenes$Rules$Rulespage$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Rules$Rulespage$Model$initModel, env, i),
      name: "Rulespage",
      update: $author$project$Scenes$Rules$Rulespage$Model$updateModel,
      view: $author$project$Scenes$Rules$Rulespage$Model$viewModel,
    };
  });
  var $author$project$Scenes$Rules$SceneInit$nullRulesInit = {};
  var $author$project$Scenes$Rules$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "RulesInitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Rules$SceneInit$nullRulesInit;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Rules$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Rules$Rulespage$Global$getLayerT(
          A2(
            $author$project$Scenes$Rules$Rulespage$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Rules$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Rules$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Rules$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Rules$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Rules$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Rules$Export$scene = {
    init: $author$project$Scenes$Rules$Common$initModel,
    update: $author$project$Scenes$Rules$Model$updateModel,
    view: $author$project$Scenes$Rules$Model$viewModel,
  };
  var $author$project$Scenes$Story$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Story$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Story$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Story$Background$Common$nullModel = { bgIndex: 0 };
  var $author$project$Scenes$Story$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Story$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Story$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Story$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Story$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Story$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Story$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Story$LayerSettings$RoomData = function (a) {
    return { $: "RoomData", a: a };
  };
  var $author$project$Scenes$Story$Room$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Story$LayerSettings$RoomData(data);
  };
  var $author$project$Scenes$Story$Room$Common$Beginning = { $: "Beginning" };
  var $author$project$Scenes$Story$Room$Common$Camera = F4(function (x, y, height, width) {
    return { height: height, width: width, x: x, y: y };
  });
  var $author$project$Scenes$Story$Room$Common$Character = F9(function (id, x, y, height, width, state, dir, currentSpriteIndex, dialogIndex) {
    return {
      currentSpriteIndex: currentSpriteIndex,
      dialogIndex: dialogIndex,
      dir: dir,
      height: height,
      id: id,
      state: state,
      width: width,
      x: x,
      y: y,
    };
  });
  var $author$project$Scenes$Story$Room$Common$Map = F3(function (height, width, sprite) {
    return { height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Story$Room$Common$Right = { $: "Right" };
  var $author$project$Scenes$Story$Room$Common$Still = { $: "Still" };
  var $author$project$Scenes$Story$Room$Common$Textbox = F4(function (center, height, width, sprite) {
    return { center: center, height: height, sprite: sprite, width: width };
  });
  var $Chadtech$elm_vector$Vector2$Internal$Vector = function (a) {
    return { $: "Vector", a: a };
  };
  var $Chadtech$elm_vector$Vector2$from2 = F2(function (a0, a1) {
    return $Chadtech$elm_vector$Vector2$Internal$Vector({ n0: a0, n1: a1 });
  });
  var $author$project$Scenes$Story$Room$Common$nullModel = (function () {
    var tb = A4($author$project$Scenes$Story$Room$Common$Textbox, _Utils_Tuple2(0, 0), 0, 0, "");
    var mc = A9(
      $author$project$Scenes$Story$Room$Common$Character,
      0,
      0,
      0,
      0,
      0,
      $author$project$Scenes$Story$Room$Common$Still,
      $author$project$Scenes$Story$Room$Common$Right,
      0,
      0
    );
    var map = A3($author$project$Scenes$Story$Room$Common$Map, 0, 0, "");
    var camera = A4($author$project$Scenes$Story$Room$Common$Camera, 0, 0, 0, 0);
    return {
      alpha: 1,
      camera: camera,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      npc: A2($Chadtech$elm_vector$Vector2$from2, mc, mc),
      prevKey: 0,
      sceneState: $author$project$Scenes$Story$Room$Common$Beginning,
      textbox: A2($Chadtech$elm_vector$Vector2$from2, tb, tb),
    };
  })();
  var $author$project$Scenes$Story$Room$Global$ldtToData = function (ldt) {
    if (ldt.$ === "RoomData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Story$Room$Common$nullModel;
    }
  };
  var $author$project$Scenes$Story$Room$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Story$Room$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Story$Room$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Story$Room$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Story$Room$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Story$LayerBase$nullCommonData = (function () {
    var mw = 1920 * 2;
    var mh = 1080;
    var mcw = 96;
    var mcs = 7;
    var mch = 198;
    var camw = 1920;
    var camh = 1080;
    return { camHeight: camh, camWidth: camw, mapHeight: mh, mapWidth: mw, mcHeight: mch, mcSpeed: mcs, mcWidth: mcw };
  })();
  var $author$project$Scenes$Story$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Story$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Story$Background$Model$initModel = F2(function (_v0, _v1) {
    return { bgIndex: 0 };
  });
  var $author$project$Scenes$Story$Background$Model$updateBg = function (_v0) {
    var model = _v0.a;
    var env = _v0.b;
    return _Utils_Tuple2(_Utils_update(model, { bgIndex: model.bgIndex + 0.05 }), env);
  };
  var $author$project$Scenes$Story$Background$Model$update = F2(function (env, model) {
    return $author$project$Scenes$Story$Background$Model$updateBg(_Utils_Tuple2(model, env));
  });
  var $author$project$Scenes$Story$Background$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    if (_v1.$ === "Tick") {
      var _v2 = A2($author$project$Scenes$Story$Background$Model$update, env, model);
      var newModel = _v2.a;
      var newEnv = _v2.b;
      return _Utils_Tuple3(newModel, _List_Nil, newEnv);
    } else {
      return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Story$Background$Model$renderBg = F2(function (env, _v0) {
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(0, 1080), "story_bg");
  });
  var $elm$core$Basics$modBy = _Basics_modBy;
  var $elm$core$String$cons = _String_cons;
  var $elm$core$String$fromChar = function (_char) {
    return A2($elm$core$String$cons, _char, "");
  };
  var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
  var $elm$core$String$repeatHelp = F3(function (n, chunk, result) {
    return n <= 0 ? result : A3($elm$core$String$repeatHelp, n >> 1, _Utils_ap(chunk, chunk), !(n & 1) ? result : _Utils_ap(result, chunk));
  });
  var $elm$core$String$repeat = F2(function (n, chunk) {
    return A3($elm$core$String$repeatHelp, n, chunk, "");
  });
  var $elm$core$String$padLeft = F3(function (n, _char, string) {
    return _Utils_ap(A2($elm$core$String$repeat, n - $elm$core$String$length(string), $elm$core$String$fromChar(_char)), string);
  });
  var $elm$core$Debug$toString = _Debug_toString;
  var $author$project$Scenes$Story$Background$Model$renderPlanet = F2(function (env, model) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2(200, 180),
      _Utils_Tuple2(0, 600),
      "planet_" +
        A3(
          $elm$core$String$padLeft,
          3,
          _Utils_chr("0"),
          $elm$core$Debug$toString(A2($elm$core$Basics$modBy, 25, $elm$core$Basics$floor(model.bgIndex)))
        )
    );
  });
  var $author$project$Scenes$Story$Background$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Story$Background$Model$renderBg, env, model),
        A2($author$project$Scenes$Story$Background$Model$renderPlanet, env, model),
      ])
    );
  });
  var $author$project$Scenes$Story$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Story$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Story$Background$Model$updateModel,
      view: $author$project$Scenes$Story$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Story$Room$Common$Left = { $: "Left" };
  var $author$project$Scenes$Story$Room$Model$initModel = F2(function (env, _v0) {
    var textbox2 = A4($author$project$Scenes$Story$Room$Common$Textbox, _Utils_Tuple2(2300, 420), 450, 0, "textbox");
    var textbox1 = A4($author$project$Scenes$Story$Room$Common$Textbox, _Utils_Tuple2(550, 408), 450, 0, "textbox");
    var investigator = A9(
      $author$project$Scenes$Story$Room$Common$Character,
      1,
      550,
      668,
      222,
      96,
      $author$project$Scenes$Story$Room$Common$Still,
      $author$project$Scenes$Story$Room$Common$Left,
      0,
      0
    );
    var d = env.commonData;
    var map = A3($author$project$Scenes$Story$Room$Common$Map, d.mapHeight, d.mapWidth, "room");
    var mc = A9(
      $author$project$Scenes$Story$Room$Common$Character,
      0,
      200,
      680,
      d.mcHeight,
      d.mcWidth,
      $author$project$Scenes$Story$Room$Common$Still,
      $author$project$Scenes$Story$Room$Common$Right,
      0,
      0
    );
    var captain = A9(
      $author$project$Scenes$Story$Room$Common$Character,
      2,
      2300,
      673,
      210,
      132,
      $author$project$Scenes$Story$Room$Common$Still,
      $author$project$Scenes$Story$Room$Common$Left,
      0,
      0
    );
    var camera = A4($author$project$Scenes$Story$Room$Common$Camera, 0, 0, d.camHeight, d.camWidth);
    return {
      alpha: 1,
      camera: camera,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      npc: A2($Chadtech$elm_vector$Vector2$from2, investigator, captain),
      prevKey: 0,
      sceneState: $author$project$Scenes$Story$Room$Common$Beginning,
      textbox: A2($Chadtech$elm_vector$Vector2$from2, textbox1, textbox2),
    };
  });
  var $author$project$Scenes$Story$Room$Common$Ending = { $: "Ending" };
  var $author$project$Scenes$Story$Room$Common$FadeIn = { $: "FadeIn" };
  var $elm$core$List$any = F2(function (isOkay, list) {
    any: while (true) {
      if (!list.b) {
        return false;
      } else {
        var x = list.a;
        var xs = list.b;
        if (isOkay(x)) {
          return true;
        } else {
          var $temp$isOkay = isOkay,
            $temp$list = xs;
          isOkay = $temp$isOkay;
          list = $temp$list;
          continue any;
        }
      }
    }
  });
  var $elm$core$List$member = F2(function (x, xs) {
    return A2(
      $elm$core$List$any,
      function (a) {
        return _Utils_eq(a, x);
      },
      xs
    );
  });
  var $author$project$Scenes$Story$Room$Model$nextLevel = F2(function (model, _v0) {
    return model.mc.x >= 3540 && A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_update(model, { sceneState: $author$project$Scenes$Story$Room$Common$Ending })
      : model;
  });
  var $author$project$Scenes$Story$Room$Model$nextLevelReal = F2(function (model, _v0) {
    return model.mc.x >= 3540 && A2($elm$core$List$member, 67, model.keyList)
      ? _List_fromArray([
          _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Level1")),
        ])
      : _List_Nil;
  });
  var $author$project$Scenes$Story$Room$Model$nextLevelStopSound = F2(function (model, _v0) {
    return model.mc.x >= 3540 && A2($elm$core$List$member, 67, model.keyList)
      ? _List_fromArray([
          _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerStopSoundMsg("StoryBgm")),
        ])
      : _List_Nil;
  });
  var $elm_community$list_extra$List$Extra$reverseAppend = F2(function (list1, list2) {
    return A3($elm$core$List$foldl, $elm$core$List$cons, list2, list1);
  });
  var $elm_community$list_extra$List$Extra$removeHelp = F4(function (list, x, xs, previousElements) {
    removeHelp: while (true) {
      if (!xs.b) {
        return list;
      } else {
        var y = xs.a;
        var ys = xs.b;
        if (_Utils_eq(x, y)) {
          return A2($elm_community$list_extra$List$Extra$reverseAppend, previousElements, ys);
        } else {
          var $temp$list = list,
            $temp$x = x,
            $temp$xs = ys,
            $temp$previousElements = A2($elm$core$List$cons, y, previousElements);
          list = $temp$list;
          x = $temp$x;
          xs = $temp$xs;
          previousElements = $temp$previousElements;
          continue removeHelp;
        }
      }
    }
  });
  var $elm_community$list_extra$List$Extra$remove = F2(function (x, xs) {
    return A4($elm_community$list_extra$List$Extra$removeHelp, xs, x, xs, _List_Nil);
  });
  var $elm_community$list_extra$List$Extra$uniqueHelp = F4(function (f, existing, remaining, accumulator) {
    uniqueHelp: while (true) {
      if (!remaining.b) {
        return $elm$core$List$reverse(accumulator);
      } else {
        var first = remaining.a;
        var rest = remaining.b;
        var computedFirst = f(first);
        if (A2($elm$core$List$member, computedFirst, existing)) {
          var $temp$f = f,
            $temp$existing = existing,
            $temp$remaining = rest,
            $temp$accumulator = accumulator;
          f = $temp$f;
          existing = $temp$existing;
          remaining = $temp$remaining;
          accumulator = $temp$accumulator;
          continue uniqueHelp;
        } else {
          var $temp$f = f,
            $temp$existing = A2($elm$core$List$cons, computedFirst, existing),
            $temp$remaining = rest,
            $temp$accumulator = A2($elm$core$List$cons, first, accumulator);
          f = $temp$f;
          existing = $temp$existing;
          remaining = $temp$remaining;
          accumulator = $temp$accumulator;
          continue uniqueHelp;
        }
      }
    }
  });
  var $elm_community$list_extra$List$Extra$unique = function (list) {
    return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
  };
  var $author$project$Scenes$Story$Room$Model$cleanPrevKey = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { prevKey: 0 }));
  };
  var $Chadtech$elm_vector$Vector2$Index1 = { $: "Index1" };
  var $author$project$Scenes$Story$Room$Common$Instruction = { $: "Instruction" };
  var $Chadtech$elm_vector$Vector2$get = F2(function (index, _v0) {
    var vector = _v0.a;
    if (index.$ === "Index0") {
      return vector.n0;
    } else {
      return vector.n1;
    }
  });
  var $author$project$Scenes$Story$Room$Model$isEnterInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var mc = model.mc;
    var cap = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    return _Utils_cmp(mc.x, cap.x - 300) > 0 &&
      _Utils_cmp(mc.x, cap.x + 300) < 0 &&
      model.prevKey === 67 &&
      !_Utils_eq(model.sceneState, $author$project$Scenes$Story$Room$Common$Instruction)
      ? _Utils_Tuple2(env, _Utils_update(model, { prevKey: 0, sceneState: $author$project$Scenes$Story$Room$Common$Instruction }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Story$Room$Common$Start = { $: "Start" };
  var $author$project$Scenes$Story$Room$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, sceneState: $author$project$Scenes$Story$Room$Common$Start }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Story$Room$Common$Free = { $: "Free" };
  var $author$project$Scenes$Story$Room$Config$dialog2 = _List_fromArray([
    "Zapper, ",
    "go to the computer in Control Room.",
    "Connect to the DEFENSER.",
    "And control it to DEFEAT enemies.",
    "Beware of enemy superpowers.",
    "GOOD LUCK!",
  ]);
  var $Chadtech$elm_vector$Vector2$set = F3(function (index, a, _v0) {
    var vector = _v0.a;
    if (index.$ === "Index0") {
      return $Chadtech$elm_vector$Vector2$Internal$Vector(_Utils_update(vector, { n0: a }));
    } else {
      return $Chadtech$elm_vector$Vector2$Internal$Vector(_Utils_update(vector, { n1: a }));
    }
  });
  var $author$project$Scenes$Story$Room$Model$isFinishedInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var captain = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    if (_Utils_eq(captain.dialogIndex, $elm$core$List$length($author$project$Scenes$Story$Room$Config$dialog2))) {
      var cap = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
      var newCap = _Utils_update(cap, { dialogIndex: 0 });
      return _Utils_Tuple2(
        env,
        _Utils_update(model, {
          npc: A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, newCap, model.npc),
          sceneState: $author$project$Scenes$Story$Room$Common$Free,
        })
      );
    } else {
      return _Utils_Tuple2(env, model);
    }
  };
  var $Chadtech$elm_vector$Vector2$Index0 = { $: "Index0" };
  var $author$project$Scenes$Story$Room$Config$dialog1 = _List_fromArray([
    "Zapper, ZAPPER! WAKE UP!",
    "Our home planet was ATTACKED.",
    "Only you can operate the DEFENSER.",
    "YOU are the last hope!",
    "Now GO and FIGHT...",
  ]);
  var $author$project$Scenes$Story$Room$Model$isFinishedStart = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var investigator = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.npc);
    return _Utils_eq(investigator.dialogIndex, $elm$core$List$length($author$project$Scenes$Story$Room$Config$dialog1))
      ? _Utils_Tuple2(env, _Utils_update(model, { sceneState: $author$project$Scenes$Story$Room$Common$Free }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Story$Room$Model$updateBlack = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Story$Room$Model$updateCam = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var w = model.camera.width;
    var m = model.map;
    var h = model.camera.height;
    var d = env.commonData;
    var cam = model.camera;
    var c = model.mc;
    var x = _Utils_cmp(c.x, (w / 2) | 0) < 1 ? 0 : _Utils_cmp(c.x, m.width - ((w / 2) | 0)) > -1 ? m.width - w : c.x - ((w / 2) | 0);
    var y = _Utils_cmp(c.y, (h / 2) | 0) < 0 ? 0 : _Utils_cmp(c.y, m.height - ((h / 2) | 0)) > 0 ? m.height - h : c.y - ((h / 2) | 0);
    return _Utils_Tuple2(
      env,
      _Utils_update(model, {
        camera: _Utils_update(cam, { height: d.camHeight, width: d.camWidth, x: x, y: y }),
      })
    );
  };
  var $author$project$Scenes$Story$Room$Model$updateInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var npc = model.npc;
    var captain = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    var newNpc = A3(
      $Chadtech$elm_vector$Vector2$set,
      $Chadtech$elm_vector$Vector2$Index1,
      _Utils_update(captain, { dialogIndex: captain.dialogIndex + 1 }),
      npc
    );
    return model.prevKey === 67 && !A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_Tuple2(env, _Utils_update(model, { npc: newNpc, prevKey: 0 }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Story$Room$Common$Walking = { $: "Walking" };
  var $author$project$Scenes$Story$Room$Model$updateMainCharacter = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var keys = model.keyList;
    var d = env.commonData;
    var c = model.mc;
    return A2($elm$core$List$member, 39, keys) && A2($elm$core$List$member, 37, keys)
      ? _Utils_Tuple2(
          env,
          _Utils_update(model, {
            mc: _Utils_update(c, { currentSpriteIndex: 0, state: $author$project$Scenes$Story$Room$Common$Still }),
          })
        )
      : A2($elm$core$List$member, 39, keys) && _Utils_cmp(c.x, d.mapWidth - ((d.mcWidth / 2) | 0)) < 0
        ? _Utils_Tuple2(
            env,
            _Utils_update(model, {
              mc: _Utils_update(c, {
                currentSpriteIndex: c.currentSpriteIndex + 0.12,
                dir: $author$project$Scenes$Story$Room$Common$Right,
                state: $author$project$Scenes$Story$Room$Common$Walking,
                x: c.x + d.mcSpeed,
              }),
            })
          )
        : A2($elm$core$List$member, 37, keys) && _Utils_cmp(c.x, (d.mcWidth / 2) | 0) > 0
          ? _Utils_Tuple2(
              env,
              _Utils_update(model, {
                mc: _Utils_update(c, {
                  currentSpriteIndex: c.currentSpriteIndex + 0.12,
                  dir: $author$project$Scenes$Story$Room$Common$Left,
                  state: $author$project$Scenes$Story$Room$Common$Walking,
                  x: c.x - d.mcSpeed,
                }),
              })
            )
          : _Utils_Tuple2(
              env,
              _Utils_update(model, {
                mc: _Utils_update(c, { currentSpriteIndex: 0, state: $author$project$Scenes$Story$Room$Common$Still }),
              })
            );
  };
  var $Chadtech$elm_vector$Vector2$map = F2(function (f, _v0) {
    var vector = _v0.a;
    return $Chadtech$elm_vector$Vector2$Internal$Vector({
      n0: f(vector.n0),
      n1: f(vector.n1),
    });
  });
  var $author$project$Scenes$Story$Room$Model$updateNpc = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var mcx = model.mc.x;
    var newNpc = A2(
      $Chadtech$elm_vector$Vector2$map,
      function (c) {
        return _Utils_cmp(c.x, mcx) > 0
          ? _Utils_update(c, { dir: $author$project$Scenes$Story$Room$Common$Left })
          : _Utils_update(c, { dir: $author$project$Scenes$Story$Room$Common$Right });
      },
      model.npc
    );
    return _Utils_Tuple2(env, _Utils_update(model, { npc: newNpc }));
  };
  var $author$project$Scenes$Story$Room$Model$updateStart = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var npc = model.npc;
    var investigator = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.npc);
    var newNpc = A3(
      $Chadtech$elm_vector$Vector2$set,
      $Chadtech$elm_vector$Vector2$Index0,
      _Utils_update(investigator, { dialogIndex: investigator.dialogIndex + 1 }),
      npc
    );
    return model.prevKey === 67 && !A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_Tuple2(env, _Utils_update(model, { npc: newNpc, prevKey: 0 }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Story$Room$Model$updateTextbox = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var _v1 = model.sceneState;
    switch (_v1.$) {
      case "Start":
        var tb = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox);
        var newtb =
          tb.width <= 598
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb, { width: tb.width + 40 }), model.textbox)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb, { width: 600 }), model.textbox);
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      case "Free":
        var tb2 = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox);
        var tb1 = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox);
        var newtb1 =
          tb1.width > 0
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb1, { width: tb1.width - 40 }), model.textbox)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb1, { width: 0 }), model.textbox);
        var newtb2 =
          tb2.width > 0
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb2, { width: tb2.width - 40 }), newtb1)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb2, { width: 0 }), newtb1);
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb2 }));
      case "Instruction":
        var tb = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox);
        var newtb =
          tb.width <= 598
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb, { width: tb.width + 40 }), model.textbox)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb, { width: 600 }), model.textbox);
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      default:
        return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Story$Room$Model$update = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "FadeIn":
        return $author$project$Scenes$Story$Room$Model$isFinishedFadeIn(
          $author$project$Scenes$Story$Room$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      case "Beginning":
        return $author$project$Scenes$Story$Room$Model$isFinishedFadeIn(
          $author$project$Scenes$Story$Room$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      case "Start":
        return $author$project$Scenes$Story$Room$Model$updateCam(
          $author$project$Scenes$Story$Room$Model$updateTextbox(
            $author$project$Scenes$Story$Room$Model$isFinishedStart($author$project$Scenes$Story$Room$Model$updateStart(_Utils_Tuple2(env, model)))
          )
        );
      case "Instruction":
        return $author$project$Scenes$Story$Room$Model$updateCam(
          $author$project$Scenes$Story$Room$Model$updateTextbox(
            $author$project$Scenes$Story$Room$Model$isFinishedInstruction(
              $author$project$Scenes$Story$Room$Model$updateInstruction(_Utils_Tuple2(env, model))
            )
          )
        );
      case "Free":
        return $author$project$Scenes$Story$Room$Model$updateCam(
          $author$project$Scenes$Story$Room$Model$updateTextbox(
            $author$project$Scenes$Story$Room$Model$updateNpc(
              $author$project$Scenes$Story$Room$Model$updateMainCharacter(
                $author$project$Scenes$Story$Room$Model$cleanPrevKey(
                  $author$project$Scenes$Story$Room$Model$isEnterInstruction(_Utils_Tuple2(env, model))
                )
              )
            )
          )
        );
      default:
        return _Utils_Tuple2(env, model);
    }
  });
  var $author$project$Scenes$Story$Room$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "KeyDown":
        var key = _v1.a;
        var newKeyList = $elm_community$list_extra$List$Extra$unique(A2($elm$core$List$cons, key, model.keyList));
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList }), _List_Nil, env);
      case "KeyUp":
        var key = _v1.a;
        var newKeyList = A2($elm_community$list_extra$List$Extra$remove, key, model.keyList);
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList, prevKey: key }), _List_Nil, env);
      case "Tick":
        if (_Utils_eq(model.sceneState, $author$project$Scenes$Story$Room$Common$Beginning)) {
          return _Utils_Tuple3(_Utils_update(model, { sceneState: $author$project$Scenes$Story$Room$Common$FadeIn }), _List_Nil, env);
        } else {
          if (_Utils_eq(model.sceneState, $author$project$Scenes$Story$Room$Common$Ending)) {
            return _Utils_Tuple3(model, A2($author$project$Scenes$Story$Room$Model$nextLevelReal, model, env), env);
          } else {
            var _v2 = A2($author$project$Scenes$Story$Room$Model$update, env, model);
            var newEnv = _v2.a;
            var newModel = _v2.b;
            return _Utils_Tuple3(
              A2($author$project$Scenes$Story$Room$Model$nextLevel, newModel, env),
              A2($author$project$Scenes$Story$Room$Model$nextLevelStopSound, newModel, newEnv),
              newEnv
            );
          }
        }
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Story$Room$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
  var $elm$core$List$head = function (list) {
    if (list.b) {
      var x = list.a;
      var xs = list.b;
      return $elm$core$Maybe$Just(x);
    } else {
      return $elm$core$Maybe$Nothing;
    }
  };
  var $elm_community$list_extra$List$Extra$getAt = F2(function (idx, xs) {
    return idx < 0 ? $elm$core$Maybe$Nothing : $elm$core$List$head(A2($elm$core$List$drop, idx, xs));
  });
  var $linsyking$elm_canvas$Canvas$Settings$Text$Start = { $: "Start" };
  var $linsyking$elm_canvas$Canvas$Settings$Text$Top = { $: "Top" };
  var $author$project$Lib$Render$Text$renderTextWithColor = F6(function (gd, size, s, ft, col, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    var rx = A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, size);
    var _v1 = A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, _Utils_Tuple2(x, y));
    var dsx = _v1.a;
    var dsy = _v1.b;
    return A3(
      $linsyking$elm_canvas$Canvas$text,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Text$font({
          family: ft,
          size: $elm$core$Basics$floor(rx),
        }),
        $linsyking$elm_canvas$Canvas$Settings$Text$align($linsyking$elm_canvas$Canvas$Settings$Text$Start),
        $linsyking$elm_canvas$Canvas$Settings$fill(col),
        $linsyking$elm_canvas$Canvas$Settings$Text$baseLine($linsyking$elm_canvas$Canvas$Settings$Text$Top),
      ]),
      _Utils_Tuple2(dsx, dsy),
      s
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingUpdateDrawable = function (a) {
    return { $: "SettingUpdateDrawable", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Settings$Text$maxWidth = function (width) {
    return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingUpdateDrawable(function (d) {
      switch (d.$) {
        case "DrawableText":
          var txt = d.a;
          return $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableText(
            _Utils_update(txt, {
              maxWidth: $elm$core$Maybe$Just(width),
            })
          );
        case "DrawableShapes":
          return d;
        case "DrawableTexture":
          return d;
        case "DrawableClear":
          return d;
        case "DrawableGroup":
          return d;
        default:
          return d;
      }
    });
  };
  var $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth = F7(function (gd, size, s, ft, col, _v0, mw) {
    var x = _v0.a;
    var y = _v0.b;
    var rx = A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, size);
    var rmw = A2($author$project$Lib$Coordinate$Coordinates$lengthToReal, gd, $elm$core$Basics$round(mw));
    var _v1 = A2($author$project$Lib$Coordinate$Coordinates$posToReal, gd, _Utils_Tuple2(x, y));
    var dsx = _v1.a;
    var dsy = _v1.b;
    return A3(
      $linsyking$elm_canvas$Canvas$text,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Text$font({
          family: ft,
          size: $elm$core$Basics$floor(rx),
        }),
        $linsyking$elm_canvas$Canvas$Settings$Text$align($linsyking$elm_canvas$Canvas$Settings$Text$Center),
        $linsyking$elm_canvas$Canvas$Settings$fill(col),
        $linsyking$elm_canvas$Canvas$Settings$Text$baseLine($linsyking$elm_canvas$Canvas$Settings$Text$Middle),
        $linsyking$elm_canvas$Canvas$Settings$Text$maxWidth(rmw),
      ]),
      _Utils_Tuple2(dsx, dsy),
      s
    );
  });
  var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
  var $author$project$Scenes$Story$Room$Model$renderDialog = F2(function (env, model) {
    var i = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.npc);
    var iDialog = i.dialogIndex;
    var c = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    var cDialog = c.dialogIndex;
    var rendered = (function () {
      var _v0 = model.sceneState;
      switch (_v0.$) {
        case "Start":
          var tb1Y = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox).center.b - model.camera.y;
          var tb1X = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox).center.a - model.camera.x;
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              45,
              "INVESTIGATOR",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(tb1X - 265, tb1Y - 155)
            ),
            A7(
              $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth,
              env.globalData,
              47,
              (function () {
                var _v1 = A2($elm_community$list_extra$List$Extra$getAt, iDialog, $author$project$Scenes$Story$Room$Config$dialog1);
                if (_v1.$ === "Just") {
                  var d = _v1.a;
                  return d;
                } else {
                  return "";
                }
              })(),
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$black,
              _Utils_Tuple2(tb1X, tb1Y),
              550
            ),
          ]);
        case "Instruction":
          var tb2Y = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox).center.b - model.camera.y;
          var tb2X = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox).center.a - model.camera.x;
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              45,
              "CAPTAIN",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(tb2X - 265, tb2Y - 155)
            ),
            A7(
              $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth,
              env.globalData,
              47,
              (function () {
                var _v2 = A2($elm_community$list_extra$List$Extra$getAt, cDialog, $author$project$Scenes$Story$Room$Config$dialog2);
                if (_v2.$ === "Just") {
                  var d = _v2.a;
                  return d;
                } else {
                  return "";
                }
              })(),
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$black,
              _Utils_Tuple2(tb2X, tb2Y),
              550
            ),
          ]);
        default:
          return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Story$Room$Model$renderKeyInstruction = F2(function (env, model) {
    var cam = model.camera;
    var c = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    var rendered = (function () {
      var _v0 = model.sceneState;
      switch (_v0.$) {
        case "Start":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "PRESS       TO CONTINUE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(205, 934), _Utils_Tuple2(96, 96), "key_c"),
          ]);
        case "Free":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "            TO MOVE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5(
              $author$project$Lib$Render$Sprite$renderSprite,
              env.globalData,
              _List_Nil,
              _Utils_Tuple2(50, 934),
              _Utils_Tuple2(96, 96),
              "key_leftarrow"
            ),
            A5(
              $author$project$Lib$Render$Sprite$renderSprite,
              env.globalData,
              _List_Nil,
              _Utils_Tuple2(170, 934),
              _Utils_Tuple2(96, 96),
              "key_rightarrow"
            ),
            _Utils_cmp(model.mc.x, c.x - 300) > -1 && _Utils_cmp(model.mc.x, c.x + 300) < 1
              ? A5(
                  $author$project$Lib$Render$Sprite$renderSprite,
                  env.globalData,
                  _List_Nil,
                  _Utils_Tuple2(c.x - 55 - cam.x, c.y - 190 - cam.y),
                  _Utils_Tuple2(96, 96),
                  "key_c"
                )
              : $linsyking$elm_canvas$Canvas$empty,
            model.mc.x >= 3540
              ? A5(
                  $author$project$Lib$Render$Sprite$renderSprite,
                  env.globalData,
                  _List_Nil,
                  _Utils_Tuple2(3600 - cam.x, 400 - cam.y),
                  _Utils_Tuple2(96, 96),
                  "key_c"
                )
              : $linsyking$elm_canvas$Canvas$empty,
          ]);
        case "Instruction":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "PRESS       TO CONTINUE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(205, 934), _Utils_Tuple2(96, 96), "key_c"),
          ]);
        default:
          return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix = function (a) {
    return { $: "ApplyMatrix", a: a };
  };
  var $author$project$Scenes$Story$Room$Model$renderMainCharacter = F2(function (env, model) {
    var cam = model.camera;
    var c = model.mc;
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
          _List_fromArray([
            (function () {
              var _v0 = c.dir;
              if (_v0.$ === "Left") {
                return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 48, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
              } else {
                return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
              }
            })(),
          ])
        ),
      ]),
      _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
      _Utils_Tuple2(c.width, c.height),
      (function () {
        var _v1 = c.state;
        switch (_v1.$) {
          case "Still":
            return "mainCharacter_000";
          case "Walking":
            return (
              "mainCharacter_" +
              A3(
                $elm$core$String$padLeft,
                3,
                _Utils_chr("0"),
                $elm$core$Debug$toString(1 + A2($elm$core$Basics$modBy, 6, $elm$core$Basics$floor(c.currentSpriteIndex)))
              )
            );
          default:
            return "";
        }
      })()
    );
  });
  var $author$project$Scenes$Story$Room$Model$renderMap = F2(function (env, model) {
    var y = -model.camera.y;
    var x = -model.camera.x;
    var w = model.map.width;
    var s = model.map.sprite;
    var h = model.map.height;
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(x, y), _Utils_Tuple2(w, h), s);
  });
  var $Chadtech$elm_vector$Vector2$toList = function (_v0) {
    var vector = _v0.a;
    return _List_fromArray([vector.n0, vector.n1]);
  };
  var $author$project$Scenes$Story$Room$Model$renderNpc = F2(function (env, model) {
    var cam = model.camera;
    var renderedNpc = A2(
      $Chadtech$elm_vector$Vector2$map,
      function (c) {
        return A5(
          $author$project$Lib$Render$Sprite$renderSprite,
          env.globalData,
          _List_fromArray([
            $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
              _List_fromArray([
                (function () {
                  var _v0 = c.dir;
                  if (_v0.$ === "Left") {
                    return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 60, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
                  } else {
                    return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
                  }
                })(),
              ])
            ),
          ]),
          _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
          _Utils_Tuple2(c.width, c.height),
          (function () {
            var _v1 = c.id;
            switch (_v1) {
              case 1:
                return "investigator";
              case 2:
                return "captain";
              default:
                return "";
            }
          })()
        );
      },
      model.npc
    );
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, $Chadtech$elm_vector$Vector2$toList(renderedNpc));
  });
  var $author$project$Scenes$Story$Room$Model$renderTextbox = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      $Chadtech$elm_vector$Vector2$toList(
        A2(
          $Chadtech$elm_vector$Vector2$map,
          function (tb) {
            return !tb.width
              ? $linsyking$elm_canvas$Canvas$empty
              : A5(
                  $author$project$Lib$Render$Sprite$renderSprite,
                  env.globalData,
                  _List_Nil,
                  _Utils_Tuple2(tb.center.a - ((tb.width / 2) | 0) - model.camera.x, tb.center.b - ((tb.height / 2) | 0) - model.camera.y),
                  _Utils_Tuple2(tb.width, tb.height),
                  tb.sprite
                );
          },
          model.textbox
        )
      )
    );
  });
  var $author$project$Scenes$Story$Room$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Story$Room$Model$renderMap, env, model),
        A2($author$project$Scenes$Story$Room$Model$renderNpc, env, model),
        A2($author$project$Scenes$Story$Room$Model$renderMainCharacter, env, model),
        A2($author$project$Scenes$Story$Room$Model$renderTextbox, env, model),
        A2($author$project$Scenes$Story$Room$Model$renderDialog, env, model),
        A2($author$project$Scenes$Story$Room$Model$renderKeyInstruction, env, model),
        A2($author$project$Scenes$Story$Room$Model$renderBlack, env, model),
      ])
    );
  });
  var $author$project$Scenes$Story$Room$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Story$Room$Model$initModel, env, i),
      name: "Room",
      update: $author$project$Scenes$Story$Room$Model$updateModel,
      view: $author$project$Scenes$Story$Room$Model$viewModel,
    };
  });
  var $author$project$Scenes$Story$SceneInit$nullStoryInit = {};
  var $author$project$Scenes$Story$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "StoryInitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Story$SceneInit$nullStoryInit;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Story$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Story$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Story$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Story$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Story$Room$Global$getLayerT(
          A2(
            $author$project$Scenes$Story$Room$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Story$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Story$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Story$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Story$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Story$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Story$Export$scene = {
    init: $author$project$Scenes$Story$Common$initModel,
    update: $author$project$Scenes$Story$Model$updateModel,
    view: $author$project$Scenes$Story$Model$viewModel,
  };
  var $author$project$Scenes$Transition1$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Transition1$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Transition1$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Transition1$Background$Common$nullModel = { bgIndex: 0 };
  var $author$project$Scenes$Transition1$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition1$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition1$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Transition1$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Transition1$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition1$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Transition1$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Transition1$LayerSettings$RoomData = function (a) {
    return { $: "RoomData", a: a };
  };
  var $author$project$Scenes$Transition1$Room$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Transition1$LayerSettings$RoomData(data);
  };
  var $author$project$Scenes$Transition1$Room$Common$Camera = F4(function (x, y, height, width) {
    return { height: height, width: width, x: x, y: y };
  });
  var $author$project$Scenes$Transition1$Room$Common$Character = F6(function (x, y, height, width, dir, dialogIndex) {
    return { dialogIndex: dialogIndex, dir: dir, height: height, width: width, x: x, y: y };
  });
  var $author$project$Scenes$Transition1$Room$Common$FadeIn = { $: "FadeIn" };
  var $author$project$Scenes$Transition1$Room$Common$Map = F3(function (height, width, sprite) {
    return { height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Transition1$Room$Common$Right = { $: "Right" };
  var $author$project$Scenes$Transition1$Room$Common$Textbox = F4(function (center, height, width, sprite) {
    return { center: center, height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Transition1$Room$Common$nullModel = (function () {
    var tb = A4($author$project$Scenes$Transition1$Room$Common$Textbox, _Utils_Tuple2(0, 0), 0, 0, "");
    var mc = A6($author$project$Scenes$Transition1$Room$Common$Character, 0, 0, 0, 0, $author$project$Scenes$Transition1$Room$Common$Right, 0);
    var map = A3($author$project$Scenes$Transition1$Room$Common$Map, 0, 0, "");
    var camera = A4($author$project$Scenes$Transition1$Room$Common$Camera, 0, 0, 0, 0);
    return {
      alpha: 1,
      camera: camera,
      captain: mc,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      prevKey: 0,
      sceneState: $author$project$Scenes$Transition1$Room$Common$FadeIn,
      textbox: tb,
    };
  })();
  var $author$project$Scenes$Transition1$Room$Global$ldtToData = function (ldt) {
    if (ldt.$ === "RoomData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition1$Room$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition1$Room$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Transition1$Room$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Transition1$Room$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition1$Room$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Transition1$Room$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Transition1$LayerBase$nullCommonData = {};
  var $author$project$Scenes$Transition1$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Transition1$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Transition1$Background$Model$initModel = F2(function (_v0, _v1) {
    return { bgIndex: 0 };
  });
  var $author$project$Scenes$Transition1$Background$Model$updateBg = function (_v0) {
    var model = _v0.a;
    var env = _v0.b;
    return _Utils_Tuple2(_Utils_update(model, { bgIndex: model.bgIndex + 0.05 }), env);
  };
  var $author$project$Scenes$Transition1$Background$Model$update = F2(function (env, model) {
    return $author$project$Scenes$Transition1$Background$Model$updateBg(_Utils_Tuple2(model, env));
  });
  var $author$project$Scenes$Transition1$Background$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    if (_v1.$ === "Tick") {
      var _v2 = A2($author$project$Scenes$Transition1$Background$Model$update, env, model);
      var newModel = _v2.a;
      var newEnv = _v2.b;
      return _Utils_Tuple3(newModel, _List_Nil, newEnv);
    } else {
      return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition1$Background$Model$renderBg = F2(function (env, _v0) {
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(0, 1080), "story_bg");
  });
  var $author$project$Scenes$Transition1$Background$Model$renderPlanet = F2(function (env, model) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2(200, 180),
      _Utils_Tuple2(0, 600),
      "planet_" +
        A3(
          $elm$core$String$padLeft,
          3,
          _Utils_chr("0"),
          $elm$core$Debug$toString(A2($elm$core$Basics$modBy, 25, $elm$core$Basics$floor(model.bgIndex)))
        )
    );
  });
  var $author$project$Scenes$Transition1$Background$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Transition1$Background$Model$renderBg, env, model),
        A2($author$project$Scenes$Transition1$Background$Model$renderPlanet, env, model),
      ])
    );
  });
  var $author$project$Scenes$Transition1$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Transition1$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Transition1$Background$Model$updateModel,
      view: $author$project$Scenes$Transition1$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Transition1$Room$Common$Left = { $: "Left" };
  var $author$project$Scenes$Transition1$Room$Model$initModel = F2(function (_v0, _v1) {
    var textbox = A4($author$project$Scenes$Transition1$Room$Common$Textbox, _Utils_Tuple2(3000, 420), 450, 0, "textbox");
    var mc = A6($author$project$Scenes$Transition1$Room$Common$Character, 3480, 680, 198, 96, $author$project$Scenes$Transition1$Room$Common$Left, 0);
    var map = A3($author$project$Scenes$Transition1$Room$Common$Map, 1080, 1920 * 2, "room");
    var captain = A6(
      $author$project$Scenes$Transition1$Room$Common$Character,
      3000,
      673,
      210,
      132,
      $author$project$Scenes$Transition1$Room$Common$Right,
      0
    );
    var camera = A4($author$project$Scenes$Transition1$Room$Common$Camera, 1920, 0, 1080, 1920);
    return {
      alpha: 1,
      camera: camera,
      captain: captain,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      prevKey: 0,
      sceneState: $author$project$Scenes$Transition1$Room$Common$FadeIn,
      textbox: textbox,
    };
  });
  var $author$project$Scenes$Transition1$Room$Common$Free = { $: "Free" };
  var $author$project$Scenes$Transition1$Room$Model$nextLevel = F2(function (model, _v0) {
    return _Utils_eq(model.sceneState, $author$project$Scenes$Transition1$Room$Common$Free) && A2($elm$core$List$member, 67, model.keyList)
      ? _List_fromArray([
          _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Level2")),
        ])
      : _List_Nil;
  });
  var $author$project$Scenes$Transition1$Room$Common$Instruction = { $: "Instruction" };
  var $author$project$Scenes$Transition1$Room$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, sceneState: $author$project$Scenes$Transition1$Room$Common$Instruction }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition1$Room$Model$dialog = _List_fromArray([
    "Congratulations, Zapper!",
    "But more enemies are comming.",
    "Keep fighting...",
  ]);
  var $author$project$Scenes$Transition1$Room$Model$isFinishedInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var captain = model.captain;
    if (_Utils_eq(captain.dialogIndex, $elm$core$List$length($author$project$Scenes$Transition1$Room$Model$dialog))) {
      var newCap = _Utils_update(captain, { dialogIndex: 0 });
      return _Utils_Tuple2(env, _Utils_update(model, { captain: newCap, sceneState: $author$project$Scenes$Transition1$Room$Common$Free }));
    } else {
      return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Transition1$Room$Model$updateBlack = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Transition1$Room$Model$updateInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var npc = model.captain;
    var newNpc = _Utils_update(npc, { dialogIndex: npc.dialogIndex + 1 });
    return model.prevKey === 67 && !A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_Tuple2(env, _Utils_update(model, { captain: newNpc, prevKey: 0 }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition1$Room$Model$updateTextbox = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var _v1 = model.sceneState;
    switch (_v1.$) {
      case "Free":
        var tb = model.textbox;
        var newtb = tb.width > 0 ? _Utils_update(tb, { width: tb.width - 40 }) : _Utils_update(tb, { width: 0 });
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      case "Instruction":
        var tb = model.textbox;
        var newtb = tb.width <= 598 ? _Utils_update(tb, { width: tb.width + 40 }) : _Utils_update(tb, { width: 600 });
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      default:
        return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Transition1$Room$Model$update = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "FadeIn":
        return $author$project$Scenes$Transition1$Room$Model$isFinishedFadeIn(
          $author$project$Scenes$Transition1$Room$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      case "Instruction":
        return $author$project$Scenes$Transition1$Room$Model$updateTextbox(
          $author$project$Scenes$Transition1$Room$Model$isFinishedInstruction(
            $author$project$Scenes$Transition1$Room$Model$updateInstruction(_Utils_Tuple2(env, model))
          )
        );
      default:
        return $author$project$Scenes$Transition1$Room$Model$updateTextbox(_Utils_Tuple2(env, model));
    }
  });
  var $author$project$Scenes$Transition1$Room$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "KeyDown":
        var key = _v1.a;
        var newKeyList = $elm_community$list_extra$List$Extra$unique(A2($elm$core$List$cons, key, model.keyList));
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList }), _List_Nil, env);
      case "KeyUp":
        var key = _v1.a;
        var newKeyList = A2($elm_community$list_extra$List$Extra$remove, key, model.keyList);
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList, prevKey: key }), _List_Nil, env);
      case "Tick":
        var _v2 = A2($author$project$Scenes$Transition1$Room$Model$update, env, model);
        var newEnv = _v2.a;
        var newModel = _v2.b;
        return _Utils_Tuple3(newModel, A2($author$project$Scenes$Transition1$Room$Model$nextLevel, newModel, newEnv), newEnv);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition1$Room$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$Transition1$Room$Model$renderDialog = F2(function (env, model) {
    var c = model.captain;
    var cDialog = c.dialogIndex;
    var rendered = (function () {
      var _v0 = model.sceneState;
      if (_v0.$ === "Instruction") {
        var tb2Y = model.textbox.center.b - model.camera.y;
        var tb2X = model.textbox.center.a - model.camera.x;
        return _List_fromArray([
          A6(
            $author$project$Lib$Render$Text$renderTextWithColor,
            env.globalData,
            45,
            "CAPTAIN",
            "disposabledroid_bbregular",
            $avh4$elm_color$Color$white,
            _Utils_Tuple2(tb2X - 265, tb2Y - 155)
          ),
          A7(
            $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth,
            env.globalData,
            47,
            (function () {
              var _v1 = A2($elm_community$list_extra$List$Extra$getAt, cDialog, $author$project$Scenes$Transition1$Room$Model$dialog);
              if (_v1.$ === "Just") {
                var d = _v1.a;
                return d;
              } else {
                return "";
              }
            })(),
            "disposabledroid_bbregular",
            $avh4$elm_color$Color$black,
            _Utils_Tuple2(tb2X, tb2Y),
            550
          ),
        ]);
      } else {
        return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Transition1$Room$Model$renderKeyInstruction = F2(function (env, model) {
    var cam = model.camera;
    var rendered = (function () {
      var _v0 = model.sceneState;
      switch (_v0.$) {
        case "Free":
          return _List_fromArray([
            A5(
              $author$project$Lib$Render$Sprite$renderSprite,
              env.globalData,
              _List_Nil,
              _Utils_Tuple2(3600 - cam.x, 400 - cam.y),
              _Utils_Tuple2(96, 96),
              "key_c"
            ),
          ]);
        case "Instruction":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "PRESS       TO CONTINUE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(205, 934), _Utils_Tuple2(96, 96), "key_c"),
          ]);
        default:
          return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    var c = model.captain;
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Transition1$Room$Model$renderMainCharacter = F2(function (env, model) {
    var cam = model.camera;
    var c = model.mc;
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
          _List_fromArray([
            (function () {
              var _v0 = c.dir;
              if (_v0.$ === "Left") {
                return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 48, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
              } else {
                return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
              }
            })(),
          ])
        ),
      ]),
      _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
      _Utils_Tuple2(c.width, c.height),
      "mainCharacter_000"
    );
  });
  var $author$project$Scenes$Transition1$Room$Model$renderMap = F2(function (env, model) {
    var y = -model.camera.y;
    var x = -model.camera.x;
    var w = model.map.width;
    var s = model.map.sprite;
    var h = model.map.height;
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(x, y), _Utils_Tuple2(w, h), s);
  });
  var $author$project$Scenes$Transition1$Room$Model$renderNpc = F2(function (env, model) {
    var cam = model.camera;
    var renderedNpc = (function (c) {
      return A5(
        $author$project$Lib$Render$Sprite$renderSprite,
        env.globalData,
        _List_fromArray([
          $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
            _List_fromArray([
              (function () {
                var _v0 = c.dir;
                if (_v0.$ === "Left") {
                  return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 60, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
                } else {
                  return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
                }
              })(),
            ])
          ),
        ]),
        _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
        _Utils_Tuple2(c.width, c.height),
        "captain"
      );
    })(model.captain);
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, _List_fromArray([renderedNpc]));
  });
  var $author$project$Scenes$Transition1$Room$Model$renderTextbox = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        (function (tb) {
          return !tb.width
            ? $linsyking$elm_canvas$Canvas$empty
            : A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2(tb.center.a - ((tb.width / 2) | 0) - model.camera.x, tb.center.b - ((tb.height / 2) | 0) - model.camera.y),
                _Utils_Tuple2(tb.width, tb.height),
                tb.sprite
              );
        })(model.textbox),
      ])
    );
  });
  var $author$project$Scenes$Transition1$Room$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Transition1$Room$Model$renderMap, env, model),
        A2($author$project$Scenes$Transition1$Room$Model$renderNpc, env, model),
        A2($author$project$Scenes$Transition1$Room$Model$renderMainCharacter, env, model),
        A2($author$project$Scenes$Transition1$Room$Model$renderTextbox, env, model),
        A2($author$project$Scenes$Transition1$Room$Model$renderDialog, env, model),
        A2($author$project$Scenes$Transition1$Room$Model$renderKeyInstruction, env, model),
        A2($author$project$Scenes$Transition1$Room$Model$renderBlack, env, model),
      ])
    );
  });
  var $author$project$Scenes$Transition1$Room$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Transition1$Room$Model$initModel, env, i),
      name: "Room",
      update: $author$project$Scenes$Transition1$Room$Model$updateModel,
      view: $author$project$Scenes$Transition1$Room$Model$viewModel,
    };
  });
  var $author$project$Scenes$Transition1$SceneInit$nullTransition1Init = {};
  var $author$project$Scenes$Transition1$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "Transition1InitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Transition1$SceneInit$nullTransition1Init;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Transition1$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Transition1$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Transition1$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Transition1$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Transition1$Room$Global$getLayerT(
          A2(
            $author$project$Scenes$Transition1$Room$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Transition1$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Transition1$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition1$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Transition1$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Transition1$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Transition1$Export$scene = {
    init: $author$project$Scenes$Transition1$Common$initModel,
    update: $author$project$Scenes$Transition1$Model$updateModel,
    view: $author$project$Scenes$Transition1$Model$viewModel,
  };
  var $author$project$Scenes$Transition2$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Transition2$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Transition2$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Transition2$Background$Common$nullModel = { bgIndex: 0 };
  var $author$project$Scenes$Transition2$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition2$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition2$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Transition2$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Transition2$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition2$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Transition2$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Transition2$LayerSettings$RoomData = function (a) {
    return { $: "RoomData", a: a };
  };
  var $author$project$Scenes$Transition2$Room$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Transition2$LayerSettings$RoomData(data);
  };
  var $author$project$Scenes$Transition2$Room$Common$Camera = F4(function (x, y, height, width) {
    return { height: height, width: width, x: x, y: y };
  });
  var $author$project$Scenes$Transition2$Room$Common$Character = F6(function (x, y, height, width, dir, dialogIndex) {
    return { dialogIndex: dialogIndex, dir: dir, height: height, width: width, x: x, y: y };
  });
  var $author$project$Scenes$Transition2$Room$Common$FadeIn = { $: "FadeIn" };
  var $author$project$Scenes$Transition2$Room$Common$Map = F3(function (height, width, sprite) {
    return { height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Transition2$Room$Common$Right = { $: "Right" };
  var $author$project$Scenes$Transition2$Room$Common$Textbox = F4(function (center, height, width, sprite) {
    return { center: center, height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Transition2$Room$Common$nullModel = (function () {
    var tb = A4($author$project$Scenes$Transition2$Room$Common$Textbox, _Utils_Tuple2(0, 0), 0, 0, "");
    var mc = A6($author$project$Scenes$Transition2$Room$Common$Character, 0, 0, 0, 0, $author$project$Scenes$Transition2$Room$Common$Right, 0);
    var map = A3($author$project$Scenes$Transition2$Room$Common$Map, 0, 0, "");
    var camera = A4($author$project$Scenes$Transition2$Room$Common$Camera, 0, 0, 0, 0);
    return {
      alpha: 1,
      camera: camera,
      captain: mc,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      prevKey: 0,
      sceneState: $author$project$Scenes$Transition2$Room$Common$FadeIn,
      textbox: tb,
    };
  })();
  var $author$project$Scenes$Transition2$Room$Global$ldtToData = function (ldt) {
    if (ldt.$ === "RoomData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition2$Room$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition2$Room$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Transition2$Room$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Transition2$Room$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition2$Room$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Transition2$Room$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Transition2$LayerBase$nullCommonData = {};
  var $author$project$Scenes$Transition2$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Transition2$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Transition2$Background$Model$initModel = F2(function (_v0, _v1) {
    return { bgIndex: 0 };
  });
  var $author$project$Scenes$Transition2$Background$Model$updateBg = function (_v0) {
    var model = _v0.a;
    var env = _v0.b;
    return _Utils_Tuple2(_Utils_update(model, { bgIndex: model.bgIndex + 0.05 }), env);
  };
  var $author$project$Scenes$Transition2$Background$Model$update = F2(function (env, model) {
    return $author$project$Scenes$Transition2$Background$Model$updateBg(_Utils_Tuple2(model, env));
  });
  var $author$project$Scenes$Transition2$Background$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    if (_v1.$ === "Tick") {
      var _v2 = A2($author$project$Scenes$Transition2$Background$Model$update, env, model);
      var newModel = _v2.a;
      var newEnv = _v2.b;
      return _Utils_Tuple3(newModel, _List_Nil, newEnv);
    } else {
      return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition2$Background$Model$renderBg = F2(function (env, _v0) {
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(0, 0), _Utils_Tuple2(0, 1080), "story_bg");
  });
  var $author$project$Scenes$Transition2$Background$Model$renderPlanet = F2(function (env, model) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2(200, 180),
      _Utils_Tuple2(0, 600),
      "planet_" +
        A3(
          $elm$core$String$padLeft,
          3,
          _Utils_chr("0"),
          $elm$core$Debug$toString(A2($elm$core$Basics$modBy, 25, $elm$core$Basics$floor(model.bgIndex)))
        )
    );
  });
  var $author$project$Scenes$Transition2$Background$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Transition2$Background$Model$renderBg, env, model),
        A2($author$project$Scenes$Transition2$Background$Model$renderPlanet, env, model),
      ])
    );
  });
  var $author$project$Scenes$Transition2$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Transition2$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Transition2$Background$Model$updateModel,
      view: $author$project$Scenes$Transition2$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Transition2$Room$Common$Left = { $: "Left" };
  var $author$project$Scenes$Transition2$Room$Model$initModel = F2(function (_v0, _v1) {
    var textbox = A4($author$project$Scenes$Transition2$Room$Common$Textbox, _Utils_Tuple2(3000, 420), 450, 0, "textbox");
    var mc = A6($author$project$Scenes$Transition2$Room$Common$Character, 3480, 680, 198, 96, $author$project$Scenes$Transition2$Room$Common$Left, 0);
    var map = A3($author$project$Scenes$Transition2$Room$Common$Map, 1080, 1920 * 2, "room");
    var captain = A6(
      $author$project$Scenes$Transition2$Room$Common$Character,
      3000,
      673,
      210,
      132,
      $author$project$Scenes$Transition2$Room$Common$Right,
      0
    );
    var camera = A4($author$project$Scenes$Transition2$Room$Common$Camera, 1920, 0, 1080, 1920);
    return {
      alpha: 1,
      camera: camera,
      captain: captain,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      prevKey: 0,
      sceneState: $author$project$Scenes$Transition2$Room$Common$FadeIn,
      textbox: textbox,
    };
  });
  var $author$project$Scenes$Transition2$Room$Common$Free = { $: "Free" };
  var $author$project$Scenes$Transition2$Room$Model$nextLevel = F2(function (model, _v0) {
    return _Utils_eq(model.sceneState, $author$project$Scenes$Transition2$Room$Common$Free) && A2($elm$core$List$member, 67, model.keyList)
      ? _List_fromArray([
          _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("Level3")),
        ])
      : _List_Nil;
  });
  var $author$project$Scenes$Transition2$Room$Common$Instruction = { $: "Instruction" };
  var $author$project$Scenes$Transition2$Room$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, sceneState: $author$project$Scenes$Transition2$Room$Common$Instruction }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition2$Room$Model$dialog = _List_fromArray([
    "Congratulations!",
    "But now we are going..",
    "through magnetic field.",
    "Be careful!",
  ]);
  var $author$project$Scenes$Transition2$Room$Model$isFinishedInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var captain = model.captain;
    if (_Utils_eq(captain.dialogIndex, $elm$core$List$length($author$project$Scenes$Transition2$Room$Model$dialog))) {
      var newCap = _Utils_update(captain, { dialogIndex: 0 });
      return _Utils_Tuple2(env, _Utils_update(model, { captain: newCap, sceneState: $author$project$Scenes$Transition2$Room$Common$Free }));
    } else {
      return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Transition2$Room$Model$updateBlack = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Transition2$Room$Model$updateInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var npc = model.captain;
    var newNpc = _Utils_update(npc, { dialogIndex: npc.dialogIndex + 1 });
    return model.prevKey === 67 && !A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_Tuple2(env, _Utils_update(model, { captain: newNpc, prevKey: 0 }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition2$Room$Model$updateTextbox = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var _v1 = model.sceneState;
    switch (_v1.$) {
      case "Free":
        var tb = model.textbox;
        var newtb = tb.width > 0 ? _Utils_update(tb, { width: tb.width - 40 }) : _Utils_update(tb, { width: 0 });
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      case "Instruction":
        var tb = model.textbox;
        var newtb = tb.width <= 598 ? _Utils_update(tb, { width: tb.width + 40 }) : _Utils_update(tb, { width: 600 });
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      default:
        return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Transition2$Room$Model$update = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "FadeIn":
        return $author$project$Scenes$Transition2$Room$Model$isFinishedFadeIn(
          $author$project$Scenes$Transition2$Room$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      case "Instruction":
        return $author$project$Scenes$Transition2$Room$Model$updateTextbox(
          $author$project$Scenes$Transition2$Room$Model$isFinishedInstruction(
            $author$project$Scenes$Transition2$Room$Model$updateInstruction(_Utils_Tuple2(env, model))
          )
        );
      default:
        return $author$project$Scenes$Transition2$Room$Model$updateTextbox(_Utils_Tuple2(env, model));
    }
  });
  var $author$project$Scenes$Transition2$Room$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "KeyDown":
        var key = _v1.a;
        var newKeyList = $elm_community$list_extra$List$Extra$unique(A2($elm$core$List$cons, key, model.keyList));
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList }), _List_Nil, env);
      case "KeyUp":
        var key = _v1.a;
        var newKeyList = A2($elm_community$list_extra$List$Extra$remove, key, model.keyList);
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList, prevKey: key }), _List_Nil, env);
      case "Tick":
        var _v2 = A2($author$project$Scenes$Transition2$Room$Model$update, env, model);
        var newEnv = _v2.a;
        var newModel = _v2.b;
        return _Utils_Tuple3(newModel, A2($author$project$Scenes$Transition2$Room$Model$nextLevel, newModel, newEnv), newEnv);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition2$Room$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$Transition2$Room$Model$renderDialog = F2(function (env, model) {
    var c = model.captain;
    var cDialog = c.dialogIndex;
    var rendered = (function () {
      var _v0 = model.sceneState;
      if (_v0.$ === "Instruction") {
        var tb2Y = model.textbox.center.b - model.camera.y;
        var tb2X = model.textbox.center.a - model.camera.x;
        return _List_fromArray([
          A6(
            $author$project$Lib$Render$Text$renderTextWithColor,
            env.globalData,
            45,
            "CAPTAIN",
            "disposabledroid_bbregular",
            $avh4$elm_color$Color$white,
            _Utils_Tuple2(tb2X - 265, tb2Y - 155)
          ),
          A7(
            $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth,
            env.globalData,
            47,
            (function () {
              var _v1 = A2($elm_community$list_extra$List$Extra$getAt, cDialog, $author$project$Scenes$Transition2$Room$Model$dialog);
              if (_v1.$ === "Just") {
                var d = _v1.a;
                return d;
              } else {
                return "";
              }
            })(),
            "disposabledroid_bbregular",
            $avh4$elm_color$Color$black,
            _Utils_Tuple2(tb2X, tb2Y),
            550
          ),
        ]);
      } else {
        return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Transition2$Room$Model$renderKeyInstruction = F2(function (env, model) {
    var cam = model.camera;
    var rendered = (function () {
      var _v0 = model.sceneState;
      switch (_v0.$) {
        case "Free":
          return _List_fromArray([
            A5(
              $author$project$Lib$Render$Sprite$renderSprite,
              env.globalData,
              _List_Nil,
              _Utils_Tuple2(3600 - cam.x, 400 - cam.y),
              _Utils_Tuple2(96, 96),
              "key_c"
            ),
          ]);
        case "Instruction":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "PRESS       TO CONTINUE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(205, 934), _Utils_Tuple2(96, 96), "key_c"),
          ]);
        default:
          return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    var c = model.captain;
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Transition2$Room$Model$renderMainCharacter = F2(function (env, model) {
    var cam = model.camera;
    var c = model.mc;
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
          _List_fromArray([
            (function () {
              var _v0 = c.dir;
              if (_v0.$ === "Left") {
                return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 48, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
              } else {
                return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
              }
            })(),
          ])
        ),
      ]),
      _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
      _Utils_Tuple2(c.width, c.height),
      "mainCharacter_000"
    );
  });
  var $author$project$Scenes$Transition2$Room$Model$renderMap = F2(function (env, model) {
    var y = -model.camera.y;
    var x = -model.camera.x;
    var w = model.map.width;
    var s = model.map.sprite;
    var h = model.map.height;
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(x, y), _Utils_Tuple2(w, h), s);
  });
  var $author$project$Scenes$Transition2$Room$Model$renderNpc = F2(function (env, model) {
    var cam = model.camera;
    var renderedNpc = (function (c) {
      return A5(
        $author$project$Lib$Render$Sprite$renderSprite,
        env.globalData,
        _List_fromArray([
          $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
            _List_fromArray([
              (function () {
                var _v0 = c.dir;
                if (_v0.$ === "Left") {
                  return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 60, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
                } else {
                  return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
                }
              })(),
            ])
          ),
        ]),
        _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
        _Utils_Tuple2(c.width, c.height),
        "captain"
      );
    })(model.captain);
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, _List_fromArray([renderedNpc]));
  });
  var $author$project$Scenes$Transition2$Room$Model$renderTextbox = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      _List_fromArray([
        (function (tb) {
          return !tb.width
            ? $linsyking$elm_canvas$Canvas$empty
            : A5(
                $author$project$Lib$Render$Sprite$renderSprite,
                env.globalData,
                _List_Nil,
                _Utils_Tuple2(tb.center.a - ((tb.width / 2) | 0) - model.camera.x, tb.center.b - ((tb.height / 2) | 0) - model.camera.y),
                _Utils_Tuple2(tb.width, tb.height),
                tb.sprite
              );
        })(model.textbox),
      ])
    );
  });
  var $author$project$Scenes$Transition2$Room$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Transition2$Room$Model$renderMap, env, model),
        A2($author$project$Scenes$Transition2$Room$Model$renderNpc, env, model),
        A2($author$project$Scenes$Transition2$Room$Model$renderMainCharacter, env, model),
        A2($author$project$Scenes$Transition2$Room$Model$renderTextbox, env, model),
        A2($author$project$Scenes$Transition2$Room$Model$renderDialog, env, model),
        A2($author$project$Scenes$Transition2$Room$Model$renderKeyInstruction, env, model),
        A2($author$project$Scenes$Transition2$Room$Model$renderBlack, env, model),
      ])
    );
  });
  var $author$project$Scenes$Transition2$Room$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Transition2$Room$Model$initModel, env, i),
      name: "Room",
      update: $author$project$Scenes$Transition2$Room$Model$updateModel,
      view: $author$project$Scenes$Transition2$Room$Model$viewModel,
    };
  });
  var $author$project$Scenes$Transition2$SceneInit$nullTransition2Init = {};
  var $author$project$Scenes$Transition2$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "Transition2InitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Transition2$SceneInit$nullTransition2Init;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Transition2$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Transition2$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Transition2$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Transition2$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Transition2$Room$Global$getLayerT(
          A2(
            $author$project$Scenes$Transition2$Room$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Transition2$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Transition2$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition2$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Transition2$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Transition2$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Transition2$Export$scene = {
    init: $author$project$Scenes$Transition2$Common$initModel,
    update: $author$project$Scenes$Transition2$Model$updateModel,
    view: $author$project$Scenes$Transition2$Model$viewModel,
  };
  var $author$project$Scenes$Transition3$LayerSettings$BackgroundData = function (a) {
    return { $: "BackgroundData", a: a };
  };
  var $author$project$Scenes$Transition3$Background$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Transition3$LayerSettings$BackgroundData(data);
  };
  var $author$project$Scenes$Transition3$Background$Common$nullModel = { bgIndex: 0 };
  var $author$project$Scenes$Transition3$Background$Global$ldtToData = function (ldt) {
    if (ldt.$ === "BackgroundData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition3$Background$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition3$Background$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Transition3$Background$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Transition3$Background$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition3$Background$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Transition3$Background$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Transition3$LayerSettings$RoomData = function (a) {
    return { $: "RoomData", a: a };
  };
  var $author$project$Scenes$Transition3$Room$Global$dataToLDT = function (data) {
    return $author$project$Scenes$Transition3$LayerSettings$RoomData(data);
  };
  var $author$project$Scenes$Transition3$Room$Common$Beginning = { $: "Beginning" };
  var $author$project$Scenes$Transition3$Room$Common$Camera = F4(function (x, y, height, width) {
    return { height: height, width: width, x: x, y: y };
  });
  var $author$project$Scenes$Transition3$Room$Common$Character = F9(function (id, x, y, height, width, state, dir, currentSpriteIndex, dialogIndex) {
    return {
      currentSpriteIndex: currentSpriteIndex,
      dialogIndex: dialogIndex,
      dir: dir,
      height: height,
      id: id,
      state: state,
      width: width,
      x: x,
      y: y,
    };
  });
  var $author$project$Scenes$Transition3$Room$Common$Map = F3(function (height, width, sprite) {
    return { height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Transition3$Room$Common$Right = { $: "Right" };
  var $author$project$Scenes$Transition3$Room$Common$Still = { $: "Still" };
  var $author$project$Scenes$Transition3$Room$Common$Textbox = F4(function (center, height, width, sprite) {
    return { center: center, height: height, sprite: sprite, width: width };
  });
  var $author$project$Scenes$Transition3$Room$Common$nullModel = (function () {
    var tb = A4($author$project$Scenes$Transition3$Room$Common$Textbox, _Utils_Tuple2(0, 0), 0, 0, "");
    var mc = A9(
      $author$project$Scenes$Transition3$Room$Common$Character,
      0,
      0,
      0,
      0,
      0,
      $author$project$Scenes$Transition3$Room$Common$Still,
      $author$project$Scenes$Transition3$Room$Common$Right,
      0,
      0
    );
    var map = A3($author$project$Scenes$Transition3$Room$Common$Map, 0, 0, "");
    var camera = A4($author$project$Scenes$Transition3$Room$Common$Camera, 0, 0, 0, 0);
    return {
      alpha: 1,
      camera: camera,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      npc: A2($Chadtech$elm_vector$Vector2$from2, mc, mc),
      prevKey: 0,
      sceneState: $author$project$Scenes$Transition3$Room$Common$Beginning,
      textbox: A2($Chadtech$elm_vector$Vector2$from2, tb, tb),
    };
  })();
  var $author$project$Scenes$Transition3$Room$Global$ldtToData = function (ldt) {
    if (ldt.$ === "RoomData") {
      var x = ldt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition3$Room$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition3$Room$Global$getLayerT = function (layer) {
    var view = F2(function (env, ldt) {
      return A2(layer.view, env, $author$project$Scenes$Transition3$Room$Global$ldtToData(ldt));
    });
    var update = F3(function (env, lm, ldt) {
      var _v0 = A3(layer.update, env, lm, $author$project$Scenes$Transition3$Room$Global$ldtToData(ldt));
      var rldt = _v0.a;
      var newmsg = _v0.b;
      var newenv = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition3$Room$Global$dataToLDT(rldt), newmsg, newenv);
    });
    return A4(
      $cometia0$messenger_core$Messenger$GeneralModel$GeneralModel,
      layer.name,
      $author$project$Scenes$Transition3$Room$Global$dataToLDT(layer.data),
      update,
      view
    );
  };
  var $author$project$Scenes$Transition3$LayerBase$nullCommonData = (function () {
    var mw = 1920 * 2;
    var mh = 1080;
    var mcw = 96;
    var mcs = 7;
    var mch = 198;
    var camw = 1920;
    var camh = 1080;
    return { camHeight: camh, camWidth: camw, mapHeight: mh, mapWidth: mw, mcHeight: mch, mcSpeed: mcs, mcWidth: mcw };
  })();
  var $author$project$Scenes$Transition3$SceneInit$initCommonData = F2(function (_v0, _v1) {
    return $author$project$Scenes$Transition3$LayerBase$nullCommonData;
  });
  var $author$project$Scenes$Transition3$Background$Model$initModel = F2(function (_v0, _v1) {
    return { bgIndex: 0 };
  });
  var $author$project$Scenes$Transition3$Background$Model$updateBg = function (_v0) {
    var model = _v0.a;
    var env = _v0.b;
    return _Utils_Tuple2(_Utils_update(model, { bgIndex: model.bgIndex + 0.05 }), env);
  };
  var $author$project$Scenes$Transition3$Background$Model$update = F2(function (env, model) {
    return $author$project$Scenes$Transition3$Background$Model$updateBg(_Utils_Tuple2(model, env));
  });
  var $author$project$Scenes$Transition3$Background$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    if (_v1.$ === "Tick") {
      var _v2 = A2($author$project$Scenes$Transition3$Background$Model$update, env, model);
      var newModel = _v2.a;
      var newEnv = _v2.b;
      return _Utils_Tuple3(newModel, _List_Nil, newEnv);
    } else {
      return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition3$Background$Model$renderBg = F2(function (env, _v0) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2(0, 0),
      _Utils_Tuple2(0, 1080),
      "Transition3_bg"
    );
  });
  var $author$project$Scenes$Transition3$Background$Model$renderPlanet = F2(function (env, model) {
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_Nil,
      _Utils_Tuple2(200, 180),
      _Utils_Tuple2(0, 600),
      "planet_" +
        A3(
          $elm$core$String$padLeft,
          3,
          _Utils_chr("0"),
          $elm$core$Debug$toString(A2($elm$core$Basics$modBy, 25, $elm$core$Basics$floor(model.bgIndex)))
        )
    );
  });
  var $author$project$Scenes$Transition3$Background$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Transition3$Background$Model$renderBg, env, model),
        A2($author$project$Scenes$Transition3$Background$Model$renderPlanet, env, model),
      ])
    );
  });
  var $author$project$Scenes$Transition3$Background$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Transition3$Background$Model$initModel, env, i),
      name: "Background",
      update: $author$project$Scenes$Transition3$Background$Model$updateModel,
      view: $author$project$Scenes$Transition3$Background$Model$viewModel,
    };
  });
  var $author$project$Scenes$Transition3$Room$Common$Left = { $: "Left" };
  var $author$project$Scenes$Transition3$Room$Model$initModel = F2(function (env, _v0) {
    var textbox2 = A4($author$project$Scenes$Transition3$Room$Common$Textbox, _Utils_Tuple2(2300, 420), 450, 0, "textbox");
    var textbox1 = A4($author$project$Scenes$Transition3$Room$Common$Textbox, _Utils_Tuple2(550, 408), 450, 0, "textbox");
    var investigator = A9(
      $author$project$Scenes$Transition3$Room$Common$Character,
      1,
      550,
      668,
      222,
      96,
      $author$project$Scenes$Transition3$Room$Common$Still,
      $author$project$Scenes$Transition3$Room$Common$Left,
      0,
      0
    );
    var d = env.commonData;
    var map = A3($author$project$Scenes$Transition3$Room$Common$Map, d.mapHeight, d.mapWidth, "room");
    var mc = A9(
      $author$project$Scenes$Transition3$Room$Common$Character,
      0,
      2550,
      680,
      d.mcHeight,
      d.mcWidth,
      $author$project$Scenes$Transition3$Room$Common$Still,
      $author$project$Scenes$Transition3$Room$Common$Right,
      0,
      0
    );
    var captain = A9(
      $author$project$Scenes$Transition3$Room$Common$Character,
      2,
      2300,
      673,
      210,
      132,
      $author$project$Scenes$Transition3$Room$Common$Still,
      $author$project$Scenes$Transition3$Room$Common$Right,
      0,
      0
    );
    var camera = (function () {
      var cx = 2550 - ((d.camWidth / 2) | 0);
      return A4($author$project$Scenes$Transition3$Room$Common$Camera, cx, 0, d.camHeight, d.camWidth);
    })();
    return {
      alpha: 1,
      camera: camera,
      keyList: _List_Nil,
      map: map,
      mc: mc,
      npc: A2($Chadtech$elm_vector$Vector2$from2, investigator, captain),
      prevKey: 0,
      sceneState: $author$project$Scenes$Transition3$Room$Common$Beginning,
      textbox: A2($Chadtech$elm_vector$Vector2$from2, textbox1, textbox2),
    };
  });
  var $author$project$Scenes$Transition3$Room$Common$Ending = { $: "Ending" };
  var $author$project$Scenes$Transition3$Room$Common$FadeIn = { $: "FadeIn" };
  var $author$project$Scenes$Transition3$Room$Common$FadeOut = { $: "FadeOut" };
  var $author$project$Scenes$Transition3$Room$Model$isFinishedFadeOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha >= 1
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 1, sceneState: $author$project$Scenes$Transition3$Room$Common$Ending }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition3$Room$Model$nextLevel = F2(function (model, _v0) {
    return model.mc.x >= 4000 && !_Utils_eq(model.sceneState, $author$project$Scenes$Transition3$Room$Common$Ending)
      ? _Utils_update(model, { sceneState: $author$project$Scenes$Transition3$Room$Common$FadeOut })
      : model;
  });
  var $author$project$Scenes$Transition3$Room$Model$nextLevelStopSound = F2(function (model, _v0) {
    return model.mc.x >= 4000
      ? _List_fromArray([
          _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerStopSoundMsg("Transition3Bgm")),
        ])
      : _List_Nil;
  });
  var $author$project$Scenes$Transition3$Room$Model$cleanPrevKey = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { prevKey: 0 }));
  };
  var $author$project$Scenes$Transition3$Room$Common$Instruction = { $: "Instruction" };
  var $author$project$Scenes$Transition3$Room$Model$isEnterInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var mc = model.mc;
    var cap = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    return _Utils_cmp(mc.x, cap.x - 300) > 0 &&
      _Utils_cmp(mc.x, cap.x + 300) < 0 &&
      model.prevKey === 67 &&
      !_Utils_eq(model.sceneState, $author$project$Scenes$Transition3$Room$Common$Instruction)
      ? _Utils_Tuple2(env, _Utils_update(model, { prevKey: 0, sceneState: $author$project$Scenes$Transition3$Room$Common$Instruction }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition3$Room$Common$Free = { $: "Free" };
  var $author$project$Scenes$Transition3$Room$Model$isFinishedFadeIn = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return model.alpha <= 0
      ? _Utils_Tuple2(env, _Utils_update(model, { alpha: 0, sceneState: $author$project$Scenes$Transition3$Room$Common$Free }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition3$Room$Config$dialog2 = _List_fromArray([
    "Zapper, well done!",
    "You have defeated all the enemies.",
    "'I' am quite satisfied that ...",
    "...that you accomplished the mission.",
    "Go ahead, Zapper.",
    "Go right, Zapper.",
    "'It' WILL OWN THE WORLD.",
  ]);
  var $author$project$Scenes$Transition3$Room$Model$isFinishedInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var captain = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    if (_Utils_eq(captain.dialogIndex, $elm$core$List$length($author$project$Scenes$Transition3$Room$Config$dialog2))) {
      var cap = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
      var newCap = _Utils_update(cap, { dialogIndex: 0 });
      return _Utils_Tuple2(
        env,
        _Utils_update(model, {
          npc: A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, newCap, model.npc),
          sceneState: $author$project$Scenes$Transition3$Room$Common$Free,
        })
      );
    } else {
      return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Transition3$Room$Config$dialog1 = _List_fromArray([
    "Zapper, ZAPPER! WAKE UP!",
    "Our home planet was ATTACKED.",
    "Only you can operate the DEFENSER.",
    "YOU are the last hope!",
    "Now GO and FIGHT...",
  ]);
  var $author$project$Scenes$Transition3$Room$Model$isFinishedStart = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var investigator = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.npc);
    return _Utils_eq(investigator.dialogIndex, $elm$core$List$length($author$project$Scenes$Transition3$Room$Config$dialog1))
      ? _Utils_Tuple2(env, _Utils_update(model, { sceneState: $author$project$Scenes$Transition3$Room$Common$Free }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition3$Room$Model$updateBlack = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha - 0.015 }));
  };
  var $author$project$Scenes$Transition3$Room$Model$updateBlackOut = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    return _Utils_Tuple2(env, _Utils_update(model, { alpha: model.alpha + 0.005 }));
  };
  var $author$project$Scenes$Transition3$Room$Model$updateCam = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var w = model.camera.width;
    var m = model.map;
    var h = model.camera.height;
    var d = env.commonData;
    var cam = model.camera;
    var c = model.mc;
    var x = c.x - ((w / 2) | 0) <= 1000 ? 1000 : _Utils_cmp(c.x, m.width - ((w / 2) | 0)) > -1 ? m.width - w : c.x - ((w / 2) | 0);
    var y = _Utils_cmp(c.y, (h / 2) | 0) < 0 ? 0 : _Utils_cmp(c.y, m.height - ((h / 2) | 0)) > 0 ? m.height - h : c.y - ((h / 2) | 0);
    return _Utils_Tuple2(
      env,
      _Utils_update(model, {
        camera: _Utils_update(cam, { height: d.camHeight, width: d.camWidth, x: x, y: y }),
      })
    );
  };
  var $author$project$Scenes$Transition3$Room$Model$updateInstruction = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var npc = model.npc;
    var captain = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    var newNpc = A3(
      $Chadtech$elm_vector$Vector2$set,
      $Chadtech$elm_vector$Vector2$Index1,
      _Utils_update(captain, { dialogIndex: captain.dialogIndex + 1 }),
      npc
    );
    return model.prevKey === 67 && !A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_Tuple2(env, _Utils_update(model, { npc: newNpc, prevKey: 0 }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition3$Room$Common$Walking = { $: "Walking" };
  var $author$project$Scenes$Transition3$Room$Model$updateMainCharacter = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var keys = model.keyList;
    var d = env.commonData;
    var c = model.mc;
    return A2($elm$core$List$member, 39, keys) && A2($elm$core$List$member, 37, keys)
      ? _Utils_Tuple2(
          env,
          _Utils_update(model, {
            mc: _Utils_update(c, { currentSpriteIndex: 0, state: $author$project$Scenes$Transition3$Room$Common$Still }),
          })
        )
      : A2($elm$core$List$member, 39, keys)
        ? _Utils_Tuple2(
            env,
            _Utils_update(model, {
              mc: _Utils_update(c, {
                currentSpriteIndex: c.currentSpriteIndex + 0.12,
                dir: $author$project$Scenes$Transition3$Room$Common$Right,
                state: $author$project$Scenes$Transition3$Room$Common$Walking,
                x: c.x + d.mcSpeed,
              }),
            })
          )
        : A2($elm$core$List$member, 37, keys) && _Utils_cmp(c.x - 1000, (d.mcWidth / 2) | 0) > 0
          ? _Utils_Tuple2(
              env,
              _Utils_update(model, {
                mc: _Utils_update(c, {
                  currentSpriteIndex: c.currentSpriteIndex + 0.12,
                  dir: $author$project$Scenes$Transition3$Room$Common$Left,
                  state: $author$project$Scenes$Transition3$Room$Common$Walking,
                  x: c.x - d.mcSpeed,
                }),
              })
            )
          : _Utils_Tuple2(
              env,
              _Utils_update(model, {
                mc: _Utils_update(c, { currentSpriteIndex: 0, state: $author$project$Scenes$Transition3$Room$Common$Still }),
              })
            );
  };
  var $author$project$Scenes$Transition3$Room$Model$updateNpc = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var mcx = model.mc.x;
    var newNpc = A2(
      $Chadtech$elm_vector$Vector2$map,
      function (c) {
        return _Utils_cmp(c.x, mcx) > 0
          ? _Utils_update(c, { dir: $author$project$Scenes$Transition3$Room$Common$Left })
          : _Utils_update(c, { dir: $author$project$Scenes$Transition3$Room$Common$Right });
      },
      model.npc
    );
    return _Utils_Tuple2(env, _Utils_update(model, { npc: newNpc }));
  };
  var $author$project$Scenes$Transition3$Room$Model$updateStart = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var npc = model.npc;
    var investigator = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.npc);
    var newNpc = A3(
      $Chadtech$elm_vector$Vector2$set,
      $Chadtech$elm_vector$Vector2$Index0,
      _Utils_update(investigator, { dialogIndex: investigator.dialogIndex + 1 }),
      npc
    );
    return model.prevKey === 67 && !A2($elm$core$List$member, 67, model.keyList)
      ? _Utils_Tuple2(env, _Utils_update(model, { npc: newNpc, prevKey: 0 }))
      : _Utils_Tuple2(env, model);
  };
  var $author$project$Scenes$Transition3$Room$Model$updateTextbox = function (_v0) {
    var env = _v0.a;
    var model = _v0.b;
    var _v1 = model.sceneState;
    switch (_v1.$) {
      case "Start":
        var tb = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox);
        var newtb =
          tb.width <= 598
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb, { width: tb.width + 40 }), model.textbox)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb, { width: 600 }), model.textbox);
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      case "Free":
        var tb2 = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox);
        var tb1 = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox);
        var newtb1 =
          tb1.width > 0
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb1, { width: tb1.width - 40 }), model.textbox)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index0, _Utils_update(tb1, { width: 0 }), model.textbox);
        var newtb2 =
          tb2.width > 0
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb2, { width: tb2.width - 40 }), newtb1)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb2, { width: 0 }), newtb1);
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb2 }));
      case "Instruction":
        var tb = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox);
        var newtb =
          tb.width <= 598
            ? A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb, { width: tb.width + 40 }), model.textbox)
            : A3($Chadtech$elm_vector$Vector2$set, $Chadtech$elm_vector$Vector2$Index1, _Utils_update(tb, { width: 600 }), model.textbox);
        return _Utils_Tuple2(env, _Utils_update(model, { textbox: newtb }));
      default:
        return _Utils_Tuple2(env, model);
    }
  };
  var $author$project$Scenes$Transition3$Room$Model$update = F2(function (env, model) {
    var _v0 = model.sceneState;
    switch (_v0.$) {
      case "FadeIn":
        return $author$project$Scenes$Transition3$Room$Model$isFinishedFadeIn(
          $author$project$Scenes$Transition3$Room$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      case "FadeOut":
        return $author$project$Scenes$Transition3$Room$Model$isFinishedFadeOut(
          $author$project$Scenes$Transition3$Room$Model$updateBlackOut(_Utils_Tuple2(env, model))
        );
      case "Beginning":
        return $author$project$Scenes$Transition3$Room$Model$isFinishedFadeIn(
          $author$project$Scenes$Transition3$Room$Model$updateBlack(_Utils_Tuple2(env, model))
        );
      case "Start":
        return $author$project$Scenes$Transition3$Room$Model$updateCam(
          $author$project$Scenes$Transition3$Room$Model$updateTextbox(
            $author$project$Scenes$Transition3$Room$Model$isFinishedStart(
              $author$project$Scenes$Transition3$Room$Model$updateStart(_Utils_Tuple2(env, model))
            )
          )
        );
      case "Instruction":
        return $author$project$Scenes$Transition3$Room$Model$updateCam(
          $author$project$Scenes$Transition3$Room$Model$updateTextbox(
            $author$project$Scenes$Transition3$Room$Model$isFinishedInstruction(
              $author$project$Scenes$Transition3$Room$Model$updateInstruction(_Utils_Tuple2(env, model))
            )
          )
        );
      case "Free":
        return $author$project$Scenes$Transition3$Room$Model$updateCam(
          $author$project$Scenes$Transition3$Room$Model$updateTextbox(
            $author$project$Scenes$Transition3$Room$Model$updateNpc(
              $author$project$Scenes$Transition3$Room$Model$updateMainCharacter(
                $author$project$Scenes$Transition3$Room$Model$cleanPrevKey(
                  $author$project$Scenes$Transition3$Room$Model$isEnterInstruction(_Utils_Tuple2(env, model))
                )
              )
            )
          )
        );
      default:
        return _Utils_Tuple2(env, model);
    }
  });
  var $author$project$Scenes$Transition3$Room$Model$updateModel = F3(function (env, _v0, model) {
    var _v1 = env.msg;
    switch (_v1.$) {
      case "KeyDown":
        var key = _v1.a;
        var newKeyList = $elm_community$list_extra$List$Extra$unique(A2($elm$core$List$cons, key, model.keyList));
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList }), _List_Nil, env);
      case "KeyUp":
        var key = _v1.a;
        var newKeyList = A2($elm_community$list_extra$List$Extra$remove, key, model.keyList);
        return _Utils_Tuple3(_Utils_update(model, { keyList: newKeyList, prevKey: key }), _List_Nil, env);
      case "Tick":
        if (_Utils_eq(model.sceneState, $author$project$Scenes$Transition3$Room$Common$Beginning)) {
          return _Utils_Tuple3(
            _Utils_update(model, { sceneState: $author$project$Scenes$Transition3$Room$Common$FadeIn }),
            _List_fromArray([
              _Utils_Tuple2(
                $author$project$Lib$Layer$Base$LayerParentScene,
                A3(
                  $author$project$Lib$Layer$Base$LayerSoundMsg,
                  "Transition3Bgm",
                  $author$project$Lib$Resources$Base$getResourcePath("audio/main.ogg"),
                  $author$project$Lib$Audio$Base$ALoop
                )
              ),
            ]),
            env
          );
        } else {
          if (_Utils_eq(model.sceneState, $author$project$Scenes$Transition3$Room$Common$Ending)) {
            return _Utils_Tuple3(
              model,
              _List_fromArray([
                _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerChangeSceneMsg("LogoEnd")),
              ]),
              env
            );
          } else {
            if (_Utils_eq(model.sceneState, $author$project$Scenes$Transition3$Room$Common$FadeOut)) {
              var _v2 = $author$project$Scenes$Transition3$Room$Model$isFinishedFadeOut(
                $author$project$Scenes$Transition3$Room$Model$updateBlackOut(_Utils_Tuple2(env, model))
              );
              var newEnv = _v2.a;
              var newModel = _v2.b;
              return _Utils_Tuple3(
                newModel,
                _List_fromArray([
                  _Utils_Tuple2($author$project$Lib$Layer$Base$LayerParentScene, $author$project$Lib$Layer$Base$LayerStopSoundMsg("Transition3Bgm")),
                ]),
                newEnv
              );
            } else {
              var _v3 = A2($author$project$Scenes$Transition3$Room$Model$update, env, model);
              var newEnv = _v3.a;
              var newModel = _v3.b;
              return _Utils_Tuple3(
                A2($author$project$Scenes$Transition3$Room$Model$nextLevel, newModel, env),
                A2($author$project$Scenes$Transition3$Room$Model$nextLevelStopSound, newModel, newEnv),
                newEnv
              );
            }
          }
        }
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition3$Room$Model$renderBlack = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill(A4($avh4$elm_color$Color$rgba, 0, 0, 0, model.alpha))]),
      _List_fromArray([A3($author$project$Lib$Render$Shape$rect, env.globalData, _Utils_Tuple2(0, 0), _Utils_Tuple2(1920, 1080))])
    );
  });
  var $author$project$Scenes$Transition3$Room$Model$renderDialog = F2(function (env, model) {
    var i = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.npc);
    var iDialog = i.dialogIndex;
    var c = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    var cDialog = c.dialogIndex;
    var rendered = (function () {
      var _v0 = model.sceneState;
      switch (_v0.$) {
        case "Start":
          var tb1Y = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox).center.b - model.camera.y;
          var tb1X = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index0, model.textbox).center.a - model.camera.x;
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              45,
              "INVESTIGATOR",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(tb1X - 265, tb1Y - 155)
            ),
            A7(
              $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth,
              env.globalData,
              47,
              (function () {
                var _v1 = A2($elm_community$list_extra$List$Extra$getAt, iDialog, $author$project$Scenes$Transition3$Room$Config$dialog1);
                if (_v1.$ === "Just") {
                  var d = _v1.a;
                  return d;
                } else {
                  return "";
                }
              })(),
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$black,
              _Utils_Tuple2(tb1X, tb1Y),
              550
            ),
          ]);
        case "Instruction":
          var tb2Y = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox).center.b - model.camera.y;
          var tb2X = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.textbox).center.a - model.camera.x;
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              45,
              "CAPTAIN",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(tb2X - 265, tb2Y - 155)
            ),
            A7(
              $author$project$Lib$Render$Text$renderTextWithColorCenterMaxWidth,
              env.globalData,
              47,
              (function () {
                var _v2 = A2($elm_community$list_extra$List$Extra$getAt, cDialog, $author$project$Scenes$Transition3$Room$Config$dialog2);
                if (_v2.$ === "Just") {
                  var d = _v2.a;
                  return d;
                } else {
                  return "";
                }
              })(),
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$black,
              _Utils_Tuple2(tb2X, tb2Y),
              550
            ),
          ]);
        default:
          return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Transition3$Room$Model$renderKeyInstruction = F2(function (env, model) {
    var cam = model.camera;
    var c = A2($Chadtech$elm_vector$Vector2$get, $Chadtech$elm_vector$Vector2$Index1, model.npc);
    var rendered = (function () {
      var _v0 = model.sceneState;
      switch (_v0.$) {
        case "Start":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "PRESS       TO CONTINUE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(205, 934), _Utils_Tuple2(96, 96), "key_c"),
          ]);
        case "Free":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "            TO MOVE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5(
              $author$project$Lib$Render$Sprite$renderSprite,
              env.globalData,
              _List_Nil,
              _Utils_Tuple2(50, 934),
              _Utils_Tuple2(96, 96),
              "key_leftarrow"
            ),
            A5(
              $author$project$Lib$Render$Sprite$renderSprite,
              env.globalData,
              _List_Nil,
              _Utils_Tuple2(170, 934),
              _Utils_Tuple2(96, 96),
              "key_rightarrow"
            ),
            _Utils_cmp(model.mc.x, c.x - 300) > -1 && _Utils_cmp(model.mc.x, c.x + 300) < 1
              ? A5(
                  $author$project$Lib$Render$Sprite$renderSprite,
                  env.globalData,
                  _List_Nil,
                  _Utils_Tuple2(c.x - 55 - cam.x, c.y - 190 - cam.y),
                  _Utils_Tuple2(96, 96),
                  "key_c"
                )
              : $linsyking$elm_canvas$Canvas$empty,
          ]);
        case "Instruction":
          return _List_fromArray([
            A6(
              $author$project$Lib$Render$Text$renderTextWithColor,
              env.globalData,
              55,
              "PRESS       TO CONTINUE",
              "disposabledroid_bbregular",
              $avh4$elm_color$Color$white,
              _Utils_Tuple2(50, 960)
            ),
            A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(205, 934), _Utils_Tuple2(96, 96), "key_c"),
          ]);
        default:
          return _List_fromArray([$linsyking$elm_canvas$Canvas$empty]);
      }
    })();
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, rendered);
  });
  var $author$project$Scenes$Transition3$Room$Model$renderMainCharacter = F2(function (env, model) {
    var cam = model.camera;
    var c = model.mc;
    return A5(
      $author$project$Lib$Render$Sprite$renderSprite,
      env.globalData,
      _List_fromArray([
        $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
          _List_fromArray([
            (function () {
              var _v0 = c.dir;
              if (_v0.$ === "Left") {
                return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 48, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
              } else {
                return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
              }
            })(),
          ])
        ),
      ]),
      _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
      _Utils_Tuple2(c.width, c.height),
      (function () {
        var _v1 = c.state;
        switch (_v1.$) {
          case "Still":
            return "mainCharacter_000";
          case "Walking":
            return (
              "mainCharacter_" +
              A3(
                $elm$core$String$padLeft,
                3,
                _Utils_chr("0"),
                $elm$core$Debug$toString(1 + A2($elm$core$Basics$modBy, 6, $elm$core$Basics$floor(c.currentSpriteIndex)))
              )
            );
          default:
            return "";
        }
      })()
    );
  });
  var $author$project$Scenes$Transition3$Room$Model$renderMap = F2(function (env, model) {
    var y = -model.camera.y;
    var x = -model.camera.x;
    var w = model.map.width;
    var s = model.map.sprite;
    var h = model.map.height;
    return A5($author$project$Lib$Render$Sprite$renderSprite, env.globalData, _List_Nil, _Utils_Tuple2(x, y), _Utils_Tuple2(w, h), s);
  });
  var $author$project$Scenes$Transition3$Room$Model$renderNpc = F2(function (env, model) {
    var cam = model.camera;
    var renderedNpc = A2(
      $Chadtech$elm_vector$Vector2$map,
      function (c) {
        return A5(
          $author$project$Lib$Render$Sprite$renderSprite,
          env.globalData,
          _List_fromArray([
            $linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
              _List_fromArray([
                (function () {
                  var _v0 = c.dir;
                  if (_v0.$ === "Left") {
                    return $linsyking$elm_canvas$Canvas$Settings$Advanced$ApplyMatrix({ dx: 60, dy: 0, m11: -1, m12: 0, m21: 0, m22: 1 });
                  } else {
                    return A2($linsyking$elm_canvas$Canvas$Settings$Advanced$Scale, 1, 1);
                  }
                })(),
              ])
            ),
          ]),
          _Utils_Tuple2(c.x - ((c.width / 2) | 0) - cam.x, c.y - ((c.height / 2) | 0) - cam.y),
          _Utils_Tuple2(c.width, c.height),
          (function () {
            var _v1 = c.id;
            switch (_v1) {
              case 1:
                return "investigator";
              case 2:
                return "captain";
              default:
                return "";
            }
          })()
        );
      },
      model.npc
    );
    return A2($linsyking$elm_canvas$Canvas$group, _List_Nil, $Chadtech$elm_vector$Vector2$toList(renderedNpc));
  });
  var $author$project$Scenes$Transition3$Room$Model$renderTextbox = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_Nil,
      $Chadtech$elm_vector$Vector2$toList(
        A2(
          $Chadtech$elm_vector$Vector2$map,
          function (tb) {
            return !tb.width
              ? $linsyking$elm_canvas$Canvas$empty
              : A5(
                  $author$project$Lib$Render$Sprite$renderSprite,
                  env.globalData,
                  _List_Nil,
                  _Utils_Tuple2(tb.center.a - ((tb.width / 2) | 0) - model.camera.x, tb.center.b - ((tb.height / 2) | 0) - model.camera.y),
                  _Utils_Tuple2(tb.width, tb.height),
                  tb.sprite
                );
          },
          model.textbox
        )
      )
    );
  });
  var $author$project$Scenes$Transition3$Room$Model$viewModel = F2(function (env, model) {
    return A2(
      $linsyking$elm_canvas$Canvas$group,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$Advanced$imageSmoothing(false)]),
      _List_fromArray([
        A2($author$project$Scenes$Transition3$Room$Model$renderMap, env, model),
        A2($author$project$Scenes$Transition3$Room$Model$renderNpc, env, model),
        A2($author$project$Scenes$Transition3$Room$Model$renderMainCharacter, env, model),
        A2($author$project$Scenes$Transition3$Room$Model$renderTextbox, env, model),
        A2($author$project$Scenes$Transition3$Room$Model$renderDialog, env, model),
        A2($author$project$Scenes$Transition3$Room$Model$renderKeyInstruction, env, model),
        A2($author$project$Scenes$Transition3$Room$Model$renderBlack, env, model),
      ])
    );
  });
  var $author$project$Scenes$Transition3$Room$Export$initLayer = F2(function (env, i) {
    return {
      data: A2($author$project$Scenes$Transition3$Room$Model$initModel, env, i),
      name: "Room",
      update: $author$project$Scenes$Transition3$Room$Model$updateModel,
      view: $author$project$Scenes$Transition3$Room$Model$viewModel,
    };
  });
  var $author$project$Scenes$Transition3$SceneInit$nullTransition3Init = {};
  var $author$project$Scenes$Transition3$Common$initModel = F2(function (env, init) {
    var layerInitData = (function () {
      if (init.$ === "Transition3InitData") {
        var x = init.a;
        return x;
      } else {
        return $author$project$Scenes$Transition3$SceneInit$nullTransition3Init;
      }
    })();
    return {
      commonData: A2($author$project$Scenes$Transition3$SceneInit$initCommonData, env, layerInitData),
      layers: _List_fromArray([
        $author$project$Scenes$Transition3$Background$Global$getLayerT(
          A2(
            $author$project$Scenes$Transition3$Background$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Transition3$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
        $author$project$Scenes$Transition3$Room$Global$getLayerT(
          A2(
            $author$project$Scenes$Transition3$Room$Export$initLayer,
            A2($author$project$Lib$Env$Env$addCommonData, $author$project$Scenes$Transition3$LayerBase$nullCommonData, env),
            layerInitData
          )
        ),
      ]),
    };
  });
  var $author$project$Scenes$Transition3$Model$handleLayerMsg = F3(function (env, lmsg, model) {
    switch (lmsg.$) {
      case "LayerChangeSceneMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(
          model,
          _List_fromArray([$author$project$Lib$Scene$Base$SOMChangeScene(_Utils_Tuple2($author$project$Lib$Scene$Base$NullSceneInitData, name))]),
          env
        );
      case "LayerSoundMsg":
        var name = lmsg.a;
        var path = lmsg.b;
        var opt = lmsg.c;
        return _Utils_Tuple3(model, _List_fromArray([A3($author$project$Lib$Scene$Base$SOMPlayAudio, name, path, opt)]), env);
      case "LayerStopSoundMsg":
        var name = lmsg.a;
        return _Utils_Tuple3(model, _List_fromArray([$author$project$Lib$Scene$Base$SOMStopAudio(name)]), env);
      default:
        return _Utils_Tuple3(model, _List_Nil, env);
    }
  });
  var $author$project$Scenes$Transition3$Model$updateModel = F2(function (env, model) {
    var _v0 = A2(
      $author$project$Lib$Layer$LayerHandler$updateLayer,
      A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env),
      model.layers
    );
    var newdata = _v0.a;
    var msgs = _v0.b;
    var newenv = _v0.c;
    var nmodel = _Utils_update(model, { commonData: newenv.commonData, layers: newdata });
    var _v1 = A3(
      $elm$core$List$foldl,
      F2(function (x, _v2) {
        var y = _v2.a;
        var cgd = _v2.c;
        return A3($author$project$Scenes$Transition3$Model$handleLayerMsg, cgd, x, y);
      }),
      _Utils_Tuple3(nmodel, _List_Nil, newenv),
      msgs
    );
    var newmodel = _v1.a;
    var newsow = _v1.b;
    var newgd2 = _v1.c;
    return _Utils_Tuple3(newmodel, newsow, $author$project$Lib$Env$Env$noCommonData(newgd2));
  });
  var $author$project$Scenes$Transition3$Model$viewModel = F2(function (env, model) {
    return A2($author$project$Lib$Layer$LayerHandler$viewLayer, A2($author$project$Lib$Env$Env$addCommonData, model.commonData, env), model.layers);
  });
  var $author$project$Scenes$Transition3$Export$scene = {
    init: $author$project$Scenes$Transition3$Common$initModel,
    update: $author$project$Scenes$Transition3$Model$updateModel,
    view: $author$project$Scenes$Transition3$Model$viewModel,
  };
  var $author$project$Scenes$SceneSettings$HomeDataT = function (a) {
    return { $: "HomeDataT", a: a };
  };
  var $author$project$Scenes$Home$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$HomeDataT(d);
  };
  var $author$project$Scenes$Home$Common$nullModel = { commonData: $author$project$Scenes$Home$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Home$Global$sdtToData = function (dt) {
    if (dt.$ === "HomeDataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Home$Common$nullModel;
    }
  };
  var $author$project$Scenes$Home$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Home$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Home$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Home$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Home$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$Level1DataT = function (a) {
    return { $: "Level1DataT", a: a };
  };
  var $author$project$Scenes$Level1$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$Level1DataT(d);
  };
  var $author$project$Scenes$Level1$Common$nullModel = { commonData: $author$project$Scenes$Level1$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Level1$Global$sdtToData = function (dt) {
    if (dt.$ === "Level1DataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Level1$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level1$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Level1$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Level1$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level1$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Level1$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$Level2DataT = function (a) {
    return { $: "Level2DataT", a: a };
  };
  var $author$project$Scenes$Level2$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$Level2DataT(d);
  };
  var $author$project$Scenes$Level2$Common$nullModel = { commonData: $author$project$Scenes$Level2$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Level2$Global$sdtToData = function (dt) {
    if (dt.$ === "Level2DataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Level2$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level2$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Level2$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Level2$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level2$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Level2$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$Level3DataT = function (a) {
    return { $: "Level3DataT", a: a };
  };
  var $author$project$Scenes$Level3$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$Level3DataT(d);
  };
  var $author$project$Scenes$Level3$Common$nullModel = { commonData: $author$project$Scenes$Level3$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Level3$Global$sdtToData = function (dt) {
    if (dt.$ === "Level3DataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Level3$Common$nullModel;
    }
  };
  var $author$project$Scenes$Level3$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Level3$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Level3$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Level3$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Level3$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$LogoDataT = function (a) {
    return { $: "LogoDataT", a: a };
  };
  var $author$project$Scenes$Logo$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$LogoDataT(d);
  };
  var $author$project$Scenes$Logo$Common$nullModel = { commonData: $author$project$Scenes$Logo$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Logo$Global$sdtToData = function (dt) {
    if (dt.$ === "LogoDataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Logo$Common$nullModel;
    }
  };
  var $author$project$Scenes$Logo$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Logo$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Logo$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Logo$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Logo$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$LogoEndDataT = function (a) {
    return { $: "LogoEndDataT", a: a };
  };
  var $author$project$Scenes$LogoEnd$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$LogoEndDataT(d);
  };
  var $author$project$Scenes$LogoEnd$Common$nullModel = { commonData: $author$project$Scenes$LogoEnd$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$LogoEnd$Global$sdtToData = function (dt) {
    if (dt.$ === "LogoEndDataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$LogoEnd$Common$nullModel;
    }
  };
  var $author$project$Scenes$LogoEnd$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$LogoEnd$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$LogoEnd$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$LogoEnd$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$LogoEnd$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$RulesDataT = function (a) {
    return { $: "RulesDataT", a: a };
  };
  var $author$project$Scenes$Rules$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$RulesDataT(d);
  };
  var $author$project$Scenes$Rules$Common$nullModel = { commonData: $author$project$Scenes$Rules$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Rules$Global$sdtToData = function (dt) {
    if (dt.$ === "RulesDataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Rules$Common$nullModel;
    }
  };
  var $author$project$Scenes$Rules$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Rules$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Rules$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Rules$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Rules$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$StoryDataT = function (a) {
    return { $: "StoryDataT", a: a };
  };
  var $author$project$Scenes$Story$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$StoryDataT(d);
  };
  var $author$project$Scenes$Story$Common$nullModel = { commonData: $author$project$Scenes$Story$LayerBase$nullCommonData, layers: _List_Nil };
  var $author$project$Scenes$Story$Global$sdtToData = function (dt) {
    if (dt.$ === "StoryDataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Story$Common$nullModel;
    }
  };
  var $author$project$Scenes$Story$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Story$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Story$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Story$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Story$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$Transition1DataT = function (a) {
    return { $: "Transition1DataT", a: a };
  };
  var $author$project$Scenes$Transition1$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$Transition1DataT(d);
  };
  var $author$project$Scenes$Transition1$Common$nullModel = {
    commonData: $author$project$Scenes$Transition1$LayerBase$nullCommonData,
    layers: _List_Nil,
  };
  var $author$project$Scenes$Transition1$Global$sdtToData = function (dt) {
    if (dt.$ === "Transition1DataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition1$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition1$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Transition1$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Transition1$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition1$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Transition1$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$Transition2DataT = function (a) {
    return { $: "Transition2DataT", a: a };
  };
  var $author$project$Scenes$Transition2$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$Transition2DataT(d);
  };
  var $author$project$Scenes$Transition2$Common$nullModel = {
    commonData: $author$project$Scenes$Transition2$LayerBase$nullCommonData,
    layers: _List_Nil,
  };
  var $author$project$Scenes$Transition2$Global$sdtToData = function (dt) {
    if (dt.$ === "Transition2DataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition2$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition2$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Transition2$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Transition2$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition2$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Transition2$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$SceneSettings$Transition3DataT = function (a) {
    return { $: "Transition3DataT", a: a };
  };
  var $author$project$Scenes$Transition3$Global$dataToSDT = function (d) {
    return $author$project$Scenes$SceneSettings$Transition3DataT(d);
  };
  var $author$project$Scenes$Transition3$Common$nullModel = {
    commonData: $author$project$Scenes$Transition3$LayerBase$nullCommonData,
    layers: _List_Nil,
  };
  var $author$project$Scenes$Transition3$Global$sdtToData = function (dt) {
    if (dt.$ === "Transition3DataT") {
      var x = dt.a;
      return x;
    } else {
      return $author$project$Scenes$Transition3$Common$nullModel;
    }
  };
  var $author$project$Scenes$Transition3$Global$sceneToST = function (sd) {
    var view = F2(function (env, sdt) {
      return A2(sd.view, env, $author$project$Scenes$Transition3$Global$sdtToData(sdt));
    });
    var update = F2(function (env, sdt) {
      var _v0 = A2(sd.update, env, $author$project$Scenes$Transition3$Global$sdtToData(sdt));
      var newm = _v0.a;
      var som = _v0.b;
      var newgd = _v0.c;
      return _Utils_Tuple3($author$project$Scenes$Transition3$Global$dataToSDT(newm), som, newgd);
    });
    var init = F2(function (t, tm) {
      return $author$project$Scenes$Transition3$Global$dataToSDT(A2(sd.init, t, tm));
    });
    return { init: init, update: update, view: view };
  };
  var $author$project$Scenes$AllScenes$allScenes = _List_fromArray([
    _Utils_Tuple2("Story", $author$project$Scenes$Story$Global$sceneToST($author$project$Scenes$Story$Export$scene)),
    _Utils_Tuple2("Home", $author$project$Scenes$Home$Global$sceneToST($author$project$Scenes$Home$Export$scene)),
    _Utils_Tuple2("Rules", $author$project$Scenes$Rules$Global$sceneToST($author$project$Scenes$Rules$Export$scene)),
    _Utils_Tuple2("Logo", $author$project$Scenes$Logo$Global$sceneToST($author$project$Scenes$Logo$Export$scene)),
    _Utils_Tuple2("LogoEnd", $author$project$Scenes$LogoEnd$Global$sceneToST($author$project$Scenes$LogoEnd$Export$scene)),
    _Utils_Tuple2("Level1", $author$project$Scenes$Level1$Global$sceneToST($author$project$Scenes$Level1$Export$scene)),
    _Utils_Tuple2("Level2", $author$project$Scenes$Level2$Global$sceneToST($author$project$Scenes$Level2$Export$scene)),
    _Utils_Tuple2("Level3", $author$project$Scenes$Level3$Global$sceneToST($author$project$Scenes$Level3$Export$scene)),
    _Utils_Tuple2("Transition1", $author$project$Scenes$Transition1$Global$sceneToST($author$project$Scenes$Transition1$Export$scene)),
    _Utils_Tuple2("Transition2", $author$project$Scenes$Transition2$Global$sceneToST($author$project$Scenes$Transition2$Export$scene)),
    _Utils_Tuple2("Transition3", $author$project$Scenes$Transition3$Global$sceneToST($author$project$Scenes$Transition3$Export$scene)),
  ]);
  var $author$project$Lib$Scene$SceneLoader$getScene = function (i) {
    var scenes = $author$project$Scenes$AllScenes$allScenes;
    var tests = A2(
      $elm$core$List$filter,
      function (_v2) {
        var x = _v2.a;
        return _Utils_eq(x, i);
      },
      scenes
    );
    var head = $elm$core$List$head(tests);
    if (head.$ === "Just") {
      var _v1 = head.a;
      var x = _v1.b;
      return x;
    } else {
      return $author$project$Scenes$SceneSettings$nullSceneT;
    }
  };
  var $author$project$Lib$Scene$SceneLoader$loadScene = F4(function (msg, model, cs, tm) {
    var ls = _Utils_update(model, { currentScene: cs });
    var ld = _Utils_update(ls, {
      currentData: A2(cs.init, { globalData: model.currentGlobalData, msg: msg, t: model.time }, tm),
    });
    return ld;
  });
  var $author$project$Lib$Scene$SceneLoader$loadSceneByName = F4(function (msg, model, i, tm) {
    var sc = $author$project$Lib$Scene$SceneLoader$getScene(i);
    return A4($author$project$Lib$Scene$SceneLoader$loadScene, msg, model, sc, tm);
  });
  var $author$project$Lib$Coordinate$Coordinates$maxHandW = function (_v0) {
    var w = _v0.a;
    var h = _v0.b;
    return _Utils_cmp(w / h, $author$project$Lib$Coordinate$Coordinates$plScale) > 0
      ? _Utils_Tuple2($elm$core$Basics$floor(h * $author$project$Lib$Coordinate$Coordinates$plScale), h)
      : _Utils_Tuple2(w, $elm$core$Basics$floor(w / $author$project$Lib$Coordinate$Coordinates$plScale));
  };
  var $author$project$Main$init = function (flags) {
    var ms = A4(
      $author$project$Lib$Scene$SceneLoader$loadSceneByName,
      $author$project$Base$NullMsg,
      $author$project$Main$initModel,
      $author$project$MainConfig$initScene,
      $author$project$MainConfig$initSceneSettings
    );
    var oldgd = ms.currentGlobalData;
    var ls = $author$project$Lib$LocalStorage$LocalStorage$decodeLSInfo(flags.info);
    var _v0 = $author$project$Lib$Coordinate$Coordinates$maxHandW(_Utils_Tuple2(flags.windowWidth, flags.windowHeight));
    var gw = _v0.a;
    var gh = _v0.b;
    var _v1 = $author$project$Lib$Coordinate$Coordinates$getStartPoint(_Utils_Tuple2(flags.windowWidth, flags.windowHeight));
    var fl = _v1.a;
    var ft = _v1.b;
    var newgd = _Utils_update(oldgd, {
      browserViewPort: _Utils_Tuple2(flags.windowWidth, flags.windowHeight),
      localStorage: ls,
      realHeight: gh,
      realWidth: gw,
      startLeft: fl,
      startTop: ft,
    });
    return _Utils_Tuple3(_Utils_update(ms, { currentGlobalData: newgd }), $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
  };
  var $author$project$Base$KeyDown = function (a) {
    return { $: "KeyDown", a: a };
  };
  var $author$project$Base$KeyUp = function (a) {
    return { $: "KeyUp", a: a };
  };
  var $author$project$Base$MouseMove = function (a) {
    return { $: "MouseMove", a: a };
  };
  var $author$project$Base$NewWindowSize = function (a) {
    return { $: "NewWindowSize", a: a };
  };
  var $author$project$Base$Prompt = F2(function (a, b) {
    return { $: "Prompt", a: a, b: b };
  });
  var $author$project$Base$RealMouseDown = F2(function (a, b) {
    return { $: "RealMouseDown", a: a, b: b };
  });
  var $author$project$Base$RealMouseUp = function (a) {
    return { $: "RealMouseUp", a: a };
  };
  var $author$project$Base$Tick = function (a) {
    return { $: "Tick", a: a };
  };
  var $elm$time$Time$Every = F2(function (a, b) {
    return { $: "Every", a: a, b: b };
  });
  var $elm$time$Time$State = F2(function (taggers, processes) {
    return { processes: processes, taggers: taggers };
  });
  var $elm$time$Time$init = $elm$core$Task$succeed(A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
  var $elm$time$Time$addMySub = F2(function (_v0, state) {
    var interval = _v0.a;
    var tagger = _v0.b;
    var _v1 = A2($elm$core$Dict$get, interval, state);
    if (_v1.$ === "Nothing") {
      return A3($elm$core$Dict$insert, interval, _List_fromArray([tagger]), state);
    } else {
      var taggers = _v1.a;
      return A3($elm$core$Dict$insert, interval, A2($elm$core$List$cons, tagger, taggers), state);
    }
  });
  var $elm$core$Process$kill = _Scheduler_kill;
  var $elm$core$Dict$merge = F6(function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
    var stepState = F3(function (rKey, rValue, _v0) {
      stepState: while (true) {
        var list = _v0.a;
        var result = _v0.b;
        if (!list.b) {
          return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
        } else {
          var _v2 = list.a;
          var lKey = _v2.a;
          var lValue = _v2.b;
          var rest = list.b;
          if (_Utils_cmp(lKey, rKey) < 0) {
            var $temp$rKey = rKey,
              $temp$rValue = rValue,
              $temp$_v0 = _Utils_Tuple2(rest, A3(leftStep, lKey, lValue, result));
            rKey = $temp$rKey;
            rValue = $temp$rValue;
            _v0 = $temp$_v0;
            continue stepState;
          } else {
            if (_Utils_cmp(lKey, rKey) > 0) {
              return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
            } else {
              return _Utils_Tuple2(rest, A4(bothStep, lKey, lValue, rValue, result));
            }
          }
        }
      }
    });
    var _v3 = A3($elm$core$Dict$foldl, stepState, _Utils_Tuple2($elm$core$Dict$toList(leftDict), initialResult), rightDict);
    var leftovers = _v3.a;
    var intermediateResult = _v3.b;
    return A3(
      $elm$core$List$foldl,
      F2(function (_v4, result) {
        var k = _v4.a;
        var v = _v4.b;
        return A3(leftStep, k, v, result);
      }),
      intermediateResult,
      leftovers
    );
  });
  var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
  var $elm$time$Time$Name = function (a) {
    return { $: "Name", a: a };
  };
  var $elm$time$Time$Offset = function (a) {
    return { $: "Offset", a: a };
  };
  var $elm$time$Time$Zone = F2(function (a, b) {
    return { $: "Zone", a: a, b: b };
  });
  var $elm$time$Time$customZone = $elm$time$Time$Zone;
  var $elm$time$Time$setInterval = _Time_setInterval;
  var $elm$core$Process$spawn = _Scheduler_spawn;
  var $elm$time$Time$spawnHelp = F3(function (router, intervals, processes) {
    if (!intervals.b) {
      return $elm$core$Task$succeed(processes);
    } else {
      var interval = intervals.a;
      var rest = intervals.b;
      var spawnTimer = $elm$core$Process$spawn(A2($elm$time$Time$setInterval, interval, A2($elm$core$Platform$sendToSelf, router, interval)));
      var spawnRest = function (id) {
        return A3($elm$time$Time$spawnHelp, router, rest, A3($elm$core$Dict$insert, interval, id, processes));
      };
      return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
    }
  });
  var $elm$time$Time$onEffects = F3(function (router, subs, _v0) {
    var processes = _v0.processes;
    var rightStep = F3(function (_v6, id, _v7) {
      var spawns = _v7.a;
      var existing = _v7.b;
      var kills = _v7.c;
      return _Utils_Tuple3(
        spawns,
        existing,
        A2(
          $elm$core$Task$andThen,
          function (_v5) {
            return kills;
          },
          $elm$core$Process$kill(id)
        )
      );
    });
    var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
    var leftStep = F3(function (interval, taggers, _v4) {
      var spawns = _v4.a;
      var existing = _v4.b;
      var kills = _v4.c;
      return _Utils_Tuple3(A2($elm$core$List$cons, interval, spawns), existing, kills);
    });
    var bothStep = F4(function (interval, taggers, id, _v3) {
      var spawns = _v3.a;
      var existing = _v3.b;
      var kills = _v3.c;
      return _Utils_Tuple3(spawns, A3($elm$core$Dict$insert, interval, id, existing), kills);
    });
    var _v1 = A6(
      $elm$core$Dict$merge,
      leftStep,
      bothStep,
      rightStep,
      newTaggers,
      processes,
      _Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, $elm$core$Task$succeed(_Utils_Tuple0))
    );
    var spawnList = _v1.a;
    var existingDict = _v1.b;
    var killTask = _v1.c;
    return A2(
      $elm$core$Task$andThen,
      function (newProcesses) {
        return $elm$core$Task$succeed(A2($elm$time$Time$State, newTaggers, newProcesses));
      },
      A2(
        $elm$core$Task$andThen,
        function (_v2) {
          return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
        },
        killTask
      )
    );
  });
  var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
  var $elm$time$Time$onSelfMsg = F3(function (router, interval, state) {
    var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
    if (_v0.$ === "Nothing") {
      return $elm$core$Task$succeed(state);
    } else {
      var taggers = _v0.a;
      var tellTaggers = function (time) {
        return $elm$core$Task$sequence(
          A2(
            $elm$core$List$map,
            function (tagger) {
              return A2($elm$core$Platform$sendToApp, router, tagger(time));
            },
            taggers
          )
        );
      };
      return A2(
        $elm$core$Task$andThen,
        function (_v1) {
          return $elm$core$Task$succeed(state);
        },
        A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now)
      );
    }
  });
  var $elm$core$Basics$composeL = F3(function (g, f, x) {
    return g(f(x));
  });
  var $elm$time$Time$subMap = F2(function (f, _v0) {
    var interval = _v0.a;
    var tagger = _v0.b;
    return A2($elm$time$Time$Every, interval, A2($elm$core$Basics$composeL, f, tagger));
  });
  _Platform_effectManagers["Time"] = _Platform_createManager(
    $elm$time$Time$init,
    $elm$time$Time$onEffects,
    $elm$time$Time$onSelfMsg,
    0,
    $elm$time$Time$subMap
  );
  var $elm$time$Time$subscription = _Platform_leaf("Time");
  var $elm$time$Time$every = F2(function (interval, tagger) {
    return $elm$time$Time$subscription(A2($elm$time$Time$Every, interval, tagger));
  });
  var $elm$browser$Browser$Events$Document = { $: "Document" };
  var $elm$browser$Browser$Events$MySub = F3(function (a, b, c) {
    return { $: "MySub", a: a, b: b, c: c };
  });
  var $elm$browser$Browser$Events$State = F2(function (subs, pids) {
    return { pids: pids, subs: subs };
  });
  var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
  var $elm$browser$Browser$Events$nodeToKey = function (node) {
    if (node.$ === "Document") {
      return "d_";
    } else {
      return "w_";
    }
  };
  var $elm$browser$Browser$Events$addKey = function (sub) {
    var node = sub.a;
    var name = sub.b;
    return _Utils_Tuple2(_Utils_ap($elm$browser$Browser$Events$nodeToKey(node), name), sub);
  };
  var $elm$browser$Browser$Events$Event = F2(function (key, event) {
    return { event: event, key: key };
  });
  var $elm$browser$Browser$Events$spawn = F3(function (router, key, _v0) {
    var node = _v0.a;
    var name = _v0.b;
    var actualNode = (function () {
      if (node.$ === "Document") {
        return _Browser_doc;
      } else {
        return _Browser_window;
      }
    })();
    return A2(
      $elm$core$Task$map,
      function (value) {
        return _Utils_Tuple2(key, value);
      },
      A3(_Browser_on, actualNode, name, function (event) {
        return A2($elm$core$Platform$sendToSelf, router, A2($elm$browser$Browser$Events$Event, key, event));
      })
    );
  });
  var $elm$browser$Browser$Events$onEffects = F3(function (router, subs, state) {
    var stepRight = F3(function (key, sub, _v6) {
      var deads = _v6.a;
      var lives = _v6.b;
      var news = _v6.c;
      return _Utils_Tuple3(deads, lives, A2($elm$core$List$cons, A3($elm$browser$Browser$Events$spawn, router, key, sub), news));
    });
    var stepLeft = F3(function (_v4, pid, _v5) {
      var deads = _v5.a;
      var lives = _v5.b;
      var news = _v5.c;
      return _Utils_Tuple3(A2($elm$core$List$cons, pid, deads), lives, news);
    });
    var stepBoth = F4(function (key, pid, _v2, _v3) {
      var deads = _v3.a;
      var lives = _v3.b;
      var news = _v3.c;
      return _Utils_Tuple3(deads, A3($elm$core$Dict$insert, key, pid, lives), news);
    });
    var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
    var _v0 = A6(
      $elm$core$Dict$merge,
      stepLeft,
      stepBoth,
      stepRight,
      state.pids,
      $elm$core$Dict$fromList(newSubs),
      _Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil)
    );
    var deadPids = _v0.a;
    var livePids = _v0.b;
    var makeNewPids = _v0.c;
    return A2(
      $elm$core$Task$andThen,
      function (pids) {
        return $elm$core$Task$succeed(
          A2($elm$browser$Browser$Events$State, newSubs, A2($elm$core$Dict$union, livePids, $elm$core$Dict$fromList(pids)))
        );
      },
      A2(
        $elm$core$Task$andThen,
        function (_v1) {
          return $elm$core$Task$sequence(makeNewPids);
        },
        $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Process$kill, deadPids))
      )
    );
  });
  var $elm$browser$Browser$Events$onSelfMsg = F3(function (router, _v0, state) {
    var key = _v0.key;
    var event = _v0.event;
    var toMessage = function (_v2) {
      var subKey = _v2.a;
      var _v3 = _v2.b;
      var node = _v3.a;
      var name = _v3.b;
      var decoder = _v3.c;
      return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
    };
    var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
    return A2(
      $elm$core$Task$andThen,
      function (_v1) {
        return $elm$core$Task$succeed(state);
      },
      $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Platform$sendToApp(router), messages))
    );
  });
  var $elm$browser$Browser$Events$subMap = F2(function (func, _v0) {
    var node = _v0.a;
    var name = _v0.b;
    var decoder = _v0.c;
    return A3($elm$browser$Browser$Events$MySub, node, name, A2($elm$json$Json$Decode$map, func, decoder));
  });
  _Platform_effectManagers["Browser.Events"] = _Platform_createManager(
    $elm$browser$Browser$Events$init,
    $elm$browser$Browser$Events$onEffects,
    $elm$browser$Browser$Events$onSelfMsg,
    0,
    $elm$browser$Browser$Events$subMap
  );
  var $elm$browser$Browser$Events$subscription = _Platform_leaf("Browser.Events");
  var $elm$browser$Browser$Events$on = F3(function (node, name, decoder) {
    return $elm$browser$Browser$Events$subscription(A3($elm$browser$Browser$Events$MySub, node, name, decoder));
  });
  var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, "keydown");
  var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, "keyup");
  var $elm$browser$Browser$Events$onMouseDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, "mousedown");
  var $elm$browser$Browser$Events$onMouseMove = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, "mousemove");
  var $elm$browser$Browser$Events$onMouseUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, "mouseup");
  var $elm$browser$Browser$Events$Window = { $: "Window" };
  var $elm$browser$Browser$Events$onResize = function (func) {
    return A3(
      $elm$browser$Browser$Events$on,
      $elm$browser$Browser$Events$Window,
      "resize",
      A2(
        $elm$json$Json$Decode$field,
        "target",
        A3(
          $elm$json$Json$Decode$map2,
          func,
          A2($elm$json$Json$Decode$field, "innerWidth", $elm$json$Json$Decode$int),
          A2($elm$json$Json$Decode$field, "innerHeight", $elm$json$Json$Decode$int)
        )
      )
    );
  };
  var $author$project$Lib$Tools$Browser$promptReceiver = _Platform_incomingPort(
    "promptReceiver",
    A2(
      $elm$json$Json$Decode$andThen,
      function (result) {
        return A2(
          $elm$json$Json$Decode$andThen,
          function (name) {
            return $elm$json$Json$Decode$succeed({ name: name, result: result });
          },
          A2($elm$json$Json$Decode$field, "name", $elm$json$Json$Decode$string)
        );
      },
      A2($elm$json$Json$Decode$field, "result", $elm$json$Json$Decode$string)
    )
  );
  var $author$project$Main$subscriptions = F2(function (_v0, _v1) {
    return $elm$core$Platform$Sub$batch(
      _List_fromArray([
        A2($elm$time$Time$every, $author$project$MainConfig$timeInterval, $author$project$Base$Tick),
        $elm$browser$Browser$Events$onKeyDown(
          A2(
            $elm$json$Json$Decode$map,
            function (x) {
              return $author$project$Base$KeyDown(x);
            },
            A2($elm$json$Json$Decode$field, "keyCode", $elm$json$Json$Decode$int)
          )
        ),
        $elm$browser$Browser$Events$onKeyUp(
          A2(
            $elm$json$Json$Decode$map,
            function (x) {
              return $author$project$Base$KeyUp(x);
            },
            A2($elm$json$Json$Decode$field, "keyCode", $elm$json$Json$Decode$int)
          )
        ),
        $elm$browser$Browser$Events$onResize(
          F2(function (w, h) {
            return $author$project$Base$NewWindowSize(_Utils_Tuple2(w, h));
          })
        ),
        $elm$browser$Browser$Events$onMouseDown(
          A4(
            $elm$json$Json$Decode$map3,
            F3(function (b, x, y) {
              return A2($author$project$Base$RealMouseDown, b, _Utils_Tuple2(x, y));
            }),
            A2($elm$json$Json$Decode$field, "button", $elm$json$Json$Decode$int),
            A2($elm$json$Json$Decode$field, "clientX", $elm$json$Json$Decode$float),
            A2($elm$json$Json$Decode$field, "clientY", $elm$json$Json$Decode$float)
          )
        ),
        $elm$browser$Browser$Events$onMouseUp(
          A3(
            $elm$json$Json$Decode$map2,
            F2(function (x, y) {
              return $author$project$Base$RealMouseUp(_Utils_Tuple2(x, y));
            }),
            A2($elm$json$Json$Decode$field, "clientX", $elm$json$Json$Decode$float),
            A2($elm$json$Json$Decode$field, "clientY", $elm$json$Json$Decode$float)
          )
        ),
        $elm$browser$Browser$Events$onMouseMove(
          A3(
            $elm$json$Json$Decode$map2,
            F2(function (x, y) {
              return $author$project$Base$MouseMove(_Utils_Tuple2(x, y));
            }),
            A2($elm$json$Json$Decode$field, "clientX", $elm$json$Json$Decode$float),
            A2($elm$json$Json$Decode$field, "clientY", $elm$json$Json$Decode$float)
          )
        ),
        $author$project$Lib$Tools$Browser$promptReceiver(function (p) {
          return A2($author$project$Base$Prompt, p.name, p.result);
        }),
      ])
    );
  });
  var $author$project$Base$MouseDown = F2(function (a, b) {
    return { $: "MouseDown", a: a, b: b };
  });
  var $author$project$Base$MouseUp = function (a) {
    return { $: "MouseUp", a: a };
  };
  var $author$project$Base$PlaySoundGotTime = F4(function (a, b, c, d) {
    return { $: "PlaySoundGotTime", a: a, b: b, c: c, d: d };
  });
  var $author$project$Lib$Tools$Browser$alert = _Platform_outgoingPort("alert", $elm$json$Json$Encode$string);
  var $author$project$MainConfig$debug = true;
  var $author$project$Lib$Scene$SceneLoader$existScene = function (i) {
    var scenes = $author$project$Scenes$AllScenes$allScenes;
    var tests = A2(
      $elm$core$List$filter,
      function (_v1) {
        var x = _v1.a;
        return _Utils_eq(x, i);
      },
      scenes
    );
    var _v0 = $elm$core$List$head(tests);
    if (_v0.$ === "Just") {
      return true;
    } else {
      return false;
    }
  };
  var $author$project$Lib$Coordinate$Coordinates$posToVirtual = F2(function (gd, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    var realWidth = gd.realWidth;
    var realHeight = gd.realHeight;
    return _Utils_Tuple2(
      $elm$core$Basics$floor($author$project$MainConfig$plWidth * (x / realWidth)),
      $elm$core$Basics$floor($author$project$MainConfig$plHeight * (y / realHeight))
    );
  });
  var $author$project$Lib$Coordinate$Coordinates$fromMouseToVirtual = F2(function (gd, _v0) {
    var px = _v0.a;
    var py = _v0.b;
    return A2($author$project$Lib$Coordinate$Coordinates$posToVirtual, gd, _Utils_Tuple2(px - gd.startLeft, py - gd.startTop));
  });
  var $author$project$Base$SoundLoaded = F3(function (a, b, c) {
    return { $: "SoundLoaded", a: a, b: b, c: c };
  });
  var $author$project$Lib$Resources$Base$allTexture = _List_fromArray([
    _Utils_Tuple2("planet_000", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile000-min.png")),
    _Utils_Tuple2("planet_001", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile001-min.png")),
    _Utils_Tuple2("planet_002", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile002-min.png")),
    _Utils_Tuple2("planet_003", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile003-min.png")),
    _Utils_Tuple2("planet_004", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile004-min.png")),
    _Utils_Tuple2("planet_005", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile005-min.png")),
    _Utils_Tuple2("planet_006", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile006-min.png")),
    _Utils_Tuple2("planet_007", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile007-min.png")),
    _Utils_Tuple2("planet_008", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile008-min.png")),
    _Utils_Tuple2("planet_009", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile009-min.png")),
    _Utils_Tuple2("planet_010", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile010-min.png")),
    _Utils_Tuple2("planet_011", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile011-min.png")),
    _Utils_Tuple2("planet_012", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile012-min.png")),
    _Utils_Tuple2("planet_013", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile013-min.png")),
    _Utils_Tuple2("planet_014", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile014-min.png")),
    _Utils_Tuple2("planet_015", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile015-min.png")),
    _Utils_Tuple2("planet_016", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile016-min.png")),
    _Utils_Tuple2("planet_017", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile017-min.png")),
    _Utils_Tuple2("planet_018", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile018-min.png")),
    _Utils_Tuple2("planet_019", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile019-min.png")),
    _Utils_Tuple2("planet_020", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile020-min.png")),
    _Utils_Tuple2("planet_021", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile021-min.png")),
    _Utils_Tuple2("planet_022", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile022-min.png")),
    _Utils_Tuple2("planet_023", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile023-min.png")),
    _Utils_Tuple2("planet_024", $author$project$Lib$Resources$Base$getResourcePath("img/planet/tile024-min.png")),
    _Utils_Tuple2("mainCharacter_001", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/run001.png")),
    _Utils_Tuple2("mainCharacter_002", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/run002.png")),
    _Utils_Tuple2("mainCharacter_003", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/run003.png")),
    _Utils_Tuple2("mainCharacter_004", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/run004.png")),
    _Utils_Tuple2("mainCharacter_005", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/run005.png")),
    _Utils_Tuple2("mainCharacter_006", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/run006.png")),
    _Utils_Tuple2("mainCharacter_000", $author$project$Lib$Resources$Base$getResourcePath("img/main_character/still.png")),
    _Utils_Tuple2("room", $author$project$Lib$Resources$Base$getResourcePath("img/room.png")),
    _Utils_Tuple2("investigator", $author$project$Lib$Resources$Base$getResourcePath("img/investigator/investigator.png")),
    _Utils_Tuple2("textbox", $author$project$Lib$Resources$Base$getResourcePath("img/textbox.png")),
    _Utils_Tuple2("captain", $author$project$Lib$Resources$Base$getResourcePath("img/captain/captain.png")),
    _Utils_Tuple2("key_c", $author$project$Lib$Resources$Base$getResourcePath("img/keys/c.png")),
    _Utils_Tuple2("key_leftarrow", $author$project$Lib$Resources$Base$getResourcePath("img/keys/leftarrow.png")),
    _Utils_Tuple2("key_rightarrow", $author$project$Lib$Resources$Base$getResourcePath("img/keys/rightarrow.png")),
    _Utils_Tuple2("story_bg", $author$project$Lib$Resources$Base$getResourcePath("img/story_bg.png")),
    _Utils_Tuple2("starter_background", $author$project$Lib$Resources$Base$getResourcePath("img/cover.png")),
    _Utils_Tuple2("starter_newGameButton", $author$project$Lib$Resources$Base$getResourcePath("img/NewGame.png")),
    _Utils_Tuple2("starter_howToPlayButton", $author$project$Lib$Resources$Base$getResourcePath("img/HowToPlay.png")),
    _Utils_Tuple2("back", $author$project$Lib$Resources$Base$getResourcePath("img/Back.png")),
    _Utils_Tuple2("rules_rules", $author$project$Lib$Resources$Base$getResourcePath("img/Rules.png")),
    _Utils_Tuple2("logo", $author$project$Lib$Resources$Base$getResourcePath("img/logo.png")),
    _Utils_Tuple2("background", $author$project$Lib$Resources$Base$getResourcePath("img/background.png")),
    _Utils_Tuple2("brick", $author$project$Lib$Resources$Base$getResourcePath("img/brick.png")),
    _Utils_Tuple2("ball", $author$project$Lib$Resources$Base$getResourcePath("img/Ball.png")),
    _Utils_Tuple2("paddle", $author$project$Lib$Resources$Base$getResourcePath("img/Paddle.png")),
    _Utils_Tuple2("brick_attacked", $author$project$Lib$Resources$Base$getResourcePath("img/brick_attacked.png")),
    _Utils_Tuple2("brick_neutral", $author$project$Lib$Resources$Base$getResourcePath("img/brick_neutral.png")),
    _Utils_Tuple2("brick_bonus", $author$project$Lib$Resources$Base$getResourcePath("img/brick_bonus.png")),
    _Utils_Tuple2("brick_danger", $author$project$Lib$Resources$Base$getResourcePath("img/brick_danger.png")),
    _Utils_Tuple2("brick_positive", $author$project$Lib$Resources$Base$getResourcePath("img/brick_positive.png")),
    _Utils_Tuple2("brick_negative", $author$project$Lib$Resources$Base$getResourcePath("img/brick_negative.png")),
    _Utils_Tuple2("key_r", $author$project$Lib$Resources$Base$getResourcePath("img/keys/r.png")),
  ]);
  var $MartinSStewart$elm_audio$Audio$cmdBatch = function (audioCmds) {
    return $MartinSStewart$elm_audio$Audio$AudioCmdGroup(audioCmds);
  };
  var $author$project$Lib$LocalStorage$LocalStorage$encodeLSInfo = function (info) {
    return A2(
      $elm$json$Json$Encode$encode,
      0,
      $elm$json$Json$Encode$object(_List_fromArray([_Utils_Tuple2("volume", $elm$json$Json$Encode$float(info.volume))]))
    );
  };
  var $author$project$Lib$Scene$SceneLoader$getCurrentScene = function (model) {
    return model.currentScene;
  };
  var $MartinSStewart$elm_audio$Audio$AudioLoadRequest = function (a) {
    return { $: "AudioLoadRequest", a: a };
  };
  var $MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage =
    { $: "ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage" };
  var $MartinSStewart$elm_audio$Audio$enumeratedResults = A2(
    $mgold$elm_nonempty_list$List$Nonempty$Nonempty,
    $elm$core$Result$Err(
      $MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage
    ),
    _Utils_ap(
      _List_fromArray([
        $elm$core$Result$Err($MartinSStewart$elm_audio$Audio$FailedToDecode),
        $elm$core$Result$Err($MartinSStewart$elm_audio$Audio$NetworkError),
        $elm$core$Result$Err($MartinSStewart$elm_audio$Audio$UnknownError),
      ]),
      A2(
        $elm$core$List$map,
        function (bufferId) {
          return $elm$core$Result$Ok(
            $MartinSStewart$elm_audio$Audio$File({
              bufferId: $MartinSStewart$elm_audio$Audio$BufferId(bufferId),
            })
          );
        },
        A2($elm$core$List$range, 0, 1000)
      )
    )
  );
  var $MartinSStewart$elm_audio$Audio$loadAudio = F2(function (userMsg, url) {
    return $MartinSStewart$elm_audio$Audio$AudioLoadRequest({
      audioUrl: url,
      userMsg: A2(
        $mgold$elm_nonempty_list$List$Nonempty$map,
        function (results) {
          return _Utils_Tuple2(results, userMsg(results));
        },
        $MartinSStewart$elm_audio$Audio$enumeratedResults
      ),
    });
  });
  var $author$project$Lib$Tools$Browser$prompt = _Platform_outgoingPort("prompt", function ($) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([_Utils_Tuple2("name", $elm$json$Json$Encode$string($.name)), _Utils_Tuple2("title", $elm$json$Json$Encode$string($.title))])
    );
  });
  var $author$project$Common$resetSceneStartTime = function (m) {
    var ogd = m.currentGlobalData;
    var ngd = _Utils_update(ogd, { sceneStartTime: 0 });
    return _Utils_update(m, { currentGlobalData: ngd });
  };
  var $author$project$Lib$LocalStorage$LocalStorage$sendInfo = _Platform_outgoingPort("sendInfo", $elm$json$Json$Encode$string);
  var $author$project$Lib$Audio$Audio$stopAudio = F2(function (repo, s) {
    return A2(
      $elm$core$List$filter,
      function (_v0) {
        var name = _v0.a;
        return !_Utils_eq(name, s);
      },
      repo
    );
  });
  var $author$project$Common$updateSceneStartTime = function (m) {
    var ogd = m.currentGlobalData;
    var ngd = _Utils_update(ogd, { sceneStartTime: ogd.sceneStartTime + 1 });
    return _Utils_update(m, { currentGlobalData: ngd });
  };
  var $author$project$Main$gameUpdate = F2(function (msg, model) {
    if (
      _Utils_cmp(
        $elm$core$List$length($elm$core$Dict$keys(model.currentGlobalData.sprites)),
        $elm$core$List$length($author$project$Lib$Resources$Base$allTexture)
      ) < 0
    ) {
      return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
    } else {
      var oldLocalStorage = model.currentGlobalData.localStorage;
      var _v0 = A2(
        $author$project$Lib$Scene$SceneLoader$getCurrentScene(model).update,
        { globalData: model.currentGlobalData, msg: msg, t: model.time },
        model.currentData
      );
      var sdt = _v0.a;
      var som = _v0.b;
      var newenv = _v0.c;
      var newGD1 = newenv.globalData;
      var newGD2 = _Utils_update(newGD1, { lastLocalStorage: oldLocalStorage });
      var timeUpdatedModel = (function () {
        if (msg.$ === "Tick") {
          return _Utils_update(model, { currentGlobalData: newGD2, time: model.time + 1 });
        } else {
          return _Utils_update(model, { currentGlobalData: newGD2 });
        }
      })();
      var newModel = $author$project$Common$updateSceneStartTime(_Utils_update(timeUpdatedModel, { currentData: sdt }));
      var _v1 = A3(
        $elm$core$List$foldl,
        F2(function (singleSOM, _v2) {
          var lastModel = _v2.a;
          var lastCmds = _v2.b;
          var lastAudioCmds = _v2.c;
          switch (singleSOM.$) {
            case "SOMChangeScene":
              var _v4 = singleSOM.a;
              var tm = _v4.a;
              var s = _v4.b;
              return _Utils_Tuple3(
                $author$project$Common$resetSceneStartTime(A4($author$project$Lib$Scene$SceneLoader$loadSceneByName, msg, lastModel, s, tm)),
                lastCmds,
                lastAudioCmds
              );
            case "SOMPlayAudio":
              var name = singleSOM.a;
              var path = singleSOM.b;
              var opt = singleSOM.c;
              return _Utils_Tuple3(
                lastModel,
                lastCmds,
                _Utils_ap(
                  lastAudioCmds,
                  _List_fromArray([A2($MartinSStewart$elm_audio$Audio$loadAudio, A2($author$project$Base$SoundLoaded, name, opt), path)])
                )
              );
            case "SOMSetVolume":
              var s = singleSOM.a;
              var oldgd = lastModel.currentGlobalData;
              var oldLS = oldgd.localStorage;
              var newgd2 = _Utils_update(oldgd, {
                localStorage: _Utils_update(oldLS, { volume: s }),
              });
              return _Utils_Tuple3(_Utils_update(lastModel, { currentGlobalData: newgd2 }), lastCmds, lastAudioCmds);
            case "SOMStopAudio":
              var name = singleSOM.a;
              return _Utils_Tuple3(
                _Utils_update(lastModel, {
                  audiorepo: A2($author$project$Lib$Audio$Audio$stopAudio, lastModel.audiorepo, name),
                }),
                lastCmds,
                lastAudioCmds
              );
            case "SOMAlert":
              var text = singleSOM.a;
              return _Utils_Tuple3(lastModel, _Utils_ap(lastCmds, _List_fromArray([$author$project$Lib$Tools$Browser$alert(text)])), lastAudioCmds);
            default:
              var name = singleSOM.a;
              var title = singleSOM.b;
              return _Utils_Tuple3(
                lastModel,
                _Utils_ap(lastCmds, _List_fromArray([$author$project$Lib$Tools$Browser$prompt({ name: name, title: title })])),
                lastAudioCmds
              );
          }
        }),
        _Utils_Tuple3(newModel, _List_Nil, _List_Nil),
        som
      );
      var newmodel = _v1.a;
      var cmds = _v1.b;
      var audiocmds = _v1.c;
      return _Utils_Tuple3(
        newmodel,
        $elm$core$Platform$Cmd$batch(
          !_Utils_eq(newmodel.currentGlobalData.localStorage, model.currentGlobalData.lastLocalStorage)
            ? A2(
                $elm$core$List$cons,
                $author$project$Lib$LocalStorage$LocalStorage$sendInfo(
                  $author$project$Lib$LocalStorage$LocalStorage$encodeLSInfo(newmodel.currentGlobalData.localStorage)
                ),
                cmds
              )
            : cmds
        ),
        $MartinSStewart$elm_audio$Audio$cmdBatch(audiocmds)
      );
    }
  });
  var $author$project$Lib$Audio$Audio$loadAudio = F5(function (repo, name, source, opt, t) {
    var filterrepo = A2(
      $elm$core$List$filter,
      function (_v0) {
        var n = _v0.a;
        return !_Utils_eq(n, name);
      },
      repo
    );
    return _Utils_ap(filterrepo, _List_fromArray([_Utils_Tuple3(name, source, _Utils_Tuple2(opt, t))]));
  });
  var $author$project$Lib$Resources$Base$saveSprite = F3(function (dst, name, text) {
    return A3($elm$core$Dict$insert, name, text, dst);
  });
  var $elm$core$String$toFloat = _String_toFloat;
  var $author$project$Main$update = F3(function (_v0, msg, model) {
    _v1$15: while (true) {
      switch (msg.$) {
        case "TextureLoaded":
          if (msg.b.$ === "Nothing") {
            var name = msg.a;
            var _v2 = msg.b;
            return _Utils_Tuple3(
              model,
              $author$project$Lib$Tools$Browser$alert("Failed to load sprite " + name),
              $MartinSStewart$elm_audio$Audio$cmdNone
            );
          } else {
            var name = msg.a;
            var t = msg.b.a;
            var oldgd = model.currentGlobalData;
            var newgd = _Utils_update(oldgd, {
              sprites: A3($author$project$Lib$Resources$Base$saveSprite, model.currentGlobalData.sprites, name, t),
            });
            return _Utils_Tuple3(
              _Utils_update(model, { currentGlobalData: newgd }),
              $elm$core$Platform$Cmd$none,
              $MartinSStewart$elm_audio$Audio$cmdNone
            );
          }
        case "SoundLoaded":
          var name = msg.a;
          var opt = msg.b;
          var result = msg.c;
          if (result.$ === "Ok") {
            var sound = result.a;
            return _Utils_Tuple3(
              model,
              A2($elm$core$Task$perform, A3($author$project$Base$PlaySoundGotTime, name, opt, sound), $elm$time$Time$now),
              $MartinSStewart$elm_audio$Audio$cmdNone
            );
          } else {
            return _Utils_Tuple3(
              model,
              $author$project$Lib$Tools$Browser$alert("Failed to load audio " + name),
              $MartinSStewart$elm_audio$Audio$cmdNone
            );
          }
        case "PlaySoundGotTime":
          var name = msg.a;
          var opt = msg.b;
          var sound = msg.c;
          var t = msg.d;
          return _Utils_Tuple3(
            _Utils_update(model, {
              audiorepo: A5($author$project$Lib$Audio$Audio$loadAudio, model.audiorepo, name, sound, opt, t),
            }),
            $elm$core$Platform$Cmd$none,
            $MartinSStewart$elm_audio$Audio$cmdNone
          );
        case "NewWindowSize":
          var t = msg.a;
          var oldgd = model.currentGlobalData;
          var _v4 = $author$project$Lib$Coordinate$Coordinates$maxHandW(t);
          var gw = _v4.a;
          var gh = _v4.b;
          var _v5 = $author$project$Lib$Coordinate$Coordinates$getStartPoint(t);
          var fl = _v5.a;
          var ft = _v5.b;
          var newgd = _Utils_update(oldgd, { browserViewPort: t, realHeight: gh, realWidth: gw, startLeft: fl, startTop: ft });
          return _Utils_Tuple3(
            _Utils_update(model, { currentGlobalData: newgd }),
            $elm$core$Platform$Cmd$none,
            $MartinSStewart$elm_audio$Audio$cmdNone
          );
        case "MouseMove":
          var _v6 = msg.a;
          var px = _v6.a;
          var py = _v6.b;
          var curgd = model.currentGlobalData;
          var mp = A2($author$project$Lib$Coordinate$Coordinates$fromMouseToVirtual, curgd, _Utils_Tuple2(px, py));
          return _Utils_Tuple3(
            _Utils_update(model, {
              currentGlobalData: _Utils_update(curgd, { mousePos: mp }),
            }),
            $elm$core$Platform$Cmd$none,
            $MartinSStewart$elm_audio$Audio$cmdNone
          );
        case "RealMouseDown":
          var e = msg.a;
          var pos = msg.b;
          var vp = A2($author$project$Lib$Coordinate$Coordinates$fromMouseToVirtual, model.currentGlobalData, pos);
          return A2($author$project$Main$gameUpdate, A2($author$project$Base$MouseDown, e, vp), model);
        case "RealMouseUp":
          var pos = msg.a;
          var vp = A2($author$project$Lib$Coordinate$Coordinates$fromMouseToVirtual, model.currentGlobalData, pos);
          return A2($author$project$Main$gameUpdate, $author$project$Base$MouseUp(vp), model);
        case "KeyDown":
          switch (msg.a) {
            case 112:
              return $author$project$MainConfig$debug
                ? _Utils_Tuple3(
                    model,
                    $author$project$Lib$Tools$Browser$prompt({ name: "load", title: "Enter the scene you want to load" }),
                    $MartinSStewart$elm_audio$Audio$cmdNone
                  )
                : A2($author$project$Main$gameUpdate, msg, model);
            case 113:
              return $author$project$MainConfig$debug
                ? _Utils_Tuple3(
                    model,
                    $author$project$Lib$Tools$Browser$prompt({ name: "setVolume", title: "Set volume (0-1)" }),
                    $MartinSStewart$elm_audio$Audio$cmdNone
                  )
                : A2($author$project$Main$gameUpdate, msg, model);
            case 66:
              var newModel = (function () {
                var gd = model.currentGlobalData;
                var ls = gd.localStorage;
                var newGd = _Utils_update(gd, {
                  localStorage: _Utils_update(ls, {
                    volume: A2($elm$core$Basics$max, 0, ls.volume - 0.05),
                  }),
                });
                return _Utils_update(model, { currentGlobalData: newGd });
              })();
              return _Utils_Tuple3(newModel, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
            case 78:
              var newModel = (function () {
                var gd = model.currentGlobalData;
                var ls = gd.localStorage;
                var newGd = _Utils_update(gd, {
                  localStorage: _Utils_update(ls, {
                    volume: A2($elm$core$Basics$min, 1, ls.volume + 0.05),
                  }),
                });
                return _Utils_update(model, { currentGlobalData: newGd });
              })();
              return _Utils_Tuple3(newModel, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
            case 77:
              var newModel = (function () {
                var gd = model.currentGlobalData;
                var ls = gd.localStorage;
                var newGd = _Utils_update(gd, {
                  localStorage: _Utils_update(ls, { volume: 0 }),
                });
                return _Utils_update(model, { currentGlobalData: newGd });
              })();
              return _Utils_Tuple3(newModel, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
            default:
              break _v1$15;
          }
        case "Prompt":
          switch (msg.a) {
            case "load":
              var result = msg.b;
              return $author$project$Lib$Scene$SceneLoader$existScene(result)
                ? _Utils_Tuple3(
                    $author$project$Common$resetSceneStartTime(
                      A4($author$project$Lib$Scene$SceneLoader$loadSceneByName, msg, model, result, $author$project$Lib$Scene$Base$NullSceneInitData)
                    ),
                    $elm$core$Platform$Cmd$none,
                    $MartinSStewart$elm_audio$Audio$cmdNone
                  )
                : _Utils_Tuple3(model, $author$project$Lib$Tools$Browser$alert("Scene not found!"), $MartinSStewart$elm_audio$Audio$cmdNone);
            case "setVolume":
              var result = msg.b;
              var vol = $elm$core$String$toFloat(result);
              if (vol.$ === "Just") {
                var v = vol.a;
                var gd = model.currentGlobalData;
                var ls = gd.localStorage;
                var newGd = _Utils_update(gd, {
                  localStorage: _Utils_update(ls, { volume: v }),
                });
                return _Utils_Tuple3(
                  _Utils_update(model, { currentGlobalData: newGd }),
                  $elm$core$Platform$Cmd$none,
                  $MartinSStewart$elm_audio$Audio$cmdNone
                );
              } else {
                return _Utils_Tuple3(model, $author$project$Lib$Tools$Browser$alert("Not a number"), $MartinSStewart$elm_audio$Audio$cmdNone);
              }
            default:
              break _v1$15;
          }
        default:
          break _v1$15;
      }
    }
    return A2($author$project$Main$gameUpdate, msg, model);
  });
  var $author$project$MainConfig$background = function (gd) {
    return A2(
      $linsyking$elm_canvas$Canvas$shapes,
      _List_fromArray([$linsyking$elm_canvas$Canvas$Settings$fill($avh4$elm_color$Color$black)]),
      _List_fromArray([A3($linsyking$elm_canvas$Canvas$rect, _Utils_Tuple2(0, 0), gd.realWidth, gd.realHeight)])
    );
  };
  var $elm$html$Html$div = _VirtualDom_node("div");
  var $elm$core$String$fromFloat = _String_fromNumber;
  var $author$project$Base$TextureLoaded = F2(function (a, b) {
    return { $: "TextureLoaded", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$Internal$Texture$TSImageUrl = F2(function (a, b) {
    return { $: "TSImageUrl", a: a, b: b };
  });
  var $linsyking$elm_canvas$Canvas$Texture$loadFromImageUrl = F2(function (url, onLoad) {
    return A2($linsyking$elm_canvas$Canvas$Internal$Texture$TSImageUrl, url, onLoad);
  });
  var $author$project$Lib$Resources$Base$getTexture = A2(
    $elm$core$List$map,
    function (_v0) {
      var x = _v0.a;
      var y = _v0.b;
      return A2($linsyking$elm_canvas$Canvas$Texture$loadFromImageUrl, y, $author$project$Base$TextureLoaded(x));
    },
    $author$project$Lib$Resources$Base$allTexture
  );
  var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
  var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
  var $elm$html$Html$canvas = _VirtualDom_node("canvas");
  var $linsyking$elm_canvas$Canvas$cnvs = A2($elm$html$Html$canvas, _List_Nil, _List_Nil);
  var $elm$virtual_dom$VirtualDom$property = F2(function (key, value) {
    return A2(_VirtualDom_property, _VirtualDom_noInnerHtmlOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlJson(value));
  });
  var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands = function (list) {
    return A2($elm$html$Html$Attributes$property, "cmds", A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, list));
  };
  var $elm$html$Html$Attributes$height = function (n) {
    return A2(_VirtualDom_attribute, "height", $elm$core$String$fromInt(n));
  };
  var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
    return _VirtualDom_keyedNode(_VirtualDom_noScript(tag));
  };
  var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty = _List_Nil;
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath = A2(
    $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
    "beginPath",
    _List_Nil
  );
  var $elm$core$Tuple$mapBoth = F3(function (funcA, funcB, _v0) {
    var x = _v0.a;
    var y = _v0.b;
    return _Utils_Tuple2(funcA(x), funcB(y));
  });
  var $elm$core$String$concat = function (strings) {
    return A2($elm$core$String$join, "", strings);
  };
  var $avh4$elm_color$Color$toCssString = function (_v0) {
    var r = _v0.a;
    var g = _v0.b;
    var b = _v0.c;
    var a = _v0.d;
    var roundTo = function (x) {
      return $elm$core$Basics$round(x * 1000) / 1000;
    };
    var pct = function (x) {
      return $elm$core$Basics$round(x * 10000) / 100;
    };
    return $elm$core$String$concat(
      _List_fromArray([
        "rgba(",
        $elm$core$String$fromFloat(pct(r)),
        "%,",
        $elm$core$String$fromFloat(pct(g)),
        "%,",
        $elm$core$String$fromFloat(pct(b)),
        "%,",
        $elm$core$String$fromFloat(roundTo(a)),
        ")",
      ])
    );
  };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$var = F3(function (name, init, modifiers) {
    return $elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("type", $elm$json$Json$Encode$string("variable")),
        _Utils_Tuple2("field", $elm$json$Json$Encode$string(name)),
        _Utils_Tuple2("init", init),
        _Utils_Tuple2("modifiers", A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, modifiers)),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$encodeStyle = F2(function (fieldKey, style) {
    var adaptStops = $elm$core$List$map(
      A2(
        $elm$core$Basics$composeL,
        A2($elm$core$Basics$composeL, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn("addColorStop"), function (_v1) {
          var offset = _v1.a;
          var color = _v1.b;
          return _List_fromArray([offset, color]);
        }),
        A2(
          $elm$core$Tuple$mapBoth,
          $elm$json$Json$Encode$float,
          A2($elm$core$Basics$composeR, $avh4$elm_color$Color$toCssString, $elm$json$Json$Encode$string)
        )
      )
    );
    switch (style.$) {
      case "Color":
        var color = style.a;
        return A2(
          $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
          fieldKey,
          $elm$json$Json$Encode$string($avh4$elm_color$Color$toCssString(color))
        );
      case "LinearGradient":
        var spec = style.a;
        var stops = style.b;
        return A3(
          $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$var,
          fieldKey,
          A2(
            $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
            "createLinearGradient",
            _List_fromArray([
              $elm$json$Json$Encode$float(spec.x0),
              $elm$json$Json$Encode$float(spec.y0),
              $elm$json$Json$Encode$float(spec.x1),
              $elm$json$Json$Encode$float(spec.y1),
            ])
          ),
          adaptStops(stops)
        );
      default:
        var spec = style.a;
        var stops = style.b;
        return A3(
          $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$var,
          fieldKey,
          A2(
            $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
            "createRadialGradient",
            _List_fromArray([
              $elm$json$Json$Encode$float(spec.x0),
              $elm$json$Json$Encode$float(spec.y0),
              $elm$json$Json$Encode$float(spec.rad0),
              $elm$json$Json$Encode$float(spec.x1),
              $elm$json$Json$Encode$float(spec.y1),
              $elm$json$Json$Encode$float(spec.rad1),
            ])
          ),
          adaptStops(stops)
        );
    }
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx =
    $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$encodeStyle("fillStyle");
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect = F4(function (x, y, width, height) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "clearRect",
      _List_fromArray([
        $elm$json$Json$Encode$float(x),
        $elm$json$Json$Encode$float(y),
        $elm$json$Json$Encode$float(width),
        $elm$json$Json$Encode$float(height),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$renderClear = F4(function (_v0, w, h, cmds) {
    var x = _v0.a;
    var y = _v0.b;
    return A2($elm$core$List$cons, A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect, x, y, w, h), cmds);
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc = F6(function (x, y, radius, startAngle, endAngle, anticlockwise) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "arc",
      _List_fromArray([
        $elm$json$Json$Encode$float(x),
        $elm$json$Json$Encode$float(y),
        $elm$json$Json$Encode$float(radius),
        $elm$json$Json$Encode$float(startAngle),
        $elm$json$Json$Encode$float(endAngle),
        $elm$json$Json$Encode$bool(anticlockwise),
      ])
    );
  });
  var $elm$core$Basics$pi = _Basics_pi;
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle = F3(function (x, y, r) {
    return A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, r, 0, 2 * $elm$core$Basics$pi, false);
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo = F2(function (x, y) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "moveTo",
      _List_fromArray([$elm$json$Json$Encode$float(x), $elm$json$Json$Encode$float(y)])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect = F4(function (x, y, w, h) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "rect",
      _List_fromArray([
        $elm$json$Json$Encode$float(x),
        $elm$json$Json$Encode$float(y),
        $elm$json$Json$Encode$float(w),
        $elm$json$Json$Encode$float(h),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo = F5(function (x1, y1, x2, y2, radius) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "arcTo",
      _List_fromArray([
        $elm$json$Json$Encode$float(x1),
        $elm$json$Json$Encode$float(y1),
        $elm$json$Json$Encode$float(x2),
        $elm$json$Json$Encode$float(y2),
        $elm$json$Json$Encode$float(radius),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo = F6(function (cp1x, cp1y, cp2x, cp2y, x, y) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "bezierCurveTo",
      _List_fromArray([
        $elm$json$Json$Encode$float(cp1x),
        $elm$json$Json$Encode$float(cp1y),
        $elm$json$Json$Encode$float(cp2x),
        $elm$json$Json$Encode$float(cp2y),
        $elm$json$Json$Encode$float(x),
        $elm$json$Json$Encode$float(y),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo = F2(function (x, y) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "lineTo",
      _List_fromArray([$elm$json$Json$Encode$float(x), $elm$json$Json$Encode$float(y)])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo = F4(function (cpx, cpy, x, y) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "quadraticCurveTo",
      _List_fromArray([
        $elm$json$Json$Encode$float(cpx),
        $elm$json$Json$Encode$float(cpy),
        $elm$json$Json$Encode$float(x),
        $elm$json$Json$Encode$float(y),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$renderLineSegment = F2(function (segment, cmds) {
    switch (segment.$) {
      case "ArcTo":
        var _v1 = segment.a;
        var x = _v1.a;
        var y = _v1.b;
        var _v2 = segment.b;
        var x2 = _v2.a;
        var y2 = _v2.b;
        var radius = segment.c;
        return A2($elm$core$List$cons, A5($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo, x, y, x2, y2, radius), cmds);
      case "BezierCurveTo":
        var _v3 = segment.a;
        var cp1x = _v3.a;
        var cp1y = _v3.b;
        var _v4 = segment.b;
        var cp2x = _v4.a;
        var cp2y = _v4.b;
        var _v5 = segment.c;
        var x = _v5.a;
        var y = _v5.b;
        return A2(
          $elm$core$List$cons,
          A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo, cp1x, cp1y, cp2x, cp2y, x, y),
          cmds
        );
      case "LineTo":
        var _v6 = segment.a;
        var x = _v6.a;
        var y = _v6.b;
        return A2($elm$core$List$cons, A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo, x, y), cmds);
      case "MoveTo":
        var _v7 = segment.a;
        var x = _v7.a;
        var y = _v7.b;
        return A2($elm$core$List$cons, A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y), cmds);
      default:
        var _v8 = segment.a;
        var cpx = _v8.a;
        var cpy = _v8.b;
        var _v9 = segment.b;
        var x = _v9.a;
        var y = _v9.b;
        return A2($elm$core$List$cons, A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo, cpx, cpy, x, y), cmds);
    }
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$roundRect = F5(function (x, y, w, h, r) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "roundRect",
      _List_fromArray([
        $elm$json$Json$Encode$float(x),
        $elm$json$Json$Encode$float(y),
        $elm$json$Json$Encode$float(w),
        $elm$json$Json$Encode$float(h),
        A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, r),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$renderShape = F2(function (shape, cmds) {
    switch (shape.$) {
      case "Rect":
        var _v1 = shape.a;
        var x = _v1.a;
        var y = _v1.b;
        var w = shape.b;
        var h = shape.c;
        return A2(
          $elm$core$List$cons,
          A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect, x, y, w, h),
          A2($elm$core$List$cons, A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y), cmds)
        );
      case "RoundRect":
        var _v2 = shape.a;
        var x = _v2.a;
        var y = _v2.b;
        var w = shape.b;
        var h = shape.c;
        var r = shape.d;
        return A2(
          $elm$core$List$cons,
          A5($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$roundRect, x, y, w, h, r),
          A2($elm$core$List$cons, A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y), cmds)
        );
      case "Circle":
        var _v3 = shape.a;
        var x = _v3.a;
        var y = _v3.b;
        var r = shape.b;
        return A2(
          $elm$core$List$cons,
          A3($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle, x, y, r),
          A2($elm$core$List$cons, A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x + r, y), cmds)
        );
      case "Path":
        var _v4 = shape.a;
        var x = _v4.a;
        var y = _v4.b;
        var segments = shape.b;
        return A3(
          $elm$core$List$foldl,
          $linsyking$elm_canvas$Canvas$renderLineSegment,
          A2($elm$core$List$cons, A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y), cmds),
          segments
        );
      default:
        var _v5 = shape.a;
        var x = _v5.a;
        var y = _v5.b;
        var radius = shape.b;
        var startAngle = shape.c;
        var endAngle = shape.d;
        var anticlockwise = shape.e;
        return A2(
          $elm$core$List$cons,
          A2(
            $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
            x + radius * $elm$core$Basics$cos(endAngle),
            y + radius * $elm$core$Basics$sin(endAngle)
          ),
          A2(
            $elm$core$List$cons,
            A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, radius, startAngle, endAngle, anticlockwise),
            A2(
              $elm$core$List$cons,
              A2(
                $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
                x + radius * $elm$core$Basics$cos(startAngle),
                y + radius * $elm$core$Basics$sin(startAngle)
              ),
              cmds
            )
          )
        );
    }
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero = { $: "NonZero" };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString = function (fillRule) {
    if (fillRule.$ === "NonZero") {
      return "nonzero";
    } else {
      return "evenodd";
    }
  };
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill = function (fillRule) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "fill",
      _List_fromArray([$elm$json$Json$Encode$string($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString(fillRule))])
    );
  };
  var $linsyking$elm_canvas$Canvas$renderShapeFill = F2(function (maybeStyle, cmds) {
    return A2(
      $elm$core$List$cons,
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero),
      (function () {
        if (maybeStyle.$ === "Just") {
          var style = maybeStyle.a;
          return A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(style), cmds);
        } else {
          return cmds;
        }
      })()
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke = A2(
    $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
    "stroke",
    _List_Nil
  );
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx =
    $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$encodeStyle("strokeStyle");
  var $linsyking$elm_canvas$Canvas$renderShapeStroke = F2(function (maybeStyle, cmds) {
    return A2(
      $elm$core$List$cons,
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke,
      (function () {
        if (maybeStyle.$ === "Just") {
          var style = maybeStyle.a;
          return A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(style), cmds);
        } else {
          return cmds;
        }
      })()
    );
  });
  var $linsyking$elm_canvas$Canvas$renderShapeDrawOp = F2(function (drawOp, cmds) {
    switch (drawOp.$) {
      case "NotSpecified":
        return A2(
          $linsyking$elm_canvas$Canvas$renderShapeStroke,
          $elm$core$Maybe$Nothing,
          A2($linsyking$elm_canvas$Canvas$renderShapeFill, $elm$core$Maybe$Nothing, cmds)
        );
      case "Fill":
        var c = drawOp.a;
        return A2($linsyking$elm_canvas$Canvas$renderShapeFill, $elm$core$Maybe$Just(c), cmds);
      case "Stroke":
        var c = drawOp.a;
        return A2($linsyking$elm_canvas$Canvas$renderShapeStroke, $elm$core$Maybe$Just(c), cmds);
      default:
        var fc = drawOp.a;
        var sc = drawOp.b;
        return A2(
          $linsyking$elm_canvas$Canvas$renderShapeStroke,
          $elm$core$Maybe$Just(sc),
          A2($linsyking$elm_canvas$Canvas$renderShapeFill, $elm$core$Maybe$Just(fc), cmds)
        );
    }
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText = F4(function (text, x, y, maybeMaxWidth) {
    if (maybeMaxWidth.$ === "Nothing") {
      return A2(
        $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
        "fillText",
        _List_fromArray([$elm$json$Json$Encode$string(text), $elm$json$Json$Encode$float(x), $elm$json$Json$Encode$float(y)])
      );
    } else {
      var maxWidth = maybeMaxWidth.a;
      return A2(
        $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
        "fillText",
        _List_fromArray([
          $elm$json$Json$Encode$string(text),
          $elm$json$Json$Encode$float(x),
          $elm$json$Json$Encode$float(y),
          $elm$json$Json$Encode$float(maxWidth),
        ])
      );
    }
  });
  var $linsyking$elm_canvas$Canvas$renderTextFill = F5(function (txt, x, y, maybeStyle, cmds) {
    return A2(
      $elm$core$List$cons,
      A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText, txt.text, x, y, txt.maxWidth),
      (function () {
        if (maybeStyle.$ === "Just") {
          var style = maybeStyle.a;
          return A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(style), cmds);
        } else {
          return cmds;
        }
      })()
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText = F4(function (text, x, y, maybeMaxWidth) {
    if (maybeMaxWidth.$ === "Nothing") {
      return A2(
        $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
        "strokeText",
        _List_fromArray([$elm$json$Json$Encode$string(text), $elm$json$Json$Encode$float(x), $elm$json$Json$Encode$float(y)])
      );
    } else {
      var maxWidth = maybeMaxWidth.a;
      return A2(
        $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
        "strokeText",
        _List_fromArray([
          $elm$json$Json$Encode$string(text),
          $elm$json$Json$Encode$float(x),
          $elm$json$Json$Encode$float(y),
          $elm$json$Json$Encode$float(maxWidth),
        ])
      );
    }
  });
  var $linsyking$elm_canvas$Canvas$renderTextStroke = F5(function (txt, x, y, maybeStyle, cmds) {
    return A2(
      $elm$core$List$cons,
      A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText, txt.text, x, y, txt.maxWidth),
      (function () {
        if (maybeStyle.$ === "Just") {
          var style = maybeStyle.a;
          return A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(style), cmds);
        } else {
          return cmds;
        }
      })()
    );
  });
  var $linsyking$elm_canvas$Canvas$renderTextDrawOp = F3(function (drawOp, txt, cmds) {
    var _v0 = txt.point;
    var x = _v0.a;
    var y = _v0.b;
    switch (drawOp.$) {
      case "NotSpecified":
        return A5(
          $linsyking$elm_canvas$Canvas$renderTextStroke,
          txt,
          x,
          y,
          $elm$core$Maybe$Nothing,
          A5($linsyking$elm_canvas$Canvas$renderTextFill, txt, x, y, $elm$core$Maybe$Nothing, cmds)
        );
      case "Fill":
        var fill = drawOp.a;
        return A5($linsyking$elm_canvas$Canvas$renderTextFill, txt, x, y, $elm$core$Maybe$Just(fill), cmds);
      case "Stroke":
        var stroke = drawOp.a;
        return A5($linsyking$elm_canvas$Canvas$renderTextStroke, txt, x, y, $elm$core$Maybe$Just(stroke), cmds);
      default:
        var fill = drawOp.a;
        var stroke = drawOp.b;
        return A5(
          $linsyking$elm_canvas$Canvas$renderTextStroke,
          txt,
          x,
          y,
          $elm$core$Maybe$Just(stroke),
          A5($linsyking$elm_canvas$Canvas$renderTextFill, txt, x, y, $elm$core$Maybe$Just(fill), cmds)
        );
    }
  });
  var $linsyking$elm_canvas$Canvas$renderText = F3(function (drawOp, txt, cmds) {
    return A3($linsyking$elm_canvas$Canvas$renderTextDrawOp, drawOp, txt, cmds);
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage = F9(function (sx, sy, sw, sh, dx, dy, dw, dh, imageObj) {
    return A2(
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
      "drawImage",
      _List_fromArray([
        imageObj,
        $elm$json$Json$Encode$float(sx),
        $elm$json$Json$Encode$float(sy),
        $elm$json$Json$Encode$float(sw),
        $elm$json$Json$Encode$float(sh),
        $elm$json$Json$Encode$float(dx),
        $elm$json$Json$Encode$float(dy),
        $elm$json$Json$Encode$float(dw),
        $elm$json$Json$Encode$float(dh),
      ])
    );
  });
  var $linsyking$elm_canvas$Canvas$Internal$Texture$drawTexture = F4(function (x, y, t, cmds) {
    return A2(
      $elm$core$List$cons,
      (function () {
        if (t.$ === "TImage") {
          var image = t.a;
          return A9(
            $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage,
            0,
            0,
            image.width,
            image.height,
            x,
            y,
            image.width,
            image.height,
            image.json
          );
        } else {
          var sprite = t.a;
          var image = t.b;
          return A9(
            $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage,
            sprite.x,
            sprite.y,
            sprite.width,
            sprite.height,
            x,
            y,
            sprite.width,
            sprite.height,
            image.json
          );
        }
      })(),
      cmds
    );
  });
  var $linsyking$elm_canvas$Canvas$renderTexture = F3(function (_v0, t, cmds) {
    var x = _v0.a;
    var y = _v0.b;
    return A4($linsyking$elm_canvas$Canvas$Internal$Texture$drawTexture, x, y, t, cmds);
  });
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore = A2(
    $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
    "restore",
    _List_Nil
  );
  var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$save = A2(
    $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
    "save",
    _List_Nil
  );
  var $linsyking$elm_canvas$Canvas$renderDrawable = F3(function (drawable, drawOp, cmds) {
    switch (drawable.$) {
      case "DrawableText":
        var txt = drawable.a;
        return A3($linsyking$elm_canvas$Canvas$renderText, drawOp, txt, cmds);
      case "DrawableShapes":
        var ss = drawable.a;
        return A2(
          $linsyking$elm_canvas$Canvas$renderShapeDrawOp,
          drawOp,
          A3(
            $elm$core$List$foldl,
            $linsyking$elm_canvas$Canvas$renderShape,
            A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath, cmds),
            ss
          )
        );
      case "DrawableTexture":
        var p = drawable.a;
        var t = drawable.b;
        return A3($linsyking$elm_canvas$Canvas$renderTexture, p, t, cmds);
      case "DrawableClear":
        var p = drawable.a;
        var w = drawable.b;
        var h = drawable.c;
        return A4($linsyking$elm_canvas$Canvas$renderClear, p, w, h, cmds);
      case "DrawableGroup":
        var renderables = drawable.a;
        return A3($linsyking$elm_canvas$Canvas$renderGroup, drawOp, renderables, cmds);
      default:
        return cmds;
    }
  });
  var $linsyking$elm_canvas$Canvas$renderGroup = F3(function (drawOp, renderables, cmds) {
    var cmdsWithDraw = (function () {
      switch (drawOp.$) {
        case "NotSpecified":
          return cmds;
        case "Fill":
          var fill = drawOp.a;
          return A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(fill), cmds);
        case "Stroke":
          var stroke = drawOp.a;
          return A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(stroke), cmds);
        default:
          var fc = drawOp.a;
          var sc = drawOp.b;
          return A2(
            $elm$core$List$cons,
            $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(fc),
            A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(sc), cmds)
          );
      }
    })();
    return A3($elm$core$List$foldl, $linsyking$elm_canvas$Canvas$renderOne(drawOp), cmdsWithDraw, renderables);
  });
  var $linsyking$elm_canvas$Canvas$renderOne = F3(function (parentDrawOp, _v0, cmds) {
    var commands = _v0.a.commands;
    var drawable = _v0.a.drawable;
    var drawOp = _v0.a.drawOp;
    return A2(
      $elm$core$List$cons,
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore,
      A3(
        $linsyking$elm_canvas$Canvas$renderDrawable,
        drawable,
        A2($linsyking$elm_canvas$Canvas$mergeDrawOp, parentDrawOp, drawOp),
        _Utils_ap(commands, A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$save, cmds))
      )
    );
  });
  var $linsyking$elm_canvas$Canvas$render = function (entities) {
    return A3(
      $elm$core$List$foldl,
      $linsyking$elm_canvas$Canvas$renderOne($linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified),
      $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty,
      entities
    );
  };
  var $elm$virtual_dom$VirtualDom$attribute = F2(function (key, value) {
    return A2(_VirtualDom_attribute, _VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
  });
  var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
  var $linsyking$elm_canvas$Canvas$Internal$Texture$TImage = function (a) {
    return { $: "TImage", a: a };
  };
  var $linsyking$elm_canvas$Canvas$Internal$Texture$decodeTextureImage = A2(
    $elm$json$Json$Decode$andThen,
    function (image) {
      return A4(
        $elm$json$Json$Decode$map3,
        F3(function (tagName, width, height) {
          return tagName === "IMG"
            ? $elm$core$Maybe$Just($linsyking$elm_canvas$Canvas$Internal$Texture$TImage({ height: height, json: image, width: width }))
            : $elm$core$Maybe$Nothing;
        }),
        A2($elm$json$Json$Decode$field, "tagName", $elm$json$Json$Decode$string),
        A2($elm$json$Json$Decode$field, "width", $elm$json$Json$Decode$float),
        A2($elm$json$Json$Decode$field, "height", $elm$json$Json$Decode$float)
      );
    },
    $elm$json$Json$Decode$value
  );
  var $linsyking$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent = A2(
    $elm$json$Json$Decode$field,
    "target",
    $linsyking$elm_canvas$Canvas$Internal$Texture$decodeTextureImage
  );
  var $elm$html$Html$img = _VirtualDom_node("img");
  var $elm$virtual_dom$VirtualDom$Normal = function (a) {
    return { $: "Normal", a: a };
  };
  var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
  var $elm$html$Html$Events$on = F2(function (event, decoder) {
    return A2($elm$virtual_dom$VirtualDom$on, event, $elm$virtual_dom$VirtualDom$Normal(decoder));
  });
  var $elm$html$Html$Attributes$stringProperty = F2(function (key, string) {
    return A2(_VirtualDom_property, key, $elm$json$Json$Encode$string(string));
  });
  var $elm$html$Html$Attributes$src = function (url) {
    return A2($elm$html$Html$Attributes$stringProperty, "src", _VirtualDom_noJavaScriptOrHtmlUri(url));
  };
  var $linsyking$elm_canvas$Canvas$renderTextureSource = function (textureSource) {
    var url = textureSource.a;
    var onLoad = textureSource.b;
    return _Utils_Tuple2(
      url,
      A2(
        $elm$html$Html$img,
        _List_fromArray([
          $elm$html$Html$Attributes$src(url),
          A2($elm$html$Html$Attributes$attribute, "crossorigin", "anonymous"),
          A2($elm$html$Html$Attributes$style, "display", "none"),
          A2(
            $elm$html$Html$Events$on,
            "load",
            A2($elm$json$Json$Decode$map, onLoad, $linsyking$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent)
          ),
          A2($elm$html$Html$Events$on, "error", $elm$json$Json$Decode$succeed(onLoad($elm$core$Maybe$Nothing))),
        ]),
        _List_Nil
      )
    );
  };
  var $elm$html$Html$Attributes$width = function (n) {
    return A2(_VirtualDom_attribute, "width", $elm$core$String$fromInt(n));
  };
  var $linsyking$elm_canvas$Canvas$toHtmlWith = F3(function (options, attrs, entities) {
    return A3(
      $elm$html$Html$Keyed$node,
      "elm-canvas",
      A2(
        $elm$core$List$cons,
        $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands($linsyking$elm_canvas$Canvas$render(entities)),
        A2(
          $elm$core$List$cons,
          $elm$html$Html$Attributes$height(options.height),
          A2($elm$core$List$cons, $elm$html$Html$Attributes$width(options.width), attrs)
        )
      ),
      A2(
        $elm$core$List$cons,
        _Utils_Tuple2("__canvas", $linsyking$elm_canvas$Canvas$cnvs),
        A2($elm$core$List$map, $linsyking$elm_canvas$Canvas$renderTextureSource, options.textures)
      )
    );
  });
  var $author$project$Main$view = F2(function (_v0, model) {
    var canvas = A3(
      $linsyking$elm_canvas$Canvas$toHtmlWith,
      {
        height: model.currentGlobalData.realHeight,
        textures: $author$project$Lib$Resources$Base$getTexture,
        width: model.currentGlobalData.realWidth,
      },
      _List_fromArray([
        A2($elm$html$Html$Attributes$style, "left", $elm$core$String$fromFloat(model.currentGlobalData.startLeft)),
        A2($elm$html$Html$Attributes$style, "top", $elm$core$String$fromFloat(model.currentGlobalData.startTop)),
        A2($elm$html$Html$Attributes$style, "position", "fixed"),
      ]),
      _List_fromArray([
        $author$project$MainConfig$background(model.currentGlobalData),
        A2(
          $author$project$Lib$Scene$SceneLoader$getCurrentScene(model).view,
          { globalData: model.currentGlobalData, msg: $author$project$Base$NullMsg, t: model.time },
          model.currentData
        ),
      ])
    );
    return A2(
      $elm$html$Html$div,
      _List_Nil,
      (function () {
        var _v1 = model.currentGlobalData.extraHTML;
        if (_v1.$ === "Just") {
          var x = _v1.a;
          return _List_fromArray([canvas, x]);
        } else {
          return _List_fromArray([canvas]);
        }
      })()
    );
  });
  var $author$project$Main$main = $MartinSStewart$elm_audio$Audio$elementWithAudio({
    audio: $author$project$Common$audio,
    audioPort: { fromJS: $author$project$Lib$Audio$Audio$audioPortFromJS, toJS: $author$project$Lib$Audio$Audio$audioPortToJS },
    init: $author$project$Main$init,
    subscriptions: $author$project$Main$subscriptions,
    update: $author$project$Main$update,
    view: $author$project$Main$view,
  });
  _Platform_export({
    Main: {
      init: $author$project$Main$main(
        A2(
          $elm$json$Json$Decode$andThen,
          function (windowWidth) {
            return A2(
              $elm$json$Json$Decode$andThen,
              function (windowHeight) {
                return A2(
                  $elm$json$Json$Decode$andThen,
                  function (info) {
                    return $elm$json$Json$Decode$succeed({ info: info, windowHeight: windowHeight, windowWidth: windowWidth });
                  },
                  A2($elm$json$Json$Decode$field, "info", $elm$json$Json$Decode$string)
                );
              },
              A2($elm$json$Json$Decode$field, "windowHeight", $elm$json$Json$Decode$int)
            );
          },
          A2($elm$json$Json$Decode$field, "windowWidth", $elm$json$Json$Decode$int)
        )
      )(0),
    },
  });
})(this);
