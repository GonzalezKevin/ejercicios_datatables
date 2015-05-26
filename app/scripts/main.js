'use strict';
$(document).ready(function() {
	$('#miTabla').DataTable({
		'paging':true,
		'ordering':true,
		'searching':true,
		'order':[[0, 'desc']],
		"columnDefs": [
            {
                "targets": [ 2 ],
                "visible": false
            },
            {
                "targets": [ 3 ],
                "visible": false
            },
            {
                "targets": [ 4 ],
                "searchable": false
            }
        ],
        "stateSave": true,
        "language": {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "Nothing found - sorry",
            "info": "Showing page _PAGE_ of _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
	});
});