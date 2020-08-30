<script>
	import Editor from './Editor.svelte'

	let value = `console.log('test')`
</script>

<Editor bind:value />

<pre>
	{value}
</pre>