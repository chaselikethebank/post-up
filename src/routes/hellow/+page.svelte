<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<h1 class="text-blue-900">hollow whirled</h1>
<div class="text-3xl text-green font-bold underline">
{data.title}
{data.text}
</div>
