/// <reference path='fourslash.ts' />

// @Filename: test.ts
////namespace A { export interface B {} }
////class A {}
////interface A {}
////
////var x: A; // do getDefinitionAtPosition on the A reference here
////var /*r*/r = x;

goTo.marker('r');
// We should get 3 definition locations:
// 1. namespace A
// 2. class A
// 3. interface A
// And each should have the correct kind (module, class, interface), not all class
verify.goToDefinition('A', [
    { kind: ts.ScriptElementKind.moduleElement, fileName: /test\.ts/ },
    { kind: ts.ScriptElementKind.classElement, fileName: /test\.ts/ },
    { kind: ts.ScriptElementKind.interfaceElement, fileName: /test\.ts/ },
]);