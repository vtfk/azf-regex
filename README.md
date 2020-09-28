# RegexPattern

## Usage

*replacement* is optional in all calls. It not set it defaults to '_'

### Single replacer
```javascript
{
	"text": "Rare set of # tags and other $%&$##$%&/()",
	"pattern": "[^a-zA-Z0-9-./]",
	"replacement": "_"
}
```

### Multiple replacers on same text
```javascript
{
	"text": "Rare set of # tags and other $%&$##$%&/() øØÆæåÅ",
	"chainedReplacers": [
		{
			"pattern": "[æ]",
			"replacement": "ae"
		},
		{
			"pattern": "[ø]",
			"replacement": "oe"
		},
		{
			"pattern": "[å]",
			"replacement": "aa"
		},
		{
			"pattern": "[Æ]",
			"replacement": "Ae"
		},
		{
			"pattern": "[Ø]",
			"replacement": "O"
		},
		{
			"pattern": "[Å]",
			"replacement": "Aa"
		},
		{
            "pattern": "[^a-zA-Z0-9-./]"
		}
	]
}
```