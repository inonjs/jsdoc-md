/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`lib/test TAP jsdocAstToMember > A method. 1`] = `
{
  "kind": "function",
  "namepath": "A#b",
  "memberof": "A",
  "membership": "#",
  "name": "b",
  "description": "Description.",
  "tags": [
    {
      "title": "kind",
      "description": null,
      "kind": "function"
    },
    {
      "title": "name",
      "description": null,
      "name": "A#b"
    },
    {
      "title": "param",
      "description": "Description.",
      "type": {
        "type": "NameExpression",
        "name": "number"
      },
      "name": "a"
    }
  ]
}
`

exports[`lib/test TAP membersToOutline > Outline. 1`] = `
[
  {
    "kind": "class",
    "namepath": "A",
    "name": "A",
    "description": "Description.",
    "tags": [
      {
        "title": "kind",
        "description": null,
        "kind": "class"
      },
      {
        "title": "name",
        "description": null,
        "name": "A"
      },
      {
        "title": "param",
        "description": "Description.",
        "type": {
          "type": "NameExpression",
          "name": "A"
        },
        "name": "a"
      }
    ],
    "members": [
      {
        "kind": "function",
        "namepath": "A#methodName1",
        "memberof": "A",
        "membership": "#",
        "name": "methodName1",
        "description": "Description.",
        "tags": [
          {
            "title": "kind",
            "description": null,
            "kind": "function"
          },
          {
            "title": "name",
            "description": null,
            "name": "A#methodName1"
          },
          {
            "title": "param",
            "description": "Description.",
            "type": {
              "type": "NameExpression",
              "name": "A"
            },
            "name": "a"
          }
        ],
        "members": []
      },
      {
        "kind": "function",
        "namepath": "A#methodName2",
        "memberof": "A",
        "membership": "#",
        "name": "methodName2",
        "description": "Description.",
        "tags": [
          {
            "title": "kind",
            "description": null,
            "kind": "function"
          },
          {
            "title": "name",
            "description": null,
            "name": "A#methodName2"
          },
          {
            "title": "param",
            "description": "Description.",
            "type": {
              "type": "NameExpression",
              "name": "A"
            },
            "name": "a"
          }
        ],
        "members": []
      }
    ]
  }
]
`

exports[`lib/test TAP mdToMdAst > Markdown AST. 1`] = `
[
  {
    "type": "paragraph",
    "children": [
      {
        "type": "link",
        "title": null,
        "url": "https://npm.im/babel-plugin-jsdoc-md",
        "children": [
          {
            "type": "text",
            "value": "a",
            "position": {
              "start": {
                "line": 1,
                "column": 2,
                "offset": 1
              },
              "end": {
                "line": 1,
                "column": 3,
                "offset": 2
              },
              "indent": []
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1,
            "offset": 0
          },
          "end": {
            "line": 1,
            "column": 42,
            "offset": 41
          },
          "indent": []
        }
      }
    ],
    "position": {
      "start": {
        "line": 1,
        "column": 1,
        "offset": 0
      },
      "end": {
        "line": 1,
        "column": 42,
        "offset": 41
      },
      "indent": []
    }
  }
]
`

exports[`lib/test TAP outlineToMdAst > Markdown. 1`] = `
{
  "type": "root",
  "children": [
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "Table of contents"
        }
      ],
      "data": {
        "hProperties": {
          "id": "table-of-contents"
        },
        "id": "table-of-contents"
      }
    },
    {
      "type": "list",
      "ordered": false,
      "children": [
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#typedef-a",
                  "children": [
                    {
                      "type": "text",
                      "value": "typedef A"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#constant-b",
                  "children": [
                    {
                      "type": "text",
                      "value": "constant B"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#class-c",
                  "children": [
                    {
                      "type": "text",
                      "value": "class C"
                    }
                  ]
                }
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "children": [
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-static-method-a",
                          "children": [
                            {
                              "type": "text",
                              "value": "C static method a"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-instance-method-b",
                          "children": [
                            {
                              "type": "text",
                              "value": "C instance method b"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-inner-function-c",
                          "children": [
                            {
                              "type": "text",
                              "value": "C inner function c"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "listItem",
                  "loose": false,
                  "children": [
                    {
                      "type": "paragraph",
                      "children": [
                        {
                          "type": "link",
                          "title": null,
                          "url": "#c-static-property-e",
                          "children": [
                            {
                              "type": "text",
                              "value": "C static property e"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "loose": false,
          "children": [
            {
              "type": "paragraph",
              "children": [
                {
                  "type": "link",
                  "title": null,
                  "url": "#function-d",
                  "children": [
                    {
                      "type": "text",
                      "value": "function d"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "typedef A"
        }
      ],
      "data": {
        "hProperties": {
          "id": "typedef-a"
        },
        "id": "typedef-a"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Property"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "b"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "constant B"
        }
      ],
      "data": {
        "hProperties": {
          "id": "constant-b"
        },
        "id": "constant-b"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "class C"
        }
      ],
      "data": {
        "hProperties": {
          "id": "class-c"
        },
        "id": "class-c"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C static method a"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-static-method-a"
        },
        "id": "c-static-method-a"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "b"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C instance method b"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-instance-method-b"
        },
        "id": "c-instance-method-b"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C inner function c"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-inner-function-c"
        },
        "id": "c-inner-function-c"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "heading",
      "depth": 4,
      "children": [
        {
          "type": "text",
          "value": "C static property e"
        }
      ],
      "data": {
        "hProperties": {
          "id": "c-static-property-e"
        },
        "id": "c-static-property-e"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "heading",
      "depth": 3,
      "children": [
        {
          "type": "text",
          "value": "function d"
        }
      ],
      "data": {
        "hProperties": {
          "id": "function-d"
        },
        "id": "function-d"
      }
    },
    {
      "type": "paragraph",
      "children": [
        {
          "type": "text",
          "value": "Description.",
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 13,
              "offset": 12
            },
            "indent": []
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 13,
          "offset": 12
        },
        "indent": []
      }
    },
    {
      "type": "table",
      "children": [
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Parameter"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Type"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "Description"
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "children": [
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "text",
                  "value": "a"
                }
              ]
            },
            {
              "type": "tableCell",
              "children": []
            },
            {
              "type": "tableCell",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "text",
                      "value": "Description.",
                      "position": {
                        "start": {
                          "line": 1,
                          "column": 1,
                          "offset": 0
                        },
                        "end": {
                          "line": 1,
                          "column": 13,
                          "offset": 12
                        },
                        "indent": []
                      }
                    }
                  ],
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 1,
                      "offset": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "indent": []
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
`

exports[`lib/test TAP babelPluginJsdocMd > File content. 1`] = `
# Preserve

## Target

### Table of contents

- [constant A](#constant-a)
- [class B](#class-b)
  - [Examples](#examples)
  - [B inner typedef A](#b-inner-typedef-a)
  - [B static property b](#b-static-property-b)
  - [B instance property c](#b-instance-property-c)
  - [B static method d](#b-static-method-d)
  - [B instance method e](#b-instance-method-e)
- [function c](#function-c)
  - [See](#see)

### constant A

Description.

### class B

Description, here is a **bold** word.

| Parameter | Type | Description                           |
| --------- | ---- | ------------------------------------- |
| a         |      | Description, here is a **bold** word. |

#### Examples

Construct a new instance, here is a **bold** word.

    const b = new B()

Construct a new instance with options.

    const b = new B(true)

#### B inner typedef A

Description.

| Property | Type | Description                           |
| -------- | ---- | ------------------------------------- |
| a        |      | Description, here is a **bold** word. |
| b        |      | Description.                          |

#### B static property b

Description.

#### B instance property c

Description.

#### B static method d

Description.

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| a         |      | Description. |
| b         |      | Description. |

#### B instance method e

Description.

### function c

Description.

| Parameter | Type | Description  |
| --------- | ---- | ------------ |
| a         |      | Description. |

#### See

- [babel-plugin-jsdoc-md on Github](https://github.com/jaydenseric/babel-plugin-jsdoc-md).
- [babel-plugin-jsdoc-md on npm](https://npm.im/babel-plugin-jsdoc-md).

## Preserve

`