// Generated by purs bundle 0.14.1
var PS = {};
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Control.Alt"] = $PS["Control.Alt"] || {};
  var exports = $PS["Control.Alt"];                          
  var Alt = function (Functor0, alt) {
      this.Functor0 = Functor0;
      this.alt = alt;
  };
  exports["Alt"] = Alt;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
  var exports = $PS["Control.Applicative"];          
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  exports["Applicative"] = Applicative;
  exports["pure"] = pure;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Control.Plus"] = $PS["Control.Plus"] || {};
  var exports = $PS["Control.Plus"];                     
  var Plus = function (Alt0, empty) {
      this.Alt0 = Alt0;
      this.empty = empty;
  };       
  var empty = function (dict) {
      return dict.empty;
  };
  exports["Plus"] = Plus;
  exports["empty"] = empty;
})(PS);
(function(exports) {
  "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Unit"] = $PS["Data.Unit"] || {};
  var exports = $PS["Data.Unit"];
  var $foreign = $PS["Data.Unit"];
  exports["unit"] = $foreign.unit;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Control.Alternative"] = $PS["Control.Alternative"] || {};
  var exports = $PS["Control.Alternative"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Plus = $PS["Control.Plus"];
  var Data_Unit = $PS["Data.Unit"];                
  var Alternative = function (Applicative0, Plus1) {
      this.Applicative0 = Applicative0;
      this.Plus1 = Plus1;
  };
  var guard = function (dictAlternative) {
      return function (v) {
          if (v) {
              return Control_Applicative.pure(dictAlternative.Applicative0())(Data_Unit.unit);
          };
          if (!v) {
              return Control_Plus.empty(dictAlternative.Plus1());
          };
          throw new Error("Failed pattern match at Control.Alternative (line 48, column 1 - line 48, column 54): " + [ v.constructor.name ]);
      };
  };
  exports["Alternative"] = Alternative;
  exports["guard"] = guard;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Control.Apply"] = $PS["Control.Apply"] || {};
  var exports = $PS["Control.Apply"];                
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Control.Bind"] = $PS["Control.Bind"] || {};
  var exports = $PS["Control.Bind"];                 
  var Bind = function (Apply0, bind) {
      this.Apply0 = Apply0;
      this.bind = bind;
  };
  var Discard = function (discard) {
      this.discard = discard;
  };
  var discard = function (dict) {
      return dict.discard;
  };                     
  var bind = function (dict) {
      return dict.bind;
  }; 
  var discardUnit = new Discard(function (dictBind) {
      return bind(dictBind);
  });
  exports["Bind"] = Bind;
  exports["bind"] = bind;
  exports["discard"] = discard;
  exports["discardUnit"] = discardUnit;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Boolean"] = $PS["Data.Boolean"] || {};
  var exports = $PS["Data.Boolean"];
  var otherwise = true;
  exports["otherwise"] = otherwise;
})(PS);
(function(exports) {
  "use strict";

  exports.concatString = function (s1) {
    return function (s2) {
      return s1 + s2;
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Semigroup"] = $PS["Data.Semigroup"] || {};
  var exports = $PS["Data.Semigroup"];
  var $foreign = $PS["Data.Semigroup"];
  var Semigroup = function (append) {
      this.append = append;
  }; 
  var semigroupString = new Semigroup($foreign.concatString);
  var append = function (dict) {
      return dict.append;
  };
  exports["Semigroup"] = Semigroup;
  exports["append"] = append;
  exports["semigroupString"] = semigroupString;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Monoid"] = $PS["Data.Monoid"] || {};
  var exports = $PS["Data.Monoid"];
  var Data_Semigroup = $PS["Data.Semigroup"];
  var Monoid = function (Semigroup0, mempty) {
      this.Semigroup0 = Semigroup0;
      this.mempty = mempty;
  };                 
  var monoidString = new Monoid(function () {
      return Data_Semigroup.semigroupString;
  }, "");
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["mempty"] = mempty;
  exports["monoidString"] = monoidString;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Foldable"] = $PS["Data.Foldable"] || {};
  var exports = $PS["Data.Foldable"];
  var Data_Monoid = $PS["Data.Monoid"];
  var Data_Semigroup = $PS["Data.Semigroup"];      
  var Foldable = function (foldMap, foldl, foldr) {
      this.foldMap = foldMap;
      this.foldl = foldl;
      this.foldr = foldr;
  };
  var foldr = function (dict) {
      return dict.foldr;
  };
  var foldl = function (dict) {
      return dict.foldl;
  };
  var intercalate = function (dictFoldable) {
      return function (dictMonoid) {
          return function (sep) {
              return function (xs) {
                  var go = function (v) {
                      return function (x) {
                          if (v.init) {
                              return {
                                  init: false,
                                  acc: x
                              };
                          };
                          return {
                              init: false,
                              acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
                          };
                      };
                  };
                  return (foldl(dictFoldable)(go)({
                      init: true,
                      acc: Data_Monoid.mempty(dictMonoid)
                  })(xs)).acc;
              };
          };
      };
  };
  exports["Foldable"] = Foldable;
  exports["foldr"] = foldr;
  exports["foldl"] = foldl;
  exports["intercalate"] = intercalate;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Function"] = $PS["Data.Function"] || {};
  var exports = $PS["Data.Function"];
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  exports["flip"] = flip;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Functor"] = $PS["Data.Functor"] || {};
  var exports = $PS["Data.Functor"];                 
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS);
(function(exports) {
  "use strict";

  exports.showIntImpl = function (n) {
    return n.toString();
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.Show"] = $PS["Data.Show"] || {};
  var exports = $PS["Data.Show"];
  var $foreign = $PS["Data.Show"];
  var Show = function (show) {
      this.show = show;
  };                                                 
  var showInt = new Show($foreign.showIntImpl);
  var show = function (dict) {
      return dict.show;
  };
  exports["Show"] = Show;
  exports["show"] = show;
  exports["showInt"] = showInt;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.List.Types"] = $PS["Data.List.Types"] || {};
  var exports = $PS["Data.List.Types"];
  var Control_Alt = $PS["Control.Alt"];
  var Control_Alternative = $PS["Control.Alternative"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];
  var Control_Bind = $PS["Control.Bind"];
  var Control_Plus = $PS["Control.Plus"];
  var Data_Foldable = $PS["Data.Foldable"];
  var Data_Function = $PS["Data.Function"];
  var Data_Functor = $PS["Data.Functor"];
  var Data_Monoid = $PS["Data.Monoid"];
  var Data_Semigroup = $PS["Data.Semigroup"];
  var Data_Show = $PS["Data.Show"];                              
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();
  var listMap = function (f) {
      var chunkedRevMap = function ($copy_chunksAcc) {
          return function ($copy_v) {
              var $tco_var_chunksAcc = $copy_chunksAcc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(chunksAcc, v) {
                  if (v instanceof Cons && (v.value1 instanceof Cons && v.value1.value1 instanceof Cons)) {
                      $tco_var_chunksAcc = new Cons(v, chunksAcc);
                      $copy_v = v.value1.value1.value1;
                      return;
                  };
                  var unrolledMap = function (v1) {
                      if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Nil)) {
                          return new Cons(f(v1.value0), new Cons(f(v1.value1.value0), Nil.value));
                      };
                      if (v1 instanceof Cons && v1.value1 instanceof Nil) {
                          return new Cons(f(v1.value0), Nil.value);
                      };
                      return Nil.value;
                  };
                  var reverseUnrolledMap = function ($copy_v1) {
                      return function ($copy_acc) {
                          var $tco_var_v1 = $copy_v1;
                          var $tco_done1 = false;
                          var $tco_result;
                          function $tco_loop(v1, acc) {
                              if (v1 instanceof Cons && (v1.value0 instanceof Cons && (v1.value0.value1 instanceof Cons && v1.value0.value1.value1 instanceof Cons))) {
                                  $tco_var_v1 = v1.value1;
                                  $copy_acc = new Cons(f(v1.value0.value0), new Cons(f(v1.value0.value1.value0), new Cons(f(v1.value0.value1.value1.value0), acc)));
                                  return;
                              };
                              $tco_done1 = true;
                              return acc;
                          };
                          while (!$tco_done1) {
                              $tco_result = $tco_loop($tco_var_v1, $copy_acc);
                          };
                          return $tco_result;
                      };
                  };
                  $tco_done = true;
                  return reverseUnrolledMap(chunksAcc)(unrolledMap(v));
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_chunksAcc, $copy_v);
              };
              return $tco_result;
          };
      };
      return chunkedRevMap(Nil.value);
  };
  var functorList = new Data_Functor.Functor(listMap);                 
  var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
      return function (f) {
          return Data_Foldable.foldl(foldableList)(function (acc) {
              var $204 = Data_Semigroup.append(dictMonoid.Semigroup0())(acc);
              return function ($205) {
                  return $204(f($205));
              };
          })(Data_Monoid.mempty(dictMonoid));
      };
  }, function (f) {
      var go = function ($copy_b) {
          return function ($copy_v) {
              var $tco_var_b = $copy_b;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(b, v) {
                  if (v instanceof Nil) {
                      $tco_done = true;
                      return b;
                  };
                  if (v instanceof Cons) {
                      $tco_var_b = f(b)(v.value0);
                      $copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List.Types (line 112, column 12 - line 114, column 30): " + [ v.constructor.name ]);
              };
              while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_b, $copy_v);
              };
              return $tco_result;
          };
      };
      return go;
  }, function (f) {
      return function (b) {
          var rev = (function () {
              var go = function ($copy_acc) {
                  return function ($copy_v) {
                      var $tco_var_acc = $copy_acc;
                      var $tco_done1 = false;
                      var $tco_result;
                      function $tco_loop(acc, v) {
                          if (v instanceof Nil) {
                              $tco_done1 = true;
                              return acc;
                          };
                          if (v instanceof Cons) {
                              $tco_var_acc = new Cons(v.value0, acc);
                              $copy_v = v.value1;
                              return;
                          };
                          throw new Error("Failed pattern match at Data.List.Types (line 108, column 7 - line 108, column 23): " + [ acc.constructor.name, v.constructor.name ]);
                      };
                      while (!$tco_done1) {
                          $tco_result = $tco_loop($tco_var_acc, $copy_v);
                      };
                      return $tco_result;
                  };
              };
              return go(Nil.value);
          })();
          var $206 = Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b);
          return function ($207) {
              return $206(rev($207));
          };
      };
  });
  var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
      return function (ys) {
          return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
      };
  });
  var showList = function (dictShow) {
      return new Data_Show.Show(function (v) {
          if (v instanceof Nil) {
              return "Nil";
          };
          return "(" + (Data_Foldable.intercalate(foldableList)(Data_Monoid.monoidString)(" : ")(Data_Functor.map(functorList)(Data_Show.show(dictShow))(v)) + " : Nil)");
      });
  }; 
  var applyList = new Control_Apply.Apply(function () {
      return functorList;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nil) {
              return Nil.value;
          };
          if (v instanceof Cons) {
              return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
          };
          throw new Error("Failed pattern match at Data.List.Types (line 158, column 1 - line 160, column 48): " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var bindList = new Control_Bind.Bind(function () {
      return applyList;
  }, function (v) {
      return function (v1) {
          if (v instanceof Nil) {
              return Nil.value;
          };
          if (v instanceof Cons) {
              return Data_Semigroup.append(semigroupList)(v1(v.value0))(Control_Bind.bind(bindList)(v.value1)(v1));
          };
          throw new Error("Failed pattern match at Data.List.Types (line 165, column 1 - line 167, column 37): " + [ v.constructor.name, v1.constructor.name ]);
      };
  });
  var applicativeList = new Control_Applicative.Applicative(function () {
      return applyList;
  }, function (a) {
      return new Cons(a, Nil.value);
  });                                              
  var altList = new Control_Alt.Alt(function () {
      return functorList;
  }, Data_Semigroup.append(semigroupList));
  var plusList = new Control_Plus.Plus(function () {
      return altList;
  }, Nil.value);
  var alternativeList = new Control_Alternative.Alternative(function () {
      return applicativeList;
  }, function () {
      return plusList;
  });
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
  exports["showList"] = showList;
  exports["applicativeList"] = applicativeList;
  exports["bindList"] = bindList;
  exports["alternativeList"] = alternativeList;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Data.List"] = $PS["Data.List"] || {};
  var exports = $PS["Data.List"];
  var Data_Boolean = $PS["Data.Boolean"];
  var Data_List_Types = $PS["Data.List.Types"];
  var singleton = function (a) {
      return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
  };
  var range = function (start) {
      return function (end) {
          if (start === end) {
              return singleton(start);
          };
          if (Data_Boolean.otherwise) {
              var go = function ($copy_s) {
                  return function ($copy_e) {
                      return function ($copy_step) {
                          return function ($copy_rest) {
                              var $tco_var_s = $copy_s;
                              var $tco_var_e = $copy_e;
                              var $tco_var_step = $copy_step;
                              var $tco_done = false;
                              var $tco_result;
                              function $tco_loop(s, e, step, rest) {
                                  if (s === e) {
                                      $tco_done = true;
                                      return new Data_List_Types.Cons(s, rest);
                                  };
                                  if (Data_Boolean.otherwise) {
                                      $tco_var_s = s + step | 0;
                                      $tco_var_e = e;
                                      $tco_var_step = step;
                                      $copy_rest = new Data_List_Types.Cons(s, rest);
                                      return;
                                  };
                                  throw new Error("Failed pattern match at Data.List (line 152, column 3 - line 153, column 65): " + [ s.constructor.name, e.constructor.name, step.constructor.name, rest.constructor.name ]);
                              };
                              while (!$tco_done) {
                                  $tco_result = $tco_loop($tco_var_s, $tco_var_e, $tco_var_step, $copy_rest);
                              };
                              return $tco_result;
                          };
                      };
                  };
              };
              return go(end)(start)((function () {
                  var $225 = start > end;
                  if ($225) {
                      return 1;
                  };
                  return -1 | 0;
              })())(Data_List_Types.Nil.value);
          };
          throw new Error("Failed pattern match at Data.List (line 148, column 1 - line 148, column 32): " + [ start.constructor.name, end.constructor.name ]);
      };
  };
  exports["range"] = range;
})(PS);
(function(exports) {
  "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Effect.Console"] = $PS["Effect.Console"] || {};
  var exports = $PS["Effect.Console"];
  var $foreign = $PS["Effect.Console"];
  exports["log"] = $foreign.log;
})(PS);
(function($PS) {
  "use strict";
  $PS["GaussFactorialsProduct"] = $PS["GaussFactorialsProduct"] || {};
  var exports = $PS["GaussFactorialsProduct"];
  var Control_Alternative = $PS["Control.Alternative"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Bind = $PS["Control.Bind"];
  var Data_List = $PS["Data.List"];
  var Data_List_Types = $PS["Data.List.Types"];                

  // Two integers are relatively prime if they share no common positive
  // factors (divisors) except 1.
  // The Gauss Factorial of a number $n$ is defined as the product of all positive numbers $\leq n$ that are relatively prime to $n$.
  // For example $g(10)=1\times 3\times 7\times 9 = 189$.
  // Also we define $ G(n) = \prod_{i=1}^{n}g(i)$
  // You are given $G(10) = 23044331520000$.
  // Find $G(10^8)$. Give your answer modulo $1\,000\,000\,007$.
  var nums = Control_Bind.bind(Data_List_Types.bindList)(Data_List.range(1)(10))(function (a) {
      return Control_Bind.discard(Control_Bind.discardUnit)(Data_List_Types.bindList)(Control_Alternative.guard(Data_List_Types.alternativeList)(a > 5))(function () {
          return Control_Applicative.pure(Data_List_Types.applicativeList)(a);
      });
  });
  exports["nums"] = nums;
})(PS);
(function($PS) {
  // Generated by purs version 0.14.1
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Data_List_Types = $PS["Data.List.Types"];
  var Data_Show = $PS["Data.Show"];
  var Effect_Console = $PS["Effect.Console"];
  var GaussFactorialsProduct = $PS["GaussFactorialsProduct"];                
  var main = Effect_Console.log(Data_Show.show(Data_List_Types.showList(Data_Show.showInt))(GaussFactorialsProduct.nums));
  exports["main"] = main;
})(PS);
module.exports = PS["Main"];
