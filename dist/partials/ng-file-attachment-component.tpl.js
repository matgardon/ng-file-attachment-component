(function(module) {
try {
  module = angular.module('file-attachment-component-tpl');
} catch (e) {
  module = angular.module('file-attachment-component-tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('component/file-attachment.tpl.html',
    '<div id="file-attachment-container" class="container-fuild" cg-busy="vm.httpPromises"><div class="row"><div class="col-lg-12"><div ng-if="vm.attachedFileList && vm.attachedFileList.length"><table st-table="vm.attachedFileList" st-safe-src="vm.attachedFileListSource" id="file-attachment-table" class="table table-bordered table-hover"><thead><tr><th class="t-header">FileName</th><th class="t-header">Origin</th><th class="t-header">Uploaded By</th><th class="t-header">Creation Date</th><th class="t-header">Comment</th><th class="t-header">Actions</th></tr></thead><tbody><tr ng-repeat="attachedFileEntry in vm.attachedFileList"><td>{{ attachedFileEntry.FileName }}</td><td>{{ attachedFileEntry.FileOrigin }}</td><td>{{ attachedFileEntry.UploaderInformation.DisplayName }} ({{attachedFileEntry.UploaderInformation.Email}})</td><td>{{ attachedFileEntry.CreationDate }}</td><td ng-if="!vm.editCommentMode"><div class="align-text-with-btn-inside-table-cell">{{ attachedFileEntry.Comment }}</div><button type="button" ng-click="vm.editCommentMode = true" class="btn btn-primary btn-sm pull-right"><i class="fa fa-pencil" aria-hidden="true"></i></button></td><td ng-if="vm.editCommentMode"><input type="text" class="form-control" id="input-comment-field" ng-model="attachedFileEntry.UpdatedComment" ng-max-length="255" placeholder="{{attachedFileEntry.Comment}}"><div id="edit-comment-action-btns"><button type="button" ng-click="vm.updateFileAttachmentComment(attachedFileEntry, attachedFileEntry.UpdatedComment)" class="btn btn-primary btn-sm"><i class="fa fa-check" aria-hidden="true"></i></button> <button type="button" ng-click="vm.cancelEditComment()" class="btn btn-danger btn-sm"><i class="fa fa-times" aria-hidden="true"></i></button></div></td><td class="text-center"><button type="button" ng-click="vm.downloadAttachedFile(attachedFileEntry)" class="btn btn-primary btn-sm"><i class="fa fa-download" aria-hidden="true"></i></button> <button type="button" ng-click="vm.deleteAttachedFile(attachedFileEntry)" class="btn btn-danger btn-sm"><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr></tbody><tfoot ng-show="vm.atttachedFileList && (vm.attachedFileList.length > vm.nbOfItemsPerPage)">.n<tr><td colspan="6" class="text-center"><div st-pagination st-template="templates/smart-table/smart-table-pagination.tpl.html" st-items-by-page="vm.nbOfItemsPerPage" st-displayed-pages="7"></div></td></tr></tfoot></table></div><div ng-if="!vm.attachedFileList || !vm.attachedFileList.length"><div class="alert alert-info text-center" role="alert">No files attached.</div></div></div></div><div class="row"><div ng-if="vm.hasCurrentUserUploadRights" class="col-lg-12"><div ng-if="vm.selectedFile && !vm.fileInvalidMessageArray.length"><div class="alert alert-success valid-file-alert-box" role="alert"><div class="row"><div class="col-lg-4 text-center"><i class="fa fa-file fa-5x" aria-hidden="true"></i></div><div class="col-lg-6"><strong>File ready to import.</strong><dl class="dl-horizontal"><dt>filename</dt><dd>{{ vm.selectedFile.name }}</dd><dt>size</dt><dd>{{ vm.convertBytesToMegaBytes(vm.selectedFile.size) }} mb</dd><dt>file type</dt><dd>{{ vm.selectedFile.type }}</dd></dl></div><div class="col-lg-2 text-center file-upload-alert-action-btns"><button class="btn btn-primary text-center" ng-click="vm.importSelectedFile()"><i class="fa fa-upload" aria-hidden="true"></i> Import file</button> <button class="btn btn-danger text-center" ng-click="vm.clearSelectedFile()"><i class="fa fa-trash" aria-hidden="true"></i> Clear</button></div></div></div></div><div ng-if="vm.selectedFile && vm.fileInvalidMessageArray.length"><div class="alert alert-danger invalid-file-alert-box" role="alert"><div class="row"><div class="col-lg-6 col-lg-offset-4"><strong>Warning</strong> File is invalid.<ul><li ng-repeat="invalidFileMessage in vm.fileInvalidMessageArray">{{ invalidFileMessage }}</li></ul></div><div class="col-lg-2 text-center file-upload-alert-action-btns"><button class="btn btn-danger" ng-click="vm.clearSelectedFile()"><i class="fa fa-trash" aria-hidden="true"></i> Clear</button></div></div></div></div><div ng-if="!vm.selectedFile"><div class="row"><div class="col-lg-12"><div class="upload-file-drop-zone" ngf-drop ngf-select ng-model="vm.selectedFile" ngf-change="vm.onFileSelected($file, $event)" ngf-multiple="false" ngf-drag-over-class="\'dragover\'"><div class="upload-file-drag-and-drop-msg">Upload file</div><input ngf-select id="input-file-select-field" type="file" ng-model="vm.selectedFile" ngf-change="vm.onFileSelected($file, $event)" ngf-multiple="false"></div></div></div></div></div><div ng-if="!vm.hasCurrentUserUploadRights" class="col-lg-12"><div class="alert alert-warning text-center" role="alert">You don\'t have the rights to upload any documents for this element.</div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('file-attachment-component-tpl');
} catch (e) {
  module = angular.module('file-attachment-component-tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/smart-table/smart-table-pagination.tpl.html',
    '<nav ng-if="pages.length >= 2"><ul class="pagination"><li ng-class="{ disabled : currentPage === 1}"><a ng-click="selectPage(1)"><i class="fa fa-angle-double-left"></i></a></li><li ng-class="{ disabled : currentPage === 1}"><a ng-click="selectPage(currentPage-1)"><i class="fa fa-angle-left"></i></a></li><li ng-repeat="page in pages" ng-class="{active: page==currentPage}"><a ng-click="selectPage(page)">{{ page }}</a></li><li ng-class="{ disabled : currentPage === numPages}"><a ng-click="selectPage(currentPage+1)"><i class="fa fa-angle-right"></i></a></li><li ng-class="{ disabled : currentPage === numPages}"><a ng-click="selectPage(numPages)"><i class="fa fa-angle-double-right"></i></a></li></ul></nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('file-attachment-component-tpl');
} catch (e) {
  module = angular.module('file-attachment-component-tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('templates/angular-busy/angular-busy-custom.tpl.html',
    '<div class="cg-busy-default-wrapper"><div class="cg-busy-position"><div class="cg-busy-default-spinner"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div><div class="bar4"></div><div class="bar5"></div><div class="bar6"></div><div class="bar7"></div><div class="bar8"></div><div class="bar9"></div><div class="bar10"></div><div class="bar11"></div><div class="bar12"></div></div></div></div>');
}]);
})();
