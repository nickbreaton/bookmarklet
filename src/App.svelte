<script>
	import Editor from './Editor.svelte'

	let value = `console.log('hello')`
</script>

<Editor bind:value />

<pre>
	{value}
</pre>