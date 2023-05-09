import { defineStore } from "pinia";

export interface postState {
  visibility: string
  groupID: string
  post: string
  tags: any[],
  images: any[],
  linkable: string,
  linkableObj: any
}

export const usePostStore = defineStore("post", {
  state: (): postState => ({
    visibility: '',
    groupID: '',
    post: '',
    tags: [],
    images: [],
    linkable: '',
    linkableObj: {
      id: ''
    }
  }),
  actions: {
    set(obj: postState) {
      this.visibility = obj.visibility
      this.groupID = obj.groupID
      this.post = obj.post
      this.tags = obj.tags
      this.images = obj.images
      this.linkable = obj.linkable
      this.linkableObj = obj.linkableObj
    }
  },
  persist: true
});
